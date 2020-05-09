const express = require('express')

const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function (req, res) {
  controller
    .getUsers()
    .then((users) => {
      response.success(req, res, 200, users)
    })
    .catch((e) => {
      response.error(req, res, undefined, undefined, e)
    })
})

router.post('/', function (req, res) {
  controller
    .addUser(
      req.body.name,
      req.body.avatar,
      req.body.description,
      req.body.location,
      req.body.twitter
    )
    .then(() => {
      response.success(req, res, 201, 'Created new user')
    })
    .catch((e) => {
      response.error(req, res, undefined, undefined, e)
    })
})

module.exports = router
