# Random JS Benchmarks

See [benchs/](./benchs/) for benchmarks.

Run with `pnpm bench <name>`

## Results

### `string-startswith`

<details>
<summary>Node.js</summary>

```
clk: ~4.35 GHz
cpu: Apple M4 Pro
runtime: node 24.10.0 (arm64-darwin)

benchmark                   avg (min … max) p75 / p99    (min … top 1%)
------------------------------------------- -------------------------------
• without colon
------------------------------------------- -------------------------------
str.charCodeAt(0) === 58       2.22 ns/iter   2.27 ns   2.92 ns ▄▂▂█▁▁▂▁▁▁▁
str[0] === ":"                 4.72 ns/iter   4.87 ns   6.23 ns ▅▂▁█▁▁▁▁▁▁▁
str.startsWith(":")            4.42 ns/iter   4.56 ns   5.82 ns ▅▂▁█▁▁▁▁▁▁▁
str.codePointAt(0) === 58      4.35 ns/iter   4.48 ns   5.74 ns ▅▁▁█▁▁▁▁▁▁▁

summary
  str.charCodeAt(0) === 58
   1.96x faster than str.codePointAt(0) === 58
   1.99x faster than str.startsWith(":")
   2.13x faster than str[0] === ":"

• with colon
------------------------------------------- -------------------------------
str.charCodeAt(0) === 58       4.36 ns/iter   4.47 ns   5.71 ns ▄▁▁█▁▁▁▁▁▁▁
str[0] === ":"                 4.71 ns/iter   4.85 ns   6.17 ns ▅▁▁█▁▁▁▁▁▁▁
str.startsWith(":")            4.41 ns/iter   4.53 ns   5.79 ns ▄▂▁█▁▁▁▁▁▁▁
str.codePointAt(0) === 58      4.36 ns/iter   4.46 ns   5.72 ns ▄▁▁█▁▁▁▁▁▁▁

summary
  str.codePointAt(0) === 58
   1x faster than str.charCodeAt(0) === 58
   1.01x faster than str.startsWith(":")
   1.08x faster than str[0] === ":"
```

</details>

<details>
<summary>bun</summary>

```
clk: ~4.29 GHz
cpu: Apple M4 Pro
runtime: bun 1.3.0 (arm64-darwin)

benchmark                   avg (min … max) p75 / p99    (min … top 1%)
------------------------------------------- -------------------------------
• without colon
------------------------------------------- -------------------------------
str.codePointAt(0) === 58    715.48 ps/iter 742.68 ps 956.30 ps ▃█▁▆▁▁▁▁▁▁▁
str.charCodeAt(0) === 58       1.94 ns/iter   1.95 ns   3.60 ns ▆█▃▁▁▁▁▁▁▁▁
str.startsWith(":")           12.26 ns/iter  11.52 ns  26.32 ns ▅█▂▁▁▁▁▂▂▂▁
str[0] === ":"                 2.36 ns/iter   2.15 ns   4.56 ns ▅█▁▁▁▁▁▂▁▁▁

summary
  str.codePointAt(0) === 58
   2.71x faster than str.charCodeAt(0) === 58
   3.29x faster than str[0] === ":"
   17.13x faster than str.startsWith(":")

• with colon
------------------------------------------- -------------------------------
str.codePointAt(0) === 58      4.70 ns/iter   5.39 ns   6.74 ns ▄▄▁▅█▅▆▅▁▁▁
str.charCodeAt(0) === 58       3.63 ns/iter   3.77 ns   4.82 ns ▆▂▁█▁▁▁▁▁▁▁
str.startsWith(":")           10.32 ns/iter  10.75 ns  12.65 ns ▁▃▅▃▄█▁▁▁▁▁
str[0] === ":"                 6.66 ns/iter   6.88 ns   8.37 ns ▂▆▂▃█▂▁▁▁▁▁

summary
  str.charCodeAt(0) === 58
   1.29x faster than str.codePointAt(0) === 58
   1.83x faster than str[0] === ":"
   2.84x faster than str.startsWith(":")
```

</details>

<details>
<summary>Deno</summary>

```
clk: ~4.20 GHz
cpu: Apple M4 Pro
runtime: deno 2.5.4 (aarch64-apple-darwin)

benchmark                   avg (min … max) p75 / p99    (min … top 1%)
------------------------------------------- -------------------------------
• without colon
------------------------------------------- -------------------------------
str[0] === ":"                 2.63 ns/iter   2.68 ns   3.49 ns ▄▁▁█▁▁▁▁▁▁▁
str.startsWith(":")            4.34 ns/iter   4.40 ns   5.64 ns ▃▁▁█▁▁▁▁▁▁▁
str.charCodeAt(0) === 58       4.37 ns/iter   4.44 ns   5.69 ns ▃▁▁█▁▁▁▁▁▁▁
str.codePointAt(0) === 58      4.37 ns/iter   4.45 ns   5.75 ns ▃▁▁█▁▁▁▁▁▁▁

summary
  str[0] === ":"
   1.65x faster than str.startsWith(":")
   1.66x faster than str.charCodeAt(0) === 58
   1.67x faster than str.codePointAt(0) === 58

• with colon
------------------------------------------- -------------------------------
str[0] === ":"                 4.71 ns/iter   4.78 ns   6.10 ns ▃▁▁█▁▁▁▁▁▁▁
str.startsWith(":")            4.40 ns/iter   4.48 ns   5.72 ns ▃▁▁█▁▁▁▁▁▁▁
str.charCodeAt(0) === 58       4.36 ns/iter   4.41 ns   5.66 ns ▃▁▁█▁▁▁▁▁▁▁
str.codePointAt(0) === 58      4.33 ns/iter   4.39 ns   5.66 ns ▃▁▁█▁▁▁▁▁▁▁

summary
  str.codePointAt(0) === 58
   1.01x faster than str.charCodeAt(0) === 58
   1.02x faster than str.startsWith(":")
   1.09x faster than str[0] === ":"
```

</details>
