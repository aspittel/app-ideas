require('dotenv').config()
const pg = require('pg')
pg.defaults.ssl = true

console.log(process.env.DATABASE_URL)
module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL
}
