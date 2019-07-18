var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const client = require("../own_modules/database-connection");

// POST Create a new User
router.post('/register', async(req, res) => {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)

      // Change this INSERT when having different users
      const insertString = "INSERT INTO users(first_name, surname, username, password) VALUES  (?, ?, ?, ?)";
      client.getConnection().query(insertString, ["Peter", "Rofl","niki", hashedPassword], (err, rows, fields) => {
      if(err) {
        console.log("Failed to insert " + err);
        res.status(500).send()
        return
      } 
      console.log("Insert successfully");
      res.render('welcome');
    })
 
  });
  
// GET Register Page
router.get('/register', function(req, res, next) {
    res.render('register');
  });

module.exports = router;
