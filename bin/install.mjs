#!/usr/bin/env node
import fs from "fs";
import fse from "fs-extra";
import path from "path";
import process from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CWD = process.cwd();
const SRC = path.join(__dirname, "..", "dist", ".aura-core");
const DEST = path.join(CWD, ".aura-core");
const COMMANDS_SRC = path.join(SRC, "commands");
const COMMANDS_DEST = path.join(CWD, ".claude", "commands");
const OPCODE = path.join(CWD, "opencode.jsonc");
const OPJSON = path.join(CWD, "opencode.json");

async function main() {
  // 1) Copy .aura-core into the project
  await fse.copy(SRC, DEST, { overwrite: true, errorOnExist: false });
  console.log("✔ Copied .aura-core into your project");

  // 2) Copy Claude commands to .claude/commands/
  await fse.ensureDir(COMMANDS_DEST);
  await fse.copy(COMMANDS_SRC, COMMANDS_DEST, { overwrite: true, errorOnExist: false });
  console.log("✔ Installed Claude Code commands (/orchestrator, /designer, /content, /slides, /assessment, /curve, /qa)");

  // 3) Merge into opencode.jsonc / opencode.json
  const ensureInstruction = (obj) => {
    obj.instructions = obj.instructions || [];
    if (!obj.instructions.includes(".aura-core/core-config.yaml")) {
      obj.instructions.push(".aura-core/core-config.yaml");
    }
    return obj;
  };

  const writeJson = (file, obj) => fs.writeFileSync(file, JSON.stringify(obj, null, 2));

  if (fs.existsSync(OPCODE)) {
    // naive JSONC strip of comments (optional: use a JSONC parser if you like)
    const raw = fs.readFileSync(OPCODE, "utf8")
      .replace(/\/\/.*$/gm, "")
      .replace(/\/\*[\s\S]*?\*\//g, "");
    let obj = {};
    try { obj = JSON.parse(raw); } catch {}
    writeJson(OPCODE, ensureInstruction(obj));
    console.log("✔ Updated opencode.jsonc with AURA instructions");
  } else if (fs.existsSync(OPJSON)) {
    const obj = JSON.parse(fs.readFileSync(OPJSON, "utf8"));
    writeJson(OPJSON, ensureInstruction(obj));
    console.log("✔ Updated opencode.json with AURA instructions");
  } else {
    // create a minimal opencode.jsonc
    writeJson(OPCODE, ensureInstruction({ instructions: [] }));
    console.log("✔ Created minimal opencode.jsonc with AURA instructions");
  }

  console.log("\n✅ AURA installed. Use your agents with AURA workflows/templates now.");
}

main().catch((e) => {
  console.error("AURA install failed:", e);
  process.exit(1);
});
