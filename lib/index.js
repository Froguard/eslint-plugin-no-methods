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

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

let rules = {};
[
    {
        name: 'includes',
        configDef: {
            errMsg: 'Without runtime, (Array|String).includes is not supported in ios8-'
        }
    },
    {
        name: 'isInteger',
        configDef: {
            errMsg: 'Without runtime, Number.isInteger is not supported in ios8-'
        }
    },
    {
        name: 'entries', configDef: {
            errMsg: 'Without runtime, Object.entries is not supported in ios9-'
        }
    },

].forEach(mth => (mth.name && mth.name !== 'methods' && (rules[`no-${mth.name}`] = createRule(mth))));

module.exports.rules = Object.assign(rules, {
    "no-methods": noMethods
});



