let util = require('util');
let judge = require('./judge');

module.exports = function createRule(method = {}) {
    let { name, configDef } = method || {};
    let funcName = name || '';
    let errMsgDef = configDef.errMsg || `The method '${funcName}' is not supported.`;
    let limitDef = util.isArray(configDef.limit) ? configDef.limit : [];
    let ignoreDef = util.isArray(configDef.ignore) ? configDef.ignore : [];
    let methodNames = [funcName];

    return {
        meta: {
            schema: [
                {
                    type: "object",
                    properties: {
                        ignore: {
                            type: "array",
                            items: {
                                type: "string"
                            }
                        },
                        errMsg: {
                            type: "string"
                        }
                    }
                }
            ]
        },
        create(context) {
            let config = context.options[0] || {};
            let { ignore, errMsg, limit } = config || {};

            ignore = util.isArray(ignore) ? ignore : ignoreDef;
            limit = util.isArray(limit) ? limit : limitDef;
            errMsg = errMsg || errMsgDef;

            return {
                CallExpression: function (node) {
                    let { callee } = node || {};
                    if (callee) {
                        let { property, object} = callee;
                        let methodName = property && property.name || '';
                        let callerName = object && object.name || '';

                        judge({
                            context,
                            node,
                            methodNames,
                            methodName,
                            callerName,
                            limit,
                            ignore,
                            errMsg
                        });
                    }
                }
            };
        }
    };
};