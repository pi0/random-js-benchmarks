import { runBenchmarks } from "./_common.mjs";

const implementations = [
  (str) => str.startsWith(":"),
  (str) => str[0] === ":",
  (str) => str.charCodeAt(0) === 58,
  (str) => str.codePointAt(0) === 58,
];

const inputs = [":test", "test"];

const tests = [
  [":test", true],
  ["test", false],
  ["", false],
];

await runBenchmarks(implementations, inputs, tests);
