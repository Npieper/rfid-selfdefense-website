var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

// POST Create a new User
router.post('/register', async(req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      console.log(hashedPassword)
      const user = {name: req.body.name, password: hashedPassword}
    } catch {
      res.status(500).send()
    }
  });
  
// GET Register Page
router.get('/register', function(req, res, next) {
    res.render('register');
  });

module.exports = router;
