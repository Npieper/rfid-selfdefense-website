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

console.log(vorname)

connection.query("UPDATE user set Vorname = ?, Nachname = ?, Email = ?, Geburtsdatum = ?, Geburtsort = ?, Nationalitaet = ?, Beruf = ?, Strasse = ?, Plz = ?, Telefon = ?  where ChipID =  ?", [vorname,nachname,email,geburtsdatum,geburtsort,nationalitaet,beruf,strasse,plz,telefon,chip_id]), (err, rows, fields) => {
    if (err) {
        console.log("Failed to Update " + err);
        connection.end()
        return
    }
    console.log("User updated successfully!");
    connection.end();
}
}

exports.printX = function () {
    console.log("X")
};