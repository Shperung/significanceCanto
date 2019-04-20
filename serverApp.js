const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const ObjectID = require('mongodb').ObjectID;
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let db;

const port = process.env.PORT || 3012;

const artists = [
	{
        id: 1,
        unique: 'nightwish2',
		name: "Nightwish"
	},
	{
        id: 2,
        unique: 'rammstein',
		name: "Rammstein"
	},
	{
        id: 3,
        unique: 'within-temptation',
		name: "Within Temptation"
    },
    {
        id: 4,
        unique: 'epica',
		name: "Erica"
	},
];

app.get('/api/artists', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
	res.send(artists);
});

app.get('/api/artists/:unique', (req, res) => {
	const artist = artists.find(artist => artist.unique === req.params.unique);
	if (artist) {
		res.send(artist);
	} else {
		res.send(`Artist with unique - ${req.params.unique} no found`);
	}
});

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


// app.listen(port, () => {
//     console.log(`API starded in http://localhost:${port}/ .......`);
// });

const host = "mongodb+srv://Shperung:19871989_yanot@significance-canto-vwnqo.mongodb.net/significanceCantoDB?retryWrites=true"
const client = new MongoClient(host, { useNewUrlParser: true });
client.connect(err => {
   if (err) {
      return console.log('mongodb ERROR->',err);    
   }
  db = client.db("significanceCantoDB");
  app.listen(port, () => {
    console.log(`API starded in http://localhost:${port}/ .......+`);
  });

});



