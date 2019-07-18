const mysql = require('mysql');


exports.getConnection = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port:9999,
        database: 'test-mysql'
      })
  };