const express = require('express')
const router = express.Router()
const validate = require('express-jsonschema').validate

const validationSchema = require('./validationSchema')

const controller = require('./customers.controller')

router.get('/', controller.index)
router.get('/:id', controller.fetch)
router.post('/', validate({body: validationSchema.customerCreatePayload}), controller.create)
router.put('/:id', validate({body: validationSchema.customerUpdatePayload}), controller.update)
router.delete('/:id', controller.delete)

module.exports = router
