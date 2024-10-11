const pg = require('pg')

// const config = {
//     user: process.env.PGUSER,
//     password: process.env.PGPASSWORD,
//     host: process.env.PGHOST,
//     port: process.env.PGPORT,
//     database: process.env.PGDATABASE
// }
// const pool = new pg.Pool(config)

const connectionString = process.env.PGCONNSTRING
const pool = new pg.Pool({connectionString})

module.exports = { pool }