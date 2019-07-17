var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

router.get('/login', function(req, res, next) {
    res.render('login');
  });
  
  
router.post('/login', async(req, res, net) => {
    const user = users.find(user => user.name === req.body.name);
    if (user == null) {
      return res.status(400).send('Cannot find user');
    }
    
    try {
      bcrypt.compare(req.body.password, user.password);
    } catch {
      res.status(500).send()
    }
  });
  
  
module.exports = router;