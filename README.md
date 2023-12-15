# UpHash

UpHash provides a flexible and extensible way to create cryptographic hashes from various types of data.
It allows custom serialization of the input and supports multiple hashing algorithms.
Supports Browser and NodeJS.

[![Coverage Status][codecov-image]][codecov-url]
[![Github Build Status][github-image]][github-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Snyk][snyk-image]][snyk-url]


## Platform Support

| ![NodeJS][node-image] | ![Chrome][chrome-image] | ![Firefox][firefox-image] | ![Safari][safari-image] | ![Opera][opera-image] | ![Edge][edge-image] |
| --------------------- | ----------------------- | ------------------------- | ----------------------- | --------------------- | ------------------- |
| Latest ✔             | Latest ✔               | Latest ✔                 | Latest ✔               | Latest ✔             | Latest ✔           |

[node-image]: https://raw.github.com/alrra/browser-logos/main/src/node.js/node.js_48x48.png?1
[chrome-image]: https://raw.github.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png?1
[firefox-image]: https://raw.github.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png?1
[safari-image]: https://raw.github.com/alrra/browser-logos/main/src/safari/safari_48x48.png?1
[opera-image]: https://raw.github.com/alrra/browser-logos/main/src/opera/opera_48x48.png?1
[edge-image]: https://raw.github.com/alrra/browser-logos/main/src/edge/edge_48x48.png?1

## Installing

Using pnpm:

```bash
pnpm add uphash
```

Using yarn:

```bash
yarn add uphash
```

Using npm:

```bash
npm install uphash
```

## Usage

```typescript
import { createHash } from 'uphash';

const hash = createHash({ algorithm: 'SHA-256' });
const hashValue = await hash({ foo: 'bar' });
```

## License

License [Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0)
Copyright (c) 2023-present Ivan Zakharchanka

[npm-url]: https://www.npmjs.com/package/uphash
[downloads-image]: https://img.shields.io/npm/dw/uphash.svg?maxAge=43200
[npm-image]: https://img.shields.io/npm/v/uphash.svg?maxAge=43200
[github-url]: https://github.com/3axap4eHko/uphash/actions
[github-image]: https://github.com/3axap4eHko/uphash/workflows/Build%20Package/badge.svg?branch=master
[codecov-url]: https://codecov.io/gh/3axap4eHko/uphash
[codecov-image]: https://codecov.io/gh/3axap4eHko/uphash/branch/master/graph/badge.svg?maxAge=43200
[snyk-url]: https://snyk.io/test/npm/uphash/latest
[snyk-image]: https://snyk.io/test/github/3axap4eHko/uphash/badge.svg?maxAge=43200
