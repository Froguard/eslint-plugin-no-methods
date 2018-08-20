let json2md = require('json2md');
let fs = require('fs');
let path = require('path');
let rulesBuildIn = require('../lib/build-in/index');

let codeConfigEg = {
    language: 'json',
    content: `{
  "rules": {
    "no-methods/no-includes": [
      "error",  
      {
        "ignore":  ["_", "lodash"], 
        "errMsg":  "Array|String.includes() is not supported in this project!"
      }
    ]
}`.split('\n')
};

let table = {
    headers: ['rule', 'limit', 'ignore', 'errMsg'],
    rows: []
};

table.rows = rulesBuildIn.map((r) => {
    let { name, configDef } = r || {};
    let { limit, ignore, errMsg } = configDef || {};
    let rule = `no-${name.trim()}`;
    limit = Array.isArray(limit) ? limit.join(', ') : '/';
    ignore = Array.isArray(ignore) ? ignore.join(', ') : '/';
    return {rule, limit, ignore, errMsg};
});

let codeSpConfigEg = {
    language: 'json',
    content:`{
  "no-methods/no-methods": [
    "error",
    {
      "methods": [
        {"name": "method0", "ignore": ["ignoreCallerName"], "errMsg": "method0 is not supported!"},
        {"name": "method1", "ignore": ["ignoreCallerName"], "errMsg": "method1 is not supported!"},
        {"name": "method2", "limit": ["myObj"], "errMsg": "'myObj.method2' is not supported!"}
      ]
    }
  ]
}`.split('\n')
};

let contentArr = [
    {h1: 'build-in rules'},
    {p: 'Some default build-in rules in this plugin.'},
    {h3: 'Config in ```.eslintrc.js```'},
    {code: codeConfigEg},
    {h3: 'List of build-in rules'},
    {table},
    {h3: 'A special build-in rules'},
    {p: 'You can use special rule ```no-methods``` to DIY your configuration.'},
    {code: codeSpConfigEg}
];
let mdContent = json2md(contentArr);

function writeFile(src, content = '', option = {}) {
    let { encode = 'utf-8', flag, mode } = option || {};
    return new Promise((resolve, reject) => {
        if (!src) {
            reject(new Error('需要写入的src为空'));
        }
        fs.writeFile(path.join(__dirname, src), content, {encode, flag, mode}, (err) => {
            if (err) {
                reject(err);
            }
            resolve({success: true})
        });
    });
}

async function genDocFile(src, content) {
    // try {
    await writeFile(src, content);
    // } catch(e) {}
    console.log(`[√] 生成'${src}'文件成功！`);
}

genDocFile('./build-in.md', mdContent);