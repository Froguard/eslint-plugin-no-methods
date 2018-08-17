
module.exports = function judge(option = {}){
    let {
        context,
        node,
        methodNames,
        methodName,
        callerName,
        limit,
        ignore,
        errMsg
    } = option || {};

    // methodNames = methodNames.filter(n => !spMethods.includes(n));

    if (methodNames.includes(methodName)) {
        // exclusive condition: only one of 'limit' and 'ignore' is effective
        if (limit && limit.length) {
            if (limit.includes(callerName)) {
                context.report(node, errMsg);
            }
        } else if (ignore && ignore.length) {
            if (!ignore.includes(callerName)) {
                context.report(node, errMsg);
            }
        } else {
            context.report(node, errMsg);
        }
    }
};