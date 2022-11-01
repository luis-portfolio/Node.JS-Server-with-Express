const bodyParser = require('body-parser')

module.exports = function (app, config) {
    // json all responses
    app.use(bodyParser.json(config.body.json))
    app.use(bodyParser.urlencoded(config.body.urlEncoded))
    return app
}