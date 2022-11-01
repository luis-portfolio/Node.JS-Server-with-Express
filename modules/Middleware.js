

module.exports = function (app, config) {
    // compress all responses
    (config.middleware).forEach(value => { 
        app.use(value) 
    })

    return app
}