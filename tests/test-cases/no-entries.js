/**
 * @fileoverview Disallow using the some special methods in configuration
 * @author froguard
 */
//------------------------------------------------------------------------------
// Test Cases
//------------------------------------------------------------------------------

// eslint.RuleTester is string-compare ,which via error.message, so you must keep same value between errors and errMsg
const errMsg = 'Without runtime, Object.entries is not supported in ios9-';
const errors = [{ message: errMsg}];
const options = [{limit: ['Object'], errMsg}];
//
module.exports = {
    valid: [
        "Object.keys(obj);",
        "Object.assign({}, a, b)",
        "entries(x);"
    ],
    invalid: [
        {code: "Object.entries(a);", options, errors}
    ]
};