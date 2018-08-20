/**
 * @fileoverview Disallow using the some special methods in configuration
 * @author froguard
 */
//------------------------------------------------------------------------------
// Test Cases
//------------------------------------------------------------------------------

// eslint.RuleTester is string-compare ,which via error.message, so you must keep same value between errors and errMsg
const errMsg = 'Without runtime, (Array|String).includes is not supported in ios8-';
const errors = [{ message: errMsg}];
const options = [{ignore: ['_', 'lodash', 'underscore', 'diyObj'], errMsg}];
//
module.exports = {
    valid: [
        {
            code: "_.includes(arr, a) && lodash.includes([1, 2, 3], 2) && underscore.includes('str1', 's') && diyObj.includes(b)",
            options,
        },
        "str.charAt(0);",
        "str.slice(8, -1);",
        "arr.indexOf(x);",
        "includes(x);",
        "func(x);"
    ],
    invalid: [
        {code: "arr.includes(a);", options, errors},
        {code: "arr.includes(a, 4);", options, errors},
        {code: "[1, 2, 3, 4].includes(1);", options, errors},
        {code: "[1, 2, 3, 4].includes(2, 1);", options, errors},
        {code: "str.includes(s);", options, errors},
        {code: "str.includes(s, 3);", options, errors},
        {code: "'helloworld'.includes('hello');", options, errors},
        {code: "'helloworld'.includes('hello', 1);", options, errors},
        {code: "this.includes('hello');", options, errors},
        {code: "wf.includes('hello');", options, errors}
    ]
};