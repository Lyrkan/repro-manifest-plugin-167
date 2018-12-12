Repro for https://github.com/danethurber/webpack-manifest-plugin/issues/167

```
$ yarn
$ yarn build
```

```js
// Expected dist/manifest.json
{
  "main.css": "main.css",
  "main.js": "main.js",
  "Roboto.woff2": "9896f773628188b649ed5824fa363290.woff2"
}
```

```js
// Actual dist/manifest.json
{
  "main.css": "main.css",
  "main.js": "main.js",
  "roboto_font.css": "9896f773628188b649ed5824fa363290.woff2"
}