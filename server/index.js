const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const mysql = require('mysql');


const db = mysql.createPool({
    host: "192.168.99.126",
    port: "3306",
    user: "tibicha",
    password: "tibicha",
    database: 'matcha'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/browsing', (req, res) => {
    const sql = 'SELECT *, images.id as postId, users.id as userId FROM images INNER JOIN users ON images.user_id = users.id';
    db.query(sql, (err, result) => {
        res.send(result);
    });
})

app.get('/profile', (req, res) => {
    const sql = 'SELECT *, images.id as postId, users.id as userId FROM images INNER JOIN users ON images.user_id = users.id';
    db.query(sql, (err, result) => {
        res.send(result);
    });
})

app.listen(3001, () => {
    console.log('running on port 3001');
})