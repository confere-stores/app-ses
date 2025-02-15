'use strict'

// log on files
const logger = Object.assign({}, console)
logger.log = (...rest) => console.log(`${(new Date()).toISOString()}: ${rest.join()}`)

const ignoreError = response => {
  // check response status code
  // should ignore some error responses
  let { status, data } = response
  if (status >= 400 && status < 500) {
    switch (status) {
      case 403:
        // ignore resource limits errors
        return true

      case 404:
        if (data && data.error_code !== 20) {
          // resource ID not found ?
          // ignore
          return true
        }
        break
    }

    // must debug
    return false
  }
}

module.exports = err => {
  // axios error object
  // https://github.com/axios/axios#handling-errors
  if (!err.appAuthRemoved && !err.appErrorLog) {
    // error not treated by App SDK
    if (err.response) {
      if (ignoreError(err.response)) {
        // ignore client error
        return
      }
      err.responseJSON = JSON.stringify(err.response.data)
    }

    // debug unexpected response
    logger.error(err)
  } else if (err.appErrorLog && !err.appErrorLogged) {
    // cannot log to app hidden data
    // debug app log error
    let error = err.appErrorLog
    let { response, config } = error

    // handle error response
    if (response) {
      if (ignoreError(response)) {
        return
      }
      // debug unexpected response
      error.configJSON = {
        originalRequest: JSON.stringify(err.config),
        logRequest: JSON.stringify(config)
      }
      logger.error(error)
    }
  }
}
