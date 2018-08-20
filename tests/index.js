/**
 * @fileoverview Disallow using the some special methods in configuration
 * @author froguard
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
let requireIndex = require('requireindex');
let rules = require('../lib/index').rules;
let RuleTester = require("eslint").RuleTester;

let ruleTester = new RuleTester();
let testCases = requireIndex(`${__dirname}/test-cases`);


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

Object.keys(testCases).forEach((k) => {
    let tc = testCases[k];
    let rule = rules[k];
    if (!rule) {
        let err = `The test-case '${k}.js' is not found the matched rule (rules['${k}'] is ${rule})`;
        console.warn(err);
        throw new Error(err);
    }
    tc && ruleTester.run(k, rules[k], tc);
});
