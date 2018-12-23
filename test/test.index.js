'use strict';

const compose = require('../src');
const { assert, expect } = require('chai');

it('is a function', () => {
    assert.typeOf(compose, 'function');
});

it('is expected only function', () => {
    expect(() => {
        compose(
            []
        );
    }).throw(TypeError);

    expect(() => {
        compose(
            Function,
            () => null
        );
    }).not.throw();
});

it('should returns null at default', () => {
    assert.typeOf(compose(), 'null');
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
    compose(
        a,
        b
    );
    assert.equal(index, 3);
});

it('should return last value', () => {
    const plusOne = (v) => v + 1;
    const multiplyBy10 = (v) => v * 10;
    const what = compose(
        () => 2,
        plusOne,
        multiplyBy10
    );
    assert.equal(what, 30);
});
