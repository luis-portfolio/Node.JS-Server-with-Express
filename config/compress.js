const compression = require("compression")

function shouldCompress(req, res) {
    // don't compress responses with this request header
    if (req.headers['x-no-compression'])
        return false

    // fallback to standard filter function
    return compression.filter(req, res)
}


const compressConfig = {
    filter: shouldCompress
}


module.exports = compressConfig