const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.MYSQL_HOST_BSALE,
  user: process.env.MYSQL_USER_BSALE,
  password: process.env.MYSQL_PASSWORD_BSALE,
  database: process.env.MYSQL_DB_BSALE
})

function dataBase (req, res, sql) {
  pool.getConnection((err, connection) => {
    if (err) throw err

    connection.query(sql, async (error, results) => {
      await res.status(200).json(results).end()
      connection.release()

      if (error) {
        res.status(204).end()
        throw error
      }
    })
  })
}

module.exports = dataBase
