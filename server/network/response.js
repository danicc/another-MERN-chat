function success(req, res, status, message) {
  res.status(status || 200).send({
    error: '',
    body: message,
  })
}
function error(req, res, status = 500, message = 'Internal Error', details) {
  console.log('[response error]' + details)
  res.status(status).send({
    error: message,
    body: '',
  })
}

module.exports = {
  success,
  error,
}
