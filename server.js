const App = require('./app/App')
const { middleware, log, body, compress, port, routes, upload, cors } = require('./config')

const callback = (port) => console.log(`Server it's listening on port ${port}.`)

App
.config({ middleware, log, body, compress, port, routes, upload, cors })
.start(callback)