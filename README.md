# compose

[![travis](https://img.shields.io/travis/piecioshka/compose.svg)](https://travis-ci.org/piecioshka/compose)
[![coveralls](https://coveralls.io/repos/github/piecioshka/compose/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/compose?branch=master)

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
