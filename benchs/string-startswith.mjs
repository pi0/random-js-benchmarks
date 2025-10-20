import { runBenchmarks, do_not_optimize } from "./_common.mjs";

const samples = ["hello", "world", "test", "another", "final"];

const inputs = [
  {
    name: "without colon",
    values: samples,
  },
  {
    name: "with colon",
    values: samples.map((s) => `:${s}`),
  },
];

const implementations = [
  (str) => do_not_optimize(str.startsWith(":")),
  (str) => do_not_optimize(str[0] === ":"),
  (str) => do_not_optimize(str.charCodeAt(0) === 58),
  (str) => do_not_optimize(str.codePointAt(0) === 58),
];

const tests = [
  [":with", true],
  ["without", false],
  ["", false],
];

await runBenchmarks(implementations, inputs, tests);
