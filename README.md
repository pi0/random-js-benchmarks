# Random JS Benchmarks

See [benchs/](./benchs/) for benchmarks.

Run with `pnpm bench <name>`

## Results

### `string-startswith`

<details>
<summary>Node.js</summary>

```
clk: ~4.48 GHz
cpu: Apple M4 Pro
runtime: node 24.10.0 (arm64-darwin)

benchmark                          avg (min … max) p75 / p99    (min … top 1%)
-------------------------------------------------- -------------------------------
str.startsWith(":") (":test")       259.95 ps/iter 264.40 ps 294.92 ps ▁▁▂▂▁██▁▁▂▁
str.startsWith(":") ("test")        251.13 ps/iter 254.39 ps 264.65 ps ▁▁▂▁▁▁▃▁█▁▁
str.charCodeAt(0) === 58 (":test")  260.80 ps/iter 264.40 ps 274.66 ps ▁▁▂▁▁▁▃▁█▁▁
str.charCodeAt(0) === 58 ("test")   250.86 ps/iter 254.39 ps 264.65 ps ▁▁▂▁▂▁▃▁█▁▁
str[0] === ":" (":test")            177.28 ps/iter 173.10 ps 233.89 ps ▁▃▃█▁▁▂▁▁▂▁
str[0] === ":" ("test")             176.84 ps/iter 173.10 ps 223.88 ps ▁▃▂▂█▁▃▁▁▁▁
str.codePointAt(0) === 58 (":test") 265.72 ps/iter 264.65 ps 284.91 ps ▁▁▂▂▁▁▁█▃▁▁
str.codePointAt(0) === 58 ("test")  256.83 ps/iter 254.39 ps 274.66 ps ▁▁▁▂▁▁▁█▃▁▁

summary
  str[0] === ":" ("$input")
   +1.47…+1.42x faster than str.startsWith(":") ("$input")
   +1.47…+1.42x faster than str.charCodeAt(0) === 58 ("$input")
   +1.5…+1.45x faster than str.codePointAt(0) === 58 ("$input")
```

</details>

<details>
<summary>bun</summary>

```
clk: ~4.32 GHz
cpu: Apple M4 Pro
runtime: bun 1.3.0 (arm64-darwin)

benchmark                          avg (min … max) p75 / p99    (min … top 1%)
-------------------------------------------------- -------------------------------
str.startsWith(":") (":test")         7.05 ns/iter   7.17 ns   8.36 ns ▁▁▁█▅▆▁▁▁▁▁
str.startsWith(":") ("test")          7.70 ns/iter   7.91 ns   8.85 ns ▁▁▁▂██▆▁▃▁▁
str.charCodeAt(0) === 58 (":test")  623.60 ps/iter 569.58 ps   1.59 ns ▂█▁▁▁▁▁▁▁▁▁
str.charCodeAt(0) === 58 ("test")     3.62 ns/iter   3.63 ns   3.86 ns ▁▁▁▁▁▂█▆▂▂▁
str.codePointAt(0) === 58 (":test")   1.05 ns/iter   1.45 ns   3.56 ns █▁▁▂▂▁▁▁▁▂▁
str.codePointAt(0) === 58 ("test")  445.83 ps/iter 467.77 ps 488.28 ps ▁▁▁▁▁▆▂▄▆█▁
str[0] === ":" (":test")              3.68 ns/iter   3.71 ns   4.08 ns ▁▁▁▁▂██▁▁▁▁
str[0] === ":" ("test")               3.43 ns/iter   3.42 ns   3.64 ns ▁▁▁▁▁▁█▃▁▁▁

summary
  str.codePointAt(0) === 58 ("$input")
   +3.44…+1.4x faster than str.charCodeAt(0) === 58 ("$input")
   +3.5…+7.69x faster than str[0] === ":" ("$input")
   +7.33…+15.82x faster than str.startsWith(":") ("$input")
```

</details>

<details>
<summary>Deno</summary>

```
clk: ~4.16 GHz
cpu: Apple M4 Pro
runtime: deno 2.5.4 (aarch64-apple-darwin)

benchmark                          avg (min … max) p75 / p99    (min … top 1%)
-------------------------------------------------- -------------------------------
str.codePointAt(0) === 58 (":test") 271.79 ps/iter 274.66 ps 305.18 ps ▁▁▁▂▁▇█▁▁▂▁
str.codePointAt(0) === 58 ("test")  264.61 ps/iter 264.65 ps 274.66 ps ▁▁▂▁▁▁▁▁█▁▂
str.startsWith(":") (":test")       284.67 ps/iter 294.92 ps 305.18 ps ▁▂▁▁▃▁█▁▁█▂
str.startsWith(":") ("test")        270.43 ps/iter 274.66 ps 284.91 ps ▁▁▁▂▁▁▁██▁▁
str.charCodeAt(0) === 58 (":test")  271.21 ps/iter 274.66 ps 294.92 ps ▁▁▁▂▁▁▆█▁▁▁
str.charCodeAt(0) === 58 ("test")   278.11 ps/iter 274.66 ps 305.18 ps ▁▁▁▁▁▁█▃▁▁▁
str[0] === ":" (":test")            189.85 ps/iter 183.11 ps 234.13 ps ▁▂▂▁█▁▂▁▁▁▂
str[0] === ":" ("test")             192.76 ps/iter 203.37 ps 244.14 ps ▁▁▂▂█▁▃▂▁▂▁

summary
  str[0] === ":" ("$input")
   +1.41…+1.39x faster than str.codePointAt(0) === 58 ("$input")
   +1.44…+1.43x faster than str.charCodeAt(0) === 58 ("$input")
   +1.48…+1.42x faster than str.startsWith(":") ("$input")
```

</details>
