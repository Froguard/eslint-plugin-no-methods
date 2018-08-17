/**
 * uniqueify
 * @param {array} arr
 * @param {function} getSeed
 * @param {function} deal
 * @return {array}
 */
module.exports = function uniqueify(arr = [], getSeed, deal) {
    let tmp = [];
    let getSeedFn = typeof getSeed === 'function' ? getSeed : a => a;
    return arr.filter((a) => {
        let seed = getSeedFn(a);
        return !tmp.includes(seed) && tmp.push(seed) && (deal(a) || 1);
    });
};