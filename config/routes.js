const debug = require('debug')('api:test:routes')
const { join } = require("path")
const { mkdirSync } = require("fs");

const basePath = (refPath) => {
    const store = join(__dirname, refPath)
    // console.log("routesConfig", { store });
    mkdirSync(store, { recursive: true });
    return store
}
// const debug = require('debug')('routes-debug')

const routesConfig = {
    // Optional. If `invokerPath` is not defined, this is relative to your nodejs ROOT.
    routesFolder: './',
    // Optional. If this is defined, `routesFolder` will be relative to this path instead of your nodejs ROOT.
    invokerPath: basePath('../app/routes'), 
    // Optional
    debug: debug,
    // Optional. This prints out all your routes. If no debug module is passed, it uses console.log by default
    logMapping: true,
    // Optional. `false` by default, i.e. you should not have a `foo.js` and a folder named `foo` sitting at the same level. That's poor organisation.
    allowSameName: false,
    // Optional. Allows you to skip folders or files with a suffix.
    ignoreSuffix: '_bak'
}

module.exports = routesConfig