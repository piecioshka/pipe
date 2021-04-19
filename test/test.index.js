'use strict';

const pipe = require('../src');
const { assert, expect } = require('chai');

it('is a function', () => {
    assert.typeOf(pipe, 'function');
});

it('is expected only function', () => {
    expect(() => {
        const fn = pipe(
            []
        );
        fn()
    }).throw(TypeError);

    expect(() => {
        const fn = pipe(
            Function,
            () => null
        );
        fn();
    }).not.throw();
});

it('should returns null at default', () => {
    const fn = pipe();
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
    const fn = pipe(
        a,
        b
    );
    fn()
    assert.equal(index, 3);
});

it('should return last value', () => {
    const plusOne = (v) => v + 1;
    const multiplyBy10 = (v) => v * 10;
    const fn = pipe(
        plusOne,
        multiplyBy10
    );
    assert.equal(fn(2), 30);
});
