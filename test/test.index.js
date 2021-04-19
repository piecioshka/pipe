'use strict';

const compose = require('../src');
const { assert, expect } = require('chai');

it('is a function', () => {
    assert.typeOf(compose, 'function');
});

it('is expected only function', () => {
    expect(() => {
        const fn = compose(
            []
        );
        fn()
    }).throw(TypeError);

    expect(() => {
        const fn = compose(
            Function,
            () => null
        );
        fn();
    }).not.throw();
});

it('should returns null at default', () => {
    const fn = compose();
    assert.typeOf(fn(), 'null');
});

it('is run all functions', () => {
    let index = 0;
    function a() {
        index++;
    }
    function b() {
        index++;
        index++;
    }
    const fn = compose(
        a,
        b
    );
    fn()
    assert.equal(index, 3);
});

it('should return last value', () => {
    const plusOne = (v) => v + 1;
    const multiplyBy10 = (v) => v * 10;
    const fn = compose(
        plusOne,
        multiplyBy10
    );
    assert.equal(fn(2), 30);
});
