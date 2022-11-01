const fileUpload = require('express-fileupload')

module.exports = function (app, config) {
    // save all uploaded files
    app.use(fileUpload(config.upload))
    return app
}