let uniqueify = require('../utils/uniqueify');
let requireIndex = require('requireindex');
let { mergeRuleOfIgnore, mergeRuleOfLimit } = require('../utils/merge-rule');
let rulesOfIgnore = requireIndex(`${__dirname}/ignore`);
let rulesOfLimit = requireIndex(`${__dirname}/limit`);

const rulesOfIgn = mergeRuleOfIgnore(rulesOfIgnore) || [];
const rulesOflmt = mergeRuleOfLimit(rulesOfLimit) || [];

const rulesBuildIn = uniqueify([].concat(rulesOfIgn, rulesOflmt), r => r.name);

/*
 *
 *
 * [
 *   {
 *     "name": "contains",
 *     "configDef": {
 *       "ignore": ["_", "underscore"],
 *       "errMsg": "contains isn't supported in this project, except on : _, underscore."
 *     }
 *   },
 *   {
 *     "name": "includes",
 *     "configDef": {
 *       "ignore": ["_", "lodash"],
 *       "errMsg": "includes isn't supported in this project, except on : _, lodash."
 *     }
 *   },
 *   {
 *      "name": "now",
 *      "configDef": {
 *        "limit": ["Date"],
 *        "errMsg": "Date.now() isn't supported in this project."
 *      }
 *    },
 *    {
 *      "name": "parse",
 *      "configDef": {
 *        "limit": ["Date", "JSON"],
 *        "errMsg": "Date.parse(), JSON.parse() isn't supported in this project."
 *      }
 *    },
 *    //...
 * ]
 */
module.exports = rulesBuildIn;