import { bench, run, group, compact, summary } from "mitata";

export { do_not_optimize } from "mitata";

const compactGroup = (title, fn) =>
  group(title, () => compact(() => summary(fn)));

export async function runBenchmarks(implementations, inputs, tests) {
  implementations.sort(() => Math.random() - 0.5);

  for (const input of inputs) {
    compactGroup(input.name, () => {
      for (let impl of implementations) {
        if (typeof impl === "function") {
          impl = { fn: impl };
        }

        const fnCode = impl.fn
          .toString()
          .replace(/do_not_optimize\((.+)\)/g, "$1");

        const fnEval = new Function(`return ${fnCode}`)();
        if (tests) {
          for (const [testInput, expected] of tests) {
            const result = fnEval(testInput);
            if (result !== expected) {
              throw new Error(
                `Implementation failed for input "${testInput}": expected ${expected}, got ${result}`,
              );
            }
          }
        }

        const name = impl.name || fnCode.replace(/^\(.+\) => /, "");
        bench(name, () => {
          for (const value of input.values) {
            return impl.fn(value);
          }
        });
      }
    });
  }
  await run();
}
