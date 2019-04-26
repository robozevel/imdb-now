const fetch = require('node-fetch')
const IMDB_BASE_URL = 'https://v2.sg.media-imdb.com'
const rSpaces = /\s+/g

module.exports = async (text = '') => {
  const query = text.trim().toLowerCase().replace(rSpaces, '_')
  if (!query) throw new TypeError('Invalid query')
  const url = `${IMDB_BASE_URL}/suggestion/${query[0]}/${query}.json`
  return fetch(url).then(res => res.json())
}