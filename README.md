# Random JS Benchmarks

See [benchs/](./benchs/) for benchmarks.

Run with `pnpm bench <name>`

## Results

### `string-startswith`

<details>
<summary>Node.js</summary>

```
clk: ~4.42 GHz
cpu: Apple M4 Pro
runtime: node 24.10.0 (arm64-darwin)

benchmark                          avg (min … max) p75 / p99    (min … top 1%)
-------------------------------------------------- -------------------------------
str.startsWith(":") (":test")         1.30 ns/iter   1.31 ns   1.67 ns ▂▃▃▃█▄▁▁▁▁▁
str.startsWith(":") ("test")          1.27 ns/iter   1.30 ns   1.49 ns ▂▂▂▂█▃▂▃▁▁▁
str[0] === ":" (":test")              1.47 ns/iter   1.55 ns   1.63 ns ▁▂▁▁▆█▁▁▄▃▁
str[0] === ":" ("test")               1.50 ns/iter   1.50 ns   1.67 ns ▁▂▁▁▂█▂▁▁▂▁
str.charCodeAt(0) === 58 (":test")    1.30 ns/iter   1.36 ns   1.44 ns ▂▂▂▁█▂▇▁▆▃▁
str.charCodeAt(0) === 58 ("test")     1.22 ns/iter   1.24 ns   1.37 ns ▁▁▁▁█▁▃▁▂▁▁
str.codePointAt(0) === 58 (":test")   1.35 ns/iter   1.42 ns   1.55 ns ▁▂▁▄▇▅█▅▃▂▂
str.codePointAt(0) === 58 ("test")    1.34 ns/iter   1.36 ns   1.46 ns ▁▂▁▂▄▅▂█▂▃▁

summary
  str.charCodeAt(0) === 58 ("$input")
   1…+1.05x faster than str.startsWith(":") ("$input")
   +1.04…+1.1x faster than str.codePointAt(0) === 58 ("$input")
   +1.15…+1.21x faster than str[0] === ":" ("$input")
```

</details>

<details>
<summary>Deno</summary>

```
clk: ~4.20 GHz
cpu: Apple M4 Pro
runtime: deno 2.5.4 (aarch64-apple-darwin)

benchmark                          avg (min … max) p75 / p99    (min … top 1%)
-------------------------------------------------- -------------------------------
str.startsWith(":") (":test")         1.27 ns/iter   1.27 ns   1.46 ns ▁▂▂▄▇█▃▂▄▁▁
str.startsWith(":") ("test")          1.34 ns/iter   1.37 ns   1.57 ns ▁▁▂▄▂██▂▁▁▁
str.charCodeAt(0) === 58 (":test")    1.28 ns/iter   1.31 ns   1.44 ns ▁▁▂▃▃█▂▆▃▁▁
str.charCodeAt(0) === 58 ("test")     1.26 ns/iter   1.31 ns   1.42 ns ▁▁▁▂█▂▃▅▁▂▁
str.codePointAt(0) === 58 (":test")   1.41 ns/iter   1.43 ns   1.61 ns ▁▁▁▁▃█▃▃▂▂▁
str.codePointAt(0) === 58 ("test")    1.33 ns/iter   1.32 ns   1.51 ns ▁▁▂▁▄█▁▁▁▂▁
str[0] === ":" (":test")              1.51 ns/iter   1.51 ns   1.71 ns ▁▁▁▁▇█▁▁▁▃▁
str[0] === ":" ("test")               1.45 ns/iter   1.44 ns   1.52 ns ▁▁▁▁▁▁▂█▂▁▁

summary
  str.charCodeAt(0) === 58 ("$input")
   +1.05…+1.01x faster than str.startsWith(":") ("$input")
   +1.1…+1.05x faster than str.codePointAt(0) === 58 ("$input")
   +1.19…+1.16x faster than str[0] === ":" ("$input")
```

</details>

<details>
<summary>bun</summary>

```
clk: ~4.33 GHz
cpu: Apple M4 Pro
runtime: bun 1.3.0 (arm64-darwin)

benchmark                          avg (min … max) p75 / p99    (min … top 1%)
-------------------------------------------------- -------------------------------
str[0] === ":" (":test")              1.66 ns/iter   1.78 ns   1.92 ns ▂▁▁█▃▂▂▃▃▃▁
str[0] === ":" ("test")               2.22 ns/iter   2.21 ns   2.57 ns ▂▁▁▁█▁▂▁▁▂▁
str.charCodeAt(0) === 58 (":test")    1.19 ns/iter   1.18 ns   3.64 ns ▄█▁▁▁▁▁▁▁▁▁
str.charCodeAt(0) === 58 ("test")     1.21 ns/iter   1.24 ns   1.29 ns ▁▂▁▂▁▂▄▁█▁▁
str.codePointAt(0) === 58 (":test")   3.91 ns/iter   5.72 ns   5.84 ns ▂█▁▃▁▁▁▁▁▁▅
str.codePointAt(0) === 58 ("test")    4.04 ns/iter   4.05 ns   4.91 ns ▁▁▁▅█▁▁▁▁▁▁
str.startsWith(":") (":test")        10.15 ns/iter  10.62 ns  13.01 ns ▁▂▃▁▄█▂▁▁▁▁
str.startsWith(":") ("test")          8.56 ns/iter   8.86 ns  10.73 ns ▁▂▃█▇▄▄▁▁▁▁

summary
  str.charCodeAt(0) === 58 ("$input")
   +1.84…+1.4x faster than str[0] === ":" ("$input")
   +3.34…+3.28x faster than str.codePointAt(0) === 58 ("$input")
   +8.4…+7.2x faster than str.startsWith(":") ("$input")
```

</details>
