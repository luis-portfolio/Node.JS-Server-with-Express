const morgan = require('morgan')

module.exports = function (app, config) {
    // setup the logger
    // console.log(config.log);
    app.use(morgan('combined', config.log))
    return app
}