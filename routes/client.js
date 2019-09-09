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
        if (err) {
            console.log("Failed to query for users: " + err);
            res.end()
            return
        }
        console.log("Users fetched successfully!");
        res.render('welcome', { clients: rows });
    })
});

router.post('/client', function(req, res, next) {
    const connection = mysql.createConnection({
        host: 'us-cdbr-iron-east-02.cleardb.net',
        user: 'b525fb3beb7abe',
        database: 'heroku_f88e5c34407b619',
        password: '431db98c'
    })

    var chip_id = req.body.chipId;
    console.log(chip_id)


    const queryString = "UPDATE user set vorname = \"Test\" where chip_id = 1";
    connection.query(queryString, (err, rows, fields) => {
        if (err) {
            console.log("Failed to Update " + err);
            res.end()
            return
        }
        console.log("User updated successfully!");
        res.render('homepage');
    })
});

module.exports = router;