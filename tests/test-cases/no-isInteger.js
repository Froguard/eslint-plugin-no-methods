/**
 * @fileoverview Disallow using the some special methods in configuration
 * @author froguard
 */
//------------------------------------------------------------------------------
// Test Cases
//------------------------------------------------------------------------------

// eslint.RuleTester is string-compare ,which via error.message, so you must keep same value between errors and errMsg
const errMsg = 'Without runtime, Number.isInteger is not supported in ios9-';
const errors = [{ message: errMsg}];
const options = [{limit: ['Number'], errMsg}];
//
module.exports = {
    valid: [
        "Number.isFinite(n);",
        "Number.parseInt('123px')",
        "isInteger"
    ],
    invalid: [
        {code: "Number.isInteger(12.34);", options, errors}
    ]
};