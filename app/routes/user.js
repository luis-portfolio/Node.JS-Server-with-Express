'use strict'
const router = require('express').Router()
const controller = require("../controllers/User")
const { index, store, update, destroy } = controller

router.get('/:id?', index);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router