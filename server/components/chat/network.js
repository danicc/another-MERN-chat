const express = require('express')

const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/:userId', function (req, res) {
  controller
    .list(req.params.userId)
    .then((chats) => response.success(req, res, 200, chats))
    .catch((e) => {
      response.error(req, res, undefined, undefined, e)
    })
})

router.post('/', function (req, res) {
  controller
    .add(req.body.users)
    .then((chat) => {
      response.success(req, res, 201, chat)
    })
    .catch((e) => {
      response.error(req, res, undefined, undefined, e)
    })
})

module.exports = router
