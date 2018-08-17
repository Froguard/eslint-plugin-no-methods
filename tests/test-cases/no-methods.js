/**
 * @fileoverview Disallow using the some special methods in configuration
 * @author froguard
 */
//------------------------------------------------------------------------------
// Test Cases
//------------------------------------------------------------------------------

// eslint.RuleTester is string-compare ,which via error.message, so you must keep same value between errors and errMsg
const errMsg = 'Some methods is not supported here';
const errors = [{ message: errMsg}];
const options = [{
    methods: [
        {name: "entries", limit: ["Object"], errMsg},
        {name: "isInteger", limit: ["Number"], errMsg},
        {name: "includes", ignore: ["_", "lodash", "underscore"], errMsg},
        {name: "method0", ignore: ["caller0"], errMsg},
        {name: "method1", ignore: ["caller1"], errMsg},
        {name: "method2", ignore: ["caller2"], errMsg}
    ]
}];

//
module.exports = {
    valid: [
        {code: "caller0.method0(); caller1.method1(); caller2.method2()", options},
        {code: "caller0.method0(); caller1.method1(); caller2.method2()", options, errors},
        "includes(x);",
        "entries(x);",
        "isInteger(x);",
        "_.includes(x);",
        "lodash.includes(x);",
        "underscore.includes(x);",
        "_.entries(x);",
        "_.isInteger(x);",
        "str.charAt(0);",
        "str.slice(8, -1);",
        "arr.indexOf(x);",
        "Object.assign({},{a:1})",
        "func(x);"
    ],
    invalid: [
        {code: "'asdad'.includes(a);", options, errors},
        {code: "'asdad'.includes('a', 0);", options, errors},
        {code: "arr.includes(2);", options, errors},
        {code: "[1,2,3,4].includes(3);", options, errors},
        {code: "Object.entries(a);", options, errors},
        {code: "Number.isInteger(a);", options, errors},
        {code: "diyObj.method0(a);", options, errors},
        {code: "diyObj.method1(a);", options, errors},
        {code: "diyObj.method2(a);", options, errors}
    ]
};