const middlewareConfig = require('./middleware');
const logConfig = require('./log');
const bodyConfig = require('./body');
const compressConfig = require('./compress');
const routesConfig = require('./routes');
const fileUploadConfig = require('./upload');
const portConfig = require('./port');
const corsConfig = require('./cors');

const configs = {
    middleware: middlewareConfig,
    log: logConfig,
    body: bodyConfig,
    compress: compressConfig,
    routes: routesConfig,
    upload: fileUploadConfig,
    port: portConfig,
    cors: corsConfig
}

module.exports = { ...configs }