# build-in rules


Some default build-in rules in this plugin.

### Config in ```.eslintrc.js```

```json
{
  "rules": {
    "no-methods/no-includes": [
      "error",  
      {
        "ignore":  ["_", "lodash"], 
        "errMsg":  "Array|String.includes() is not supported in this project!"
      }
    ]
}
```

### List of build-in rules

rule | limit | ignore | errMsg
--- | --- | --- | ---
no-contains | / | _, underscore | contains isn't supported in this project, except literals: _, underscore.
no-includes | / | _, lodash | includes isn't supported in this project, except literals: _, lodash.
no-from | Array | / | Array.from() isn't supported in this project.
no-isArray | Array | / | Array.isArray() isn't supported in this project.
no-of | Array | / | Array.of() isn't supported in this project.
no-UTC | Date | / | Date.UTC() isn't supported in this project.
no-now | Date | / | Date.now() isn't supported in this project.
no-parse | Date, JSON | / | Date.parse(), JSON.parse() isn't supported in this project.
no-getCanonicalLocales | Intl | / | Intl.getCanonicalLocales() isn't supported in this project.
no-stringify | JSON | / | JSON.stringify() isn't supported in this project.
no-abs | Math | / | Math.abs() isn't supported in this project.
no-acos | Math | / | Math.acos() isn't supported in this project.
no-acosh | Math | / | Math.acosh() isn't supported in this project.
no-asin | Math | / | Math.asin() isn't supported in this project.
no-asinh | Math | / | Math.asinh() isn't supported in this project.
no-atan | Math | / | Math.atan() isn't supported in this project.
no-atan2 | Math | / | Math.atan2() isn't supported in this project.
no-atanh | Math | / | Math.atanh() isn't supported in this project.
no-cbrt | Math | / | Math.cbrt() isn't supported in this project.
no-ceil | Math | / | Math.ceil() isn't supported in this project.
no-clz32 | Math | / | Math.clz32() isn't supported in this project.
no-cos | Math | / | Math.cos() isn't supported in this project.
no-cosh | Math | / | Math.cosh() isn't supported in this project.
no-exp | Math | / | Math.exp() isn't supported in this project.
no-expm1 | Math | / | Math.expm1() isn't supported in this project.
no-floor | Math | / | Math.floor() isn't supported in this project.
no-fround | Math | / | Math.fround() isn't supported in this project.
no-hypot | Math | / | Math.hypot() isn't supported in this project.
no-imul | Math | / | Math.imul() isn't supported in this project.
no-log | Math | / | Math.log() isn't supported in this project.
no-log10 | Math | / | Math.log10() isn't supported in this project.
no-log1p | Math | / | Math.log1p() isn't supported in this project.
no-log2 | Math | / | Math.log2() isn't supported in this project.
no-max | Math | / | Math.max() isn't supported in this project.
no-min | Math | / | Math.min() isn't supported in this project.
no-pow | Math | / | Math.pow() isn't supported in this project.
no-random | Math | / | Math.random() isn't supported in this project.
no-round | Math | / | Math.round() isn't supported in this project.
no-sign | Math | / | Math.sign() isn't supported in this project.
no-sin | Math | / | Math.sin() isn't supported in this project.
no-sinh | Math | / | Math.sinh() isn't supported in this project.
no-sqrt | Math | / | Math.sqrt() isn't supported in this project.
no-tan | Math | / | Math.tan() isn't supported in this project.
no-tanh | Math | / | Math.tanh() isn't supported in this project.
no-trunc | Math | / | Math.trunc() isn't supported in this project.
no-isFinite | Number | / | Number.isFinite() isn't supported in this project.
no-isInteger | Number | / | Number.isInteger() isn't supported in this project.
no-isNaN | Number | / | Number.isNaN() isn't supported in this project.
no-isSafeInteger | Number | / | Number.isSafeInteger() isn't supported in this project.
no-toInteger | Number | / | Number.toInteger() isn't supported in this project.
no-assign | Object | / | Object.assign() isn't supported in this project.
no-create | Object | / | Object.create() isn't supported in this project.
no-defineProperties | Object | / | Object.defineProperties() isn't supported in this project.
no-defineProperty | Object, Reflect | / | Object.defineProperty(), Reflect.defineProperty() isn't supported in this project.
no-entries | Object | / | Object.entries() isn't supported in this project.
no-freeze | Object | / | Object.freeze() isn't supported in this project.
no-getNotifier | Object | / | Object.getNotifier() isn't supported in this project.
no-getOwnPropertyDescriptor | Object, Reflect | / | Object.getOwnPropertyDescriptor(), Reflect.getOwnPropertyDescriptor() isn't supported in this project.
no-getOwnPropertyDescriptors | Object | / | Object.getOwnPropertyDescriptors() isn't supported in this project.
no-getOwnPropertyNames | Object | / | Object.getOwnPropertyNames() isn't supported in this project.
no-getOwnPropertySymbols | Object | / | Object.getOwnPropertySymbols() isn't supported in this project.
no-getPrototypeOf | Object, Reflect | / | Object.getPrototypeOf(), Reflect.getPrototypeOf() isn't supported in this project.
no-is | Object | / | Object.is() isn't supported in this project.
no-isExtensible | Object, Reflect | / | Object.isExtensible(), Reflect.isExtensible() isn't supported in this project.
no-isFrozen | Object | / | Object.isFrozen() isn't supported in this project.
no-isSealed | Object | / | Object.isSealed() isn't supported in this project.
no-keys | Object | / | Object.keys() isn't supported in this project.
no-observe | Object | / | Object.observe() isn't supported in this project.
no-preventExtensions | Object, Reflect | / | Object.preventExtensions(), Reflect.preventExtensions() isn't supported in this project.
no-seal | Object | / | Object.seal() isn't supported in this project.
no-setPrototypeOf | Object, Reflect | / | Object.setPrototypeOf(), Reflect.setPrototypeOf() isn't supported in this project.
no-unobserve | Object | / | Object.unobserve() isn't supported in this project.
no-values | Object | / | Object.values() isn't supported in this project.
no-all | Promise | / | Promise.all() isn't supported in this project.
no-race | Promise | / | Promise.race() isn't supported in this project.
no-reject | Promise | / | Promise.reject() isn't supported in this project.
no-resolve | Promise | / | Promise.resolve() isn't supported in this project.
no-apply | Reflect | / | Reflect.apply() isn't supported in this project.
no-construct | Reflect | / | Reflect.construct() isn't supported in this project.
no-deleteProperty | Reflect | / | Reflect.deleteProperty() isn't supported in this project.
no-enumerate | Reflect | / | Reflect.enumerate() isn't supported in this project.
no-get | Reflect | / | Reflect.get() isn't supported in this project.
no-has | Reflect | / | Reflect.has() isn't supported in this project.
no-ownKeys | Reflect | / | Reflect.ownKeys() isn't supported in this project.
no-set | Reflect | / | Reflect.set() isn't supported in this project.
no-fromCharCode | String | / | String.fromCharCode() isn't supported in this project.
no-fromCodePoint | String | / | String.fromCodePoint() isn't supported in this project.
no-raw | String | / | String.raw() isn't supported in this project.
no-for | Symbol | / | Symbol.for() isn't supported in this project.
no-keyFor | Symbol | / | Symbol.keyFor() isn't supported in this project.

### A special build-in rules


You can use special rule ```no-methods``` to DIY your configuration.

```json
{
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
}
```
