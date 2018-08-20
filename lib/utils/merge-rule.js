
const msg = 'isn\'t supported in this project';
function getRuleByName(name, rulesArr){
    return rulesArr.filter(r => (r && r.name === name))[0];
}
/*
 * merge rules
 * @param {object} rulesObj
 * @return {array<object>}
 * @example
 * let rulesObj = {
 *    date: {name: 'Date', type: 'limit', methods: ['parse']},
 *    json: {name: 'Date', type: 'limit', methods: ['parse', 'stringify']}
 * };
 *
 * mergeRule(rulesObj);
 * [
 *
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
function mergeRuleOfLimit(rulesObj) {
    let rulesArr = [];
    let uniqueKeys = [];

    Object.entries(rulesObj).forEach(obj => {
        let [ fileName, config ] = obj || [];
        let { type, limit, methods } = config || {};

        if (type === 'limit' && limit && methods && methods.length) {
            methods.forEach((method) => {
                let name = method.trim();
                if (!name) {return ;}
                let callExpr = `.${name}()`;
                if (uniqueKeys.includes(method)) {
                    let existRule = getRuleByName(name, rulesArr) || {};
                    let existLimit = existRule.configDef.limit;
                    !existLimit.includes(limit) && existRule.configDef.limit.push(limit);
                    let tip = existLimit.length > 1 ? `${existLimit.join(`${callExpr}, `)}${callExpr}` : `${existLimit[0]}${callExpr}`;
                    existRule.configDef.errMsg = `${tip} ${msg}.`;
                } else {
                    uniqueKeys.push(name);
                    rulesArr.push({
                        name,
                        // _type: type,
                        configDef: {
                            limit: [limit],
                            errMsg: `${limit}${callExpr} ${msg}.`
                        }
                    });
                }
            });
        } else {
            throw new Error(`It occurs error in build-in rule file (./build-in/limit/${fileName}.js)`);
        }
    });

    return rulesArr;
}

/*
 * merge rules
 * @param rulesObj
 * @return {array<object>}
 * @example
 * let rulesObj = {
 *    includes: {name: 'includes', type: 'ignore', ignore: ['_', 'lodash]},
 *    contain: {name: 'contain', type: 'ignore', ignore: ['_', 'underscore']}
 * };
 *
 * mergeRule(rulesObj);
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
 *   }
 * ]
 *
 */
function mergeRuleOfIgnore(rulesObj) {
    let rulesArr = [];
    let uniqueKeys = [];

    Object.entries(rulesObj).forEach(obj => {
        let [ fileName, config ] = obj || [];
        let { type, method, ignore } = config || {};

        if (type === 'ignore' && method) {
            let name = method.trim();
            if (!name) {return ;}

            if (uniqueKeys.includes(name)) {
                throw new Error(`Duplicate name via build-in/ignore/${fileName}.js, the name '${name}' has existed in other file!`);
            } else {
                uniqueKeys.push(name);
                ignore = Array.isArray(ignore) ? ignore : [];
                let excepts = ignore.length ? `, except literals: ${ignore.join(', ')}.` : '.';
                rulesArr.push({
                    name,
                    // _type: type,
                    configDef: {
                        ignore,
                        errMsg: `${name} ${msg}${excepts}`
                    }
                });
            }
        } else {
            throw new Error(`It occurs error in build-in rule file (./build-in/ignore/${fileName}.js)`);
        }
    });

    return rulesArr;
}

module.exports = {
    mergeRuleOfLimit,
    mergeRuleOfIgnore
};