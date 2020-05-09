const express = require('express')
const multer = require('multer')

const response = require('../../network/response')
const controller = require('./controller')
const config = require('../../config')

const router = express.Router()
const upload = multer({
  dest: `${config.STATIC_PATH}/files/`,
})

router.get('/', function (req, res) {
  const filterMessages = req.query.chat || null
  controller
    .getMessages(filterMessages)
    .then((messageList) => {
      response.success(req, res, 200, messageList)
    })
    .catch((e) => {
      response.error(req, res, undefined, undefined, e)
    })
})

router.post('/', upload.single('file'), function (req, res) {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((message) => {
      response.success(req, res, 201, message)
    })
    .catch((e) => {
      response.error(req, res, undefined, undefined, e)
    })
})

router.patch('/:id', function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((message) => {
      response.success(req, res, 200, message)
    })
    .catch((e) => {
      response.error(req, res, undefined, undefined, e)
    })
})

router.delete('/:id', function (req, res) {
  controller
    .removeMessage(req.params.id)
    .then(() => response.success(req, res, 200, 'Deleted message'))
    .catch((error) => response.error(req, res, undefined, undefined, error))
})

module.exports = router
