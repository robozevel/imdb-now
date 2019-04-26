const { run } = require('micro')
const cors = require('micro-cors')()
const { unescape } = require('querystring')
const search = require('./search')

const handler = req => search(unescape(req.url.slice(1)))

module.exports = cors((req, res) => run(req, res, handler))