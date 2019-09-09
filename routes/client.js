var express = require('express');
var router = express.Router();
const mysql = require('mysql');



router.get('/client', function(req, res, next) {

    const connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: 'b525fb3beb7abe',
    database: 'heroku_f88e5c34407b619',
    password: '431db98c'
  })


  const queryString = "SELECT * FROM user";
  connection.query(queryString, (err, rows, fields) => {
    if(err) {
      console.log("Failed to query for users: " + err);
      res.end()
      return
    }
    console.log("Users fetched successfully!");
    res.render('welcome', {clients: rows});
  })
});

router.post('/client', function(req, res, next) {
  // Hier user in Datenbank speichern
});

module.exports = router;