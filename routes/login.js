var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const client = require("../own_modules/database-connection");


router.get('/login', function(req, res, next) {
    res.render('login');
  });
  
router.post('/login', async(req, res, net) => {

    var username = req.body.username;
    var password = req.body.password;

    const queryString = "SELECT * FROM users WHERE username = ?";
    client.getConnection().query(queryString, [username], (err, rows, fields) => {
    if(err) {
      console.log("Failed to query for users: " + err);
      res.end()
      return
    }
      console.log("Users fetched successfully!");

      bcrypt.compare(password, rows[0].password, function(err, res) {
        if(res) {
          console.log("Password matches.");
        } else {
          console.log("Password does not match.");
        } 
      });
    })
  });
  
  
module.exports = router;