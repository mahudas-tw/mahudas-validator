const validate = require('fastest-validator');
const extend = require('extend2');

module.exports = app => {
    const defaultConfig = {
        haltOnFirstError: true,
        useNewCustomCheckerFunction: true,
    };
    const config = extend(true, defaultConfig, app.config.validator);

    return new validate(config);
}
