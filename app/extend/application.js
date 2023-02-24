const validate = require('../../lib/validate');
module.exports = (app) => {
    return {
        validator: validate(app)
    }
}
