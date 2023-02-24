const validate = require('../../lib/validate');

const _validate = validate(app);
module.exports.validator = (obj, schema) => {
    return _validate.validate(obj, schema);
}

module.exports.validator.compile = (schema) => {
    return _validate.compile(schema);
}

module.exports.validator.alias = (aliasName, obj) => {
    return _validate.alias(aliasName, obj);
}

module.exports.validator.plugin = (pluginFunction) => {
    return _validate.plugin(pluginFunction);
}
