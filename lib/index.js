/**
 * @fileoverview Disallow using the some special methods in configuration
 * @author froguard
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

let createRule = require('./utils/rules-creator');
let noMethods = require('./rules/no-methods');
const rulesBuildIn = require('./build-in/index');


//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

let rules = {};

let buildInRules = [
    // {
    //     name: 'includes',
    //     configDef: {
    //         ignore: ["_", "lodash"], // "underscore" (underscore.contains(o, e))
    //         errMsg: 'Without runtime, (Array|String).includes is not supported in ios8-'
    //     }
    // },
    // {
    //     name: 'assign',
    //     configDef: {
    //         limit: ["Object"],
    //         errMsg: 'Without runtime, Object.entries is not supported in ios9-'
    //     }
    // }
];

buildInRules = buildInRules.concat(rulesBuildIn);

// console.log(JSON.stringify(buildInRules, null, 2));

buildInRules.forEach(
    mth => (mth.name && mth.name !== 'methods' && (rules[`no-${mth.name}`] = createRule(mth)))
);

module.exports.rules = Object.assign(rules, {
    "no-methods": noMethods
});



