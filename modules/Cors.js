const cors = require('cors')

module.exports = function (app, config) {
    // Enable cors all requests
    app.use(cors(config.cors))
    return app
}