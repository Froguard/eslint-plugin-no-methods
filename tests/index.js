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
    tc && rule && ruleTester.run(k, rules[k], tc);
});

