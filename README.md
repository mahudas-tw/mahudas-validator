# @mahudas/validator


## Dependencies
+ mahudas^0.0.9
+ fastest-validator^1.16.0


### As a plugin
如同一般的plugin，透過npm安裝之後，在Application的plugin.env.js裡設定啟用。

```console
npm i @mahudas/validator -s
```
```js
// config/plugin.deafult.js
module.exports = {
    validator: {
        enable: true,
        package: '@mahudas/validator',
    },
}
```

## 設定
```js
// config/config.default.js
module.exports = {
    validator: {
        haltOnFirstError: true,
        useNewCustomCheckerFunction: true,
    },
}
```
| 參數                          | 說明                                                                                         |
|-----------------------------|--------------------------------------------------------------------------------------------|
| haltOnFirstError            | 是否遇到錯誤就停止                                                                                  |
| useNewCustomCheckerFunction | 參考原生[用法](https://github.com/icebob/fastest-validator#custom-validation-for-built-in-rules) |

## Example
```js
// controller.js
const {ctx, app} = this;
const schema = {
    name: { type: "string", min: 6 , messages: {string: "'{field}'格式錯誤，請提供字串格式", stringMin: "'{field}'欄位，不得小於6個字"}},
    password: { type: "string", min: 6 , messages: {string: "'{field}'格式錯誤，請提供字串格式", stringMin: "'{field}'欄位，不得小於6個字"}},
}
const body = {name: 'forbar', password: "123456"};

// 在 ctx 有簡化用法，可以直接這樣使用
// 在 app 裡的 validator，會回傳原生的 fastest-validator Class
// check = check2 的用法
const check = ctx.validator(body, schema);
const check2 = app.validator.validate(body, schema);

// check3(body) === check
const check3 = ctx.validator.compile(schema);
```
其他用法可以參考 https://github.com/icebob/fastest-validator
