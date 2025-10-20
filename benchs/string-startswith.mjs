import { do_not_optimize } from "mitata";
import { runBenchmarks } from "./_common.mjs";

const implementations = [
  (str) => do_not_optimize(str.startsWith(":")),
  (str) => do_not_optimize(str[0] === ":"),
  (str) => do_not_optimize(str.charCodeAt(0) === 58),
  (str) => do_not_optimize(str.codePointAt(0) === 58),
];

const inputs = [":test", "test"];

const tests = [
  [":test", true],
  ["test", false],
  ["", false],
];

await runBenchmarks(implementations, inputs, tests);
