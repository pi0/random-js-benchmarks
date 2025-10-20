import { bench, run, compact, summary, do_not_optimize } from "mitata";

const compactSummary = (fn) => summary(() => compact(fn));

export async function runBenchmarks(impls, inputs, tests) {
  // ensure order won't affect results
  impls.sort(() => Math.random() - 0.5);
  inputs.sort(() => Math.random() - 0.5);

  compactSummary(() => {
    for (let fn of impls) {
      if (tests) {
        for (const [testInput, expected] of tests) {
          const result = fn(testInput);
          if (result !== expected) {
            throw new Error(
              `Implementation failed for input "${testInput}": expected ${expected}, got ${result}`,
            );
          }
        }
      }
      bench(
        `${fn.toString().replace(/^\(.+\) => /, "")} ("$input")`,
        function* (ctx) {
          const input = ctx.get("input");
          yield {
            [0]() {
              return input;
            },
            bench(input) {
              return do_not_optimize(fn(input));
            },
          };
        },
      ).args("input", inputs);
    }
  });

  await run();
}
