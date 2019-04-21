# compose

[![travis](https://img.shields.io/travis/piecioshka/compose.svg)](https://travis-ci.org/piecioshka/compose)
[![dependencies](https://david-dm.org/piecioshka/compose.svg)](https://github.com/piecioshka/compose)
[![codecov](https://codecov.io/gh/piecioshka/compose/branch/master/graph/badge.svg)](https://codecov.io/gh/piecioshka/compose)

:hammer: Simple helper for composition. Similar to `pipe` from RxJS.

## Features

* :white_check_mark: Create one function which make pipeline of passed functions

## Usage

```javascript
const compose = require('@piecioshka/compose');
const what = compose(
    () => 2,
    (v) => v + 1,
    (v) => v * 10
);
console.assert(what, 30); // true
```

## Unit tests

```bash
npm test
```

## Code coverage

```bash
npm run coverage
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
