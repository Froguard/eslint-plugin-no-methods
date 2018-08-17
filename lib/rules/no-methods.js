/**
 * @fileoverview Disallow using the some special methods in configuration
 * @author froguard
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
let util = require('util');
let judge = require('../utils/judge');
let uniqueify = require('../utils/uniqueify');


//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        schema: [
            {
                type: "object",
                properties: {
                    methods: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string"
                                },
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
                    }
                }
            }
        ]
    },
    create(context) {
        let config = context.options[0] || {};
        let { methods } = config || {};

        let unqMethodsObj = {};
        uniqueify(methods, mth => mth.name, mth => (unqMethodsObj[mth.name] = mth));
        let unqNames = Object.keys(unqMethodsObj);

        return {
            CallExpression: function (node) {
                let { callee } = node || {};
                if (callee) {
                    let { property, object} = callee;
                    let methodName = property && property.name || ''; 
                    let callerName = object && object.name || '';

                    let { ignore, errMsg, limit } = unqMethodsObj[methodName] || {};
                    ignore = util.isArray(ignore) ? ignore : [];
                    limit = util.isArray(limit) ? limit : [];
                    errMsg = errMsg || `The method '${methodName}' is not support in this project`;

                    judge({
                        context,
                        node,
                        methodNames: unqNames,
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




