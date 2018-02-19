require('dotenv').config()

const pg = require('pg')
pg.defaults.ssl = true

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
}
