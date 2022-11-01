const { existsSync } = require("fs")
const { join } = require("path")
const Register = function (app, config) {
    Object.keys(config).forEach(filename => {
        const fn = join(__dirname, `./${filename.charAt(0).toUpperCase() + filename.slice(1)}`)
        if (existsSync(`${fn}.js`)) {
            require(fn)(app, config)
        }
    })
    return app
};

module.exports = Register;
