import { bench, run, compact, summary, do_not_optimize } from "mitata";

const compactSummary = (fn) => summary(() => compact(fn));

export async function runBenchmarks(impls, inputs, tests) {
  impls.sort(() => Math.random() - 0.5);

  compactSummary(() => {
    for (let fn of impls) {
      const fnStr = fn.toString().replace(/do_not_optimize\((.+)\)/g, "$1");
      if (tests) {
        for (const [testInput, expected] of tests) {
          const fnEval = new Function(`return ${fnStr}`)();
          const result = fnEval(testInput);
          if (result !== expected) {
            throw new Error(
              `Implementation failed for input "${testInput}": expected ${expected}, got ${result}`,
            );
          }
        }
      }
      bench(`${fnStr.replace(/^\(.+\) => /, "")} ("$input")`, function* (ctx) {
        const input = ctx.get("input");
        yield () => {
          return do_not_optimize(fn(input));
        };
      }).args("input", inputs);
    }
  });

  await run();
}
