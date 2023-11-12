# pipe

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
