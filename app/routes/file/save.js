'use strict'
const router = require('express').Router()
const controller = require("../../controllers/File")
const { store } = controller

router.post('/', store)

module.exports = router