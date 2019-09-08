var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('mysql');


router.get('/:id', (req, res) => {
  console.log("Fetching user with id: " + req.params.id);

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port:9999,
    database: 'test-mysql'
  })

  const userId = req.params.id;
  const queryString = "SELECT * FROM users WHERE id = ?";
  connection.query(queryString, [userId], (err, rows, fields) => {
    if(err) {
      console.log("Failed to query for users: " + err);
      res.end()
      return
    }
    console.log("Users fetched successfully!");
    res.json(rows);
  })
});

module.exports = router;
