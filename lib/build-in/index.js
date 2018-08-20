let requireIndex = require('requireindex');
let { mergeRuleOfIgnore, mergeRuleOfLimit } = require('../utils/merge-rule');
let rulesOfIgnore = requireIndex(`${__dirname}/ignore`);
let rulesOfLimit = requireIndex(`${__dirname}/limit`);

const rulesOfIgn = mergeRuleOfIgnore(rulesOfIgnore) || [];
const rulesOflmt = mergeRuleOfLimit(rulesOfLimit) || [];

const rulesBuildIn = [].concat(rulesOfIgn, rulesOflmt);

module.exports = rulesBuildIn;