#!/bin/env node
import { execSync } from "node:child_process";

const benchName = process.argv[2];

const md = (...args) => process.env.RENDER_MARKDOWN && console.log(...args);

const bench = async (title, cmd) => {
  md("<details>");
  md(`<summary>${title}</summary>`);
  md("");
  md("```");
  await execSync(cmd, {
    stdio: "inherit",
  });
  md("```");
  md("</details>");
  md("");
};

await bench("Node.js", `node --expose-gc ./benchs/${benchName}.mjs`);
await bench("Deno", `deno run -A ./benchs/${benchName}.mjs`);
await bench("bun", `bun ./benchs/${benchName}.mjs`);
