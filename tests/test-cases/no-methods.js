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
        {name: "method0", ignore: ["caller0"], errMsg},
        {name: "method1", ignore: ["caller1"], errMsg},
        {name: "entries", limit: ["Object"], errMsg},
        {name: "method2", ignore: ["caller2"], errMsg},
    ]
}];

//
module.exports = {
    valid: [
        {code: "caller0.method0(); caller1.method1(); caller2.method2()", options},
        {code: "caller0.method0(); caller1.method1(); caller2.method2()", options, errors},
        "str.charAt(0);",
        "str.slice(8, -1);",
        "arr.indexOf(x);",
        "includes(x);",
        "func(x);"
    ],
    invalid: [
        {code: "diyObj.method0(a);", options, errors},
        {code: "diyObj.method1(a);", options, errors},
        {code: "diyObj.method2(a);", options, errors}
    ]
};