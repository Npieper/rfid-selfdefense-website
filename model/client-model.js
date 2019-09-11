var express = require('express');
var router = express.Router();
const mysql = require('mysql');

exports.updateUser = function(chip_id,vorname,nachname,email,geburtsdatum,geburtsort,nationalitaet,beruf,strasse,plz,telefon) {
const connection = mysql.createPool({
    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: 'b525fb3beb7abe',
    database: 'heroku_f88e5c34407b619',
    password: '431db98c'
})

const queryString = "UPDATE user set vorname = \"chip_ID\" where chip_id = 1";
connection.query(queryString, (err, rows, fields) => {
    if (err) {
        console.log("Failed to Update " + err);
        res.end()
        return
    }
    console.log("User updated successfully!");
    connection.end();
})
}

exports.printX = function () {
    console.log("X")
};