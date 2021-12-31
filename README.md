# pipe

[![travis-ci](https://api.travis-ci.com/piecioshka/pipe.svg?branch=master)](https://app.travis-ci.com/github/piecioshka/pipe)
[![coveralls](https://coveralls.io/repos/github/piecioshka/pipe/badge.svg?branch=master)](https://coveralls.io/github/piecioshka/pipe?branch=master)

:hammer: Simple helper for composition. Similar to `pipe` from RxJS.

## Features

* :white_check_mark: Create one function which make pipeline of passed functions

## Usage

```javascript
const fn = pipe(
    (v) => v + 1,
    (v) => v * 10
);
console.assert(fn(2), 30); // true
```

## Unit tests

```bash
npm test
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
