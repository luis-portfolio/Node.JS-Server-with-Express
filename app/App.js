const express = require('express')
const app = express()
const Register = require("../modules/Register")

class App {
    constructor(port) {
        this.config = (options) => {
            this.port = options.port || 8080
            Register(app, options)
            return this
        }
        this.start = (callback) => {
            return app.listen(this.port, callback(this.port))
        }
        return this
    }
}

module.exports = new App()