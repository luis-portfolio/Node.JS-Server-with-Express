const { join } = require("path")
const { mkdirSync } = require("fs");
var rfs = require('rotating-file-stream')

const basePath = (refPath) => {
    const store = join(__dirname, refPath)
    // console.log("logConfig", { store })
    mkdirSync(store, { recursive: true })
    return store
}


const filename = "access.log"
const options = { interval: '1d', path: basePath('../store/logs') }


// create a rotating write stream
const accessLogStream = () => rfs.createStream(filename, options)

const logConfig = { stream: accessLogStream() }

module.exports = logConfig