const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
var path = require("path");

var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: '3306',

    password: '',

    database: 'CS392',

    multipleStatements: true

});

mysqlConnection.connect((err) => {

    if (!err)

        console.log('DB connection succeded.');

    else

        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));

});

// app.listen(8080, '127.0.0.1')
app.listen(3000, () => console.log('Express server is running at port no : 3306'));

app.get('/', (req, res) => {
    const index = path.join(__dirname, '../','indexVue.html');
    res.sendFile(index);
});
app.get('/JOJO', (req, res) => {
    mysqlConnection.query('SELECT * FROM JOJO', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
app.get('/NavigateHouse', (req, res) => {
    mysqlConnection.query('SELECT * FROM NavigateHouse', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});