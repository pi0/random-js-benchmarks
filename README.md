# Random JS Benchmarks

See [benchs/](./benchs/) for benchmarks.

Run with `pnpm bench <name>`

## Results

### `string-startswith`

<details>
<summary>Node.js</summary>

```
clk: ~3.91 GHz
cpu: Apple M4 Pro
runtime: node 24.10.0 (arm64-darwin)

benchmark                   avg (min … max) p75 / p99    (min … top 1%)
------------------------------------------- -------------------------------
• without colon
------------------------------------------- -------------------------------
str.codePointAt(0) === 58      9.94 ns/iter  10.02 ns  11.69 ns ▂▁▁▁█▁▁▁▁▁▁
str.charCodeAt(0) === 58      22.22 ns/iter  22.40 ns  25.10 ns ▂▁▂▂█▂▁▁▁▁▁
str[0] === ":"                24.22 ns/iter  24.45 ns  27.47 ns ▁▂▂▂▃█▂▁▁▁▁
str.startsWith(":")           22.51 ns/iter  22.64 ns  25.34 ns ▁▁▂▂▂█▂▁▁▁▁

summary
  str.codePointAt(0) === 58
   2.24x faster than str.charCodeAt(0) === 58
   2.27x faster than str.startsWith(":")
   2.44x faster than str[0] === ":"

• with colon
------------------------------------------- -------------------------------
str.codePointAt(0) === 58     22.20 ns/iter  22.63 ns  24.81 ns ▁▁▂▂▂█▅▁▁▁▁
str.charCodeAt(0) === 58      22.27 ns/iter  22.42 ns  24.89 ns ▁▁▂▂▂█▁▁▁▁▁
str[0] === ":"                24.85 ns/iter  24.64 ns  30.38 ns ▁▂▂█▂▁▁▁▁▁▁
str.startsWith(":")           22.85 ns/iter  23.50 ns  26.08 ns ▁▁▂▂█▂▅▁▁▁▁

summary
  str.codePointAt(0) === 58
   1x faster than str.charCodeAt(0) === 58
   1.03x faster than str.startsWith(":")
   1.12x faster than str[0] === ":"
```

</details>

<details>
<summary>bun</summary>

```
clk: ~4.32 GHz
cpu: Apple M4 Pro
runtime: bun 1.3.0 (arm64-darwin)

benchmark                   avg (min … max) p75 / p99    (min … top 1%)
------------------------------------------- -------------------------------
• without colon
------------------------------------------- -------------------------------
str[0] === ":"                 7.45 ns/iter   7.56 ns  10.29 ns ▂▂█▅▁▁▁▁▁▁▁
str.startsWith(":")           41.87 ns/iter  42.96 ns  47.42 ns ▁▁▁▂▆█▅▄▁▁▁
str.charCodeAt(0) === 58      11.89 ns/iter  12.55 ns  16.34 ns ▁▂▄▅▅█▂▁▁▁▁
str.codePointAt(0) === 58     12.40 ns/iter  12.77 ns  17.61 ns ▁▂▃▄█▃▂▁▁▁▁

summary
  str[0] === ":"
   1.6x faster than str.charCodeAt(0) === 58
   1.66x faster than str.codePointAt(0) === 58
   5.62x faster than str.startsWith(":")

• with colon
------------------------------------------- -------------------------------
str[0] === ":"                19.11 ns/iter  19.26 ns  22.09 ns ▁▂▂▂█▂▁▁▁▁▁
str.startsWith(":")           55.04 ns/iter  58.40 ns  61.88 ns ▁▁▂▇█▂▃▅▅▄▂
str.charCodeAt(0) === 58      22.63 ns/iter  23.18 ns  25.47 ns ▂▂▃▃▃█▅▂▁▁▁
str.codePointAt(0) === 58     23.45 ns/iter  24.36 ns  26.63 ns ▁▂▃▄▆▃█▅▁▁▁

summary
  str[0] === ":"
   1.18x faster than str.charCodeAt(0) === 58
   1.23x faster than str.codePointAt(0) === 58
   2.88x faster than str.startsWith(":")
```

</details>

<details>
<summary>Deno</summary>

```
clk: ~4.21 GHz
cpu: Apple M4 Pro
runtime: deno 2.5.4 (aarch64-apple-darwin)

benchmark                   avg (min … max) p75 / p99    (min … top 1%)
------------------------------------------- -------------------------------
• without colon
------------------------------------------- -------------------------------
str.charCodeAt(0) === 58      10.03 ns/iter  10.13 ns  12.34 ns ▁▂▃▇█▄▁▁▃▁▁
str[0] === ":"                24.19 ns/iter  24.17 ns  26.63 ns ▁▁▁▁▁█▁▁▁▁▁
str.startsWith(":")           22.47 ns/iter  22.44 ns  25.56 ns ▁▁▁▁█▁▁▁▁▁▁
str.codePointAt(0) === 58     21.99 ns/iter  21.98 ns  24.61 ns ▁▁▁▁▁█▁▁▁▁▁

summary
  str.charCodeAt(0) === 58
   2.19x faster than str.codePointAt(0) === 58
   2.24x faster than str.startsWith(":")
   2.41x faster than str[0] === ":"

• with colon
------------------------------------------- -------------------------------
str.charCodeAt(0) === 58      22.20 ns/iter  22.17 ns  24.55 ns ▁▁▁▁▁█▂▂▁▁▁
str[0] === ":"                24.07 ns/iter  24.11 ns  26.46 ns ▁▁▁▁▁█▁▂▁▁▁
str.startsWith(":")           22.09 ns/iter  22.10 ns  24.65 ns ▁▁▁▁▁█▂▁▁▁▁
str.codePointAt(0) === 58     22.26 ns/iter  22.58 ns  24.99 ns ▁▁▁▁█▃▆▁▁▁▁

summary
  str.startsWith(":")
   1.01x faster than str.charCodeAt(0) === 58
   1.01x faster than str.codePointAt(0) === 58
   1.09x faster than str[0] === ":"
```

</details>
