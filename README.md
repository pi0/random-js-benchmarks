# Random JS Benchmarks

See [benchs/](./benchs/) for benchmarks.

Run with `pnpm bench <name>`

## Results

### `string-startswith`

<details>
<summary>Node.js</summary>

```
clk: ~4.39 GHz
cpu: Apple M4 Pro
runtime: node 24.10.0 (arm64-darwin)

benchmark                   avg (min … max) p75 / p99    (min … top 1%)
------------------------------------------- -------------------------------
• with colon
------------------------------------------- -------------------------------
str[0] === ":"                 2.69 ns/iter   2.73 ns   3.42 ns ▃▁▁█▁▁▁▁▁▁▁
str.startsWith(":")            4.43 ns/iter   4.49 ns   5.65 ns ▂▁▁█▁▁▁▁▁▁▁
str.charCodeAt(0) === 58       4.32 ns/iter   4.37 ns   5.49 ns ▂▁▁█▁▁▁▁▁▁▁
str.codePointAt(0) === 58      4.40 ns/iter   4.46 ns   5.69 ns ▂▁▁█▁▁▁▁▁▁▁

summary
  str[0] === ":"
   1.61x faster than str.charCodeAt(0) === 58
   1.64x faster than str.codePointAt(0) === 58
   1.65x faster than str.startsWith(":")

• without colon
------------------------------------------- -------------------------------
str[0] === ":"                 4.78 ns/iter   4.84 ns   6.11 ns ▂▁▁█▁▁▁▁▁▁▁
str.startsWith(":")            4.34 ns/iter   4.41 ns   5.52 ns ▃▁▁█▁▁▁▁▁▁▁
str.charCodeAt(0) === 58       4.35 ns/iter   4.40 ns   5.18 ns ▂▁▁▁█▁▁▁▁▁▁
str.codePointAt(0) === 58      4.41 ns/iter   4.48 ns   5.47 ns ▃▁▁█▂▁▁▁▁▁▁

summary
  str.startsWith(":")
   1x faster than str.charCodeAt(0) === 58
   1.02x faster than str.codePointAt(0) === 58
   1.1x faster than str[0] === ":"
```

</details>

<details>
<summary>bun</summary>

```
clk: ~4.33 GHz
cpu: Apple M4 Pro
runtime: bun 1.3.0 (arm64-darwin)

benchmark                   avg (min … max) p75 / p99    (min … top 1%)
------------------------------------------- -------------------------------
• without colon
------------------------------------------- -------------------------------
str.charCodeAt(0) === 58     790.69 ps/iter 813.72 ps 915.53 ps ▁▇▁▁▃█▁▁▁▁▁
str.startsWith(":")           10.25 ns/iter   9.16 ns  26.48 ns ▅█▁▁▁▁▁▁▁▁▁
str.codePointAt(0) === 58      1.91 ns/iter   1.85 ns   3.70 ns ▃█▃▁▁▁▁▁▁▁▁
str[0] === ":"                 2.60 ns/iter   2.53 ns   4.24 ns ▂▇█▂▁▁▁▁▂▂▂

summary
  str.charCodeAt(0) === 58
   2.41x faster than str.codePointAt(0) === 58
   3.29x faster than str[0] === ":"
   12.96x faster than str.startsWith(":")

• with colon
------------------------------------------- -------------------------------
str.charCodeAt(0) === 58       4.77 ns/iter   5.28 ns   6.14 ns ▂▃▂▂▁█▂▇▁▁▁
str.startsWith(":")            9.72 ns/iter   9.92 ns  11.43 ns ▁▃▂▂▅█▁▁▁▁▁
str.codePointAt(0) === 58      4.20 ns/iter   4.27 ns   5.12 ns ▄▁▁▅█▁▁▁▁▁▁
str[0] === ":"                 3.82 ns/iter   3.88 ns   4.60 ns ▂▂▁▁█▁▁▁▁▁▁

summary
  str[0] === ":"
   1.1x faster than str.codePointAt(0) === 58
   1.25x faster than str.charCodeAt(0) === 58
   2.54x faster than str.startsWith(":")
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
• with colon
------------------------------------------- -------------------------------
str[0] === ":"                 2.62 ns/iter   2.64 ns   3.37 ns ▂▁▁█▁▁▁▁▁▁▁
str.codePointAt(0) === 58      4.37 ns/iter   4.39 ns   5.40 ns ▂▁▁█▁▁▁▁▁▁▁
str.startsWith(":")            4.38 ns/iter   4.40 ns   5.55 ns ▂▁▁█▁▁▁▁▁▁▁
str.charCodeAt(0) === 58       4.41 ns/iter   4.43 ns   5.58 ns ▂▁▁█▁▁▁▁▁▁▁

summary
  str[0] === ":"
   1.67x faster than str.codePointAt(0) === 58
   1.67x faster than str.startsWith(":")
   1.68x faster than str.charCodeAt(0) === 58

• without colon
------------------------------------------- -------------------------------
str[0] === ":"                 4.78 ns/iter   4.79 ns   6.02 ns ▂▁▁█▁▁▁▁▁▁▁
str.codePointAt(0) === 58      4.38 ns/iter   4.43 ns   5.53 ns ▂▁▁█▁▁▁▁▁▁▁
str.startsWith(":")            4.36 ns/iter   4.39 ns   5.56 ns ▂▁▁█▁▁▁▁▁▁▁
str.charCodeAt(0) === 58       4.38 ns/iter   4.41 ns   5.44 ns ▂▁▁█▁▁▁▁▁▁▁

summary
  str.startsWith(":")
   1x faster than str.charCodeAt(0) === 58
   1.01x faster than str.codePointAt(0) === 58
   1.1x faster than str[0] === ":"
```

</details>
