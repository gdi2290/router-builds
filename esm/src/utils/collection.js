"use strict";
function shallowEqual(a, b) {
    const k1 = Object.keys(a);
    const k2 = Object.keys(b);
    if (k1.length != k2.length) {
        return false;
    }
    let key;
    for (let i = 0; i < k1.length; i++) {
        key = k1[i];
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
exports.shallowEqual = shallowEqual;
function flatten(a) {
    const target = [];
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a[i].length; ++j) {
            target.push(a[i][j]);
        }
    }
    return target;
}
exports.flatten = flatten;
function first(a) {
    return a.length > 0 ? a[0] : null;
}
exports.first = first;
function last(a) {
    return a.length > 0 ? a[a.length - 1] : null;
}
exports.last = last;
function and(bools) {
    return bools.reduce((a, b) => a && b, true);
}
exports.and = and;
function merge(m1, m2) {
    var m = {};
    for (var attr in m1) {
        if (m1.hasOwnProperty(attr)) {
            m[attr] = m1[attr];
        }
    }
    for (var attr in m2) {
        if (m2.hasOwnProperty(attr)) {
            m[attr] = m2[attr];
        }
    }
    return m;
}
exports.merge = merge;
function forEach(map, callback) {
    for (var prop in map) {
        if (map.hasOwnProperty(prop)) {
            callback(map[prop], prop);
        }
    }
}
exports.forEach = forEach;
//# sourceMappingURL=collection.js.map