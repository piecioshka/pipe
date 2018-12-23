module.exports = function compose(...fnList) {
    const iterator = fnList[Symbol.iterator]();
    let result = null;

    function handle(...args) {
        const fn = iterator.next().value;
        if (typeof fn === 'undefined') return result;
        if (typeof fn !== 'function') throw new TypeError();

        result = fn(...args);

        return handle(result);
    }

    return handle();
};
