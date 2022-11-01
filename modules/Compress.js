const compression = require('compression')

module.exports = function (app, config) {
    // compress all responses
    app.use(compression(config.compress))
    return app
}