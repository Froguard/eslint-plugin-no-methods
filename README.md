# eslint-plugin-no-methods

Disallow using the method methods

[![version](https://img.shields.io/npm/v/eslint-plugin-no-methods.svg "version")](https://www.npmjs.com/package/eslint-plugin-no-methods)&nbsp;
[![Build Status](https://img.shields.io/travis/Froguard/eslint-plugin-no-methods.svg)](https://travis-ci.org/Froguard/eslint-plugin-no-methods)&nbsp;
[![GitHub issues](https://img.shields.io/github/issues/Froguard/eslint-plugin-no-methods.svg)](https://github.com/Froguard/eslint-plugin-no-methods/issues?q=is%3Aopen+is%3Aissue)&nbsp;
[![license](https://img.shields.io/github/license/froguard/eslint-plugin-no-methods.svg)](https://github.com/froguard/eslint-plugin-no-methods/blob/master/LICENSE)


## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-methods`:

```
$ npm install eslint-plugin-no-methods --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-methods` globally.

## Usage

Add `no-methods` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-methods"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no-methods/no-includes": [
      "error", 
      {
        "ignore": ["_", "lodash", "underscore"], 
        "errMsg": "Except for _.includes, Array|String.includes is not supported!"
      }
    ],
    "no-methods/no-entries": [
      "error", 
      {"limit": ["Object"], "errMsg": "Object.entries is not supported!"}
    ],
    "no-methods/no-assign": [
      "error", 
      {"limit": ["Object"], "errMsg": "Object.assign is not supported!"}
    ],
    "no-methods/no-methods": [
      "error", 
      {
        "methods": [
          {
            "name": "method0", 
            "ignore": ["ignoreCallerName"], 
            "errMsg": "Except for ignoreCallerName.method0, method0 is not supported!"
          },
          {
            "name": "method1", 
            "ignore": ["ignoreCallerName"], 
            "errMsg": "Except for ignoreCallerName.method1, method1 is not supported!"
          },
          {
            "name": "method2", 
            "limit": ["myObj"], 
            "errMsg": "Only myObj.method2 is not supported!"
          }
        ]
      }
    ]
  }
}
```

> `ignore`: none was allowed but some in ignores   

> `limit`: only some `limits` were disallowed, and others were allowed

> You can use **only one** of `ignore` and `limit` in configuration.

## Attention

The function call expression like `methodName.call(ctx, args)`, wasnot resolved in eslint-plugin-no-method.

The reason why plugin doesnt provide support (resolve this invoke way) is that you can always find a way to avoid this limitation。 such as

```js
let a = {
    doSth(...args){
        console.log(args);
        //...
    }
};

let diyInvoke = (obj, methodName, ctx, ...args) => obj[methodName].apply(ctx, args);

diyInvoke(a, 'doSth', this, 1, 2, 3); 
// Correct! Even if u`ve configured 'forbidden a.doSth()' in eslint-plugin-no-methods  
```   

## Build-in rules

See build-in rules in [doc/build-in.md](https://github.com/Froguard/eslint-plugin-no-methods/blob/master/doc/build-in.md)

> Created by yeoman tool.
