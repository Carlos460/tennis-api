const mysql = require('mysql');

module.exports = mysql.createConnection({
  host: 'localhost',
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  database: 'tennis_api',
});
