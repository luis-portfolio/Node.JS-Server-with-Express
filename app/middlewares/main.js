const router = require('express').Router()

const log = async (values) => {
    const { method, originalUrl } = await values
    console.log((new Date()).toISOString()+":", method , originalUrl)
}

// middleware that is specific to this router
const mainMiddleware = async (req, res, next) => {
    log(req)
    next()
}

router.use(mainMiddleware)

module.exports = router