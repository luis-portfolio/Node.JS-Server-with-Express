const magic = require('express-routemagic')
const Upload = require('./Upload')

module.exports = function (app, config) {
    // gererate all routers on folder ./routes
    Upload(app, config.upload)
    // Download(app, config.download)
    magic.use(app, { ...config.routes })
    return app
}