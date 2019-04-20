const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const ObjectID = require('mongodb').ObjectID;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let db;

const port = process.env.PORT || 3012;



app.get('/', (req, res) => {
	res.send('<h1>Hello API3</h1>');
});

app.listen(port, () => {
    console.log(`API starded in http://localhost:${port}/ .......`);
});