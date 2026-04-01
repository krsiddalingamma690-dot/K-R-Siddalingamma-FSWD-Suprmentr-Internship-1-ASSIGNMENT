// middleware/logger.js

const logger = (req, res, next) => {
    const time = new Date().toLocaleDateString()
    console.log(`Request Received at ${time}`)
    next()
}

module.exports = logger