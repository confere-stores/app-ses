'use strict'

// log on files
const logger = Object.assign({}, console)
logger.log = (...rest) => console.log(`${(new Date()).toISOString()}: ${rest.join()}`)

module.exports = appSdk => {
  return (req, res) => {
    const { storeId } = req
    // handle callback with E-Com Plus app SDK
    // https://github.com/ecomclub/ecomplus-app-sdk
    appSdk.handleCallback(storeId, req.body)

      .then(({ isNew, authenticationId }) => {
        // authentication tokens were updated
        res.status(204)
        res.end()
      })

      .catch(err => {
        if (typeof err.code === 'string' && !err.code.startsWith('SQLITE_CONSTRAINT')) {
          // debug SQLite errors
          logger.error(err)
        }
        res.status(500)
        let { message } = err
        res.send({
          error: 'auth_callback_error',
          message
        })
      })
  }
}
