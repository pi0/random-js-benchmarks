import { bench, run, group, compact, summary } from "mitata";

export { do_not_optimize } from "mitata";

const compactGroup = (title, fn) =>
  group(title, () => compact(() => summary(fn)));

export async function runBenchmarks(implementations, inputs) {
  implementations.sort(() => Math.random() - 0.5);
  inputs.sort(() => Math.random() - 0.5);
  for (const input of inputs) {
    compactGroup(input.name, () => {
      for (let impl of implementations) {
        if (typeof impl === "function") {
          impl = { fn: impl };
        }
        const name =
          impl.name ||
          impl.fn
            .toString()
            .replace(/do_not_optimize\((.+)\)/g, "$1")
            .replace(/^\(.+\) => /, "");
        bench(name, function* (state) {
          const value = state.get("value");
          yield {
            [0]() {
              return value;
            },
            bench() {
              for (const value of input.values) {
                return impl.fn(value);
              }
            },
          };
        });
      }
    });
  }
  await run();
}
