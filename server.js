const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let db;

const port = 3012;

const artists = [
	{
		id: 1,
		name: "Nightwish"
	},
	{
		id: 2,
		name: "Rammstein"
	},
	{
		id: 3,
		name: "Within Temptation"
	},
];
 
app.get('/', (req, res) => {
	res.send('<h1>Hello API3</h1>');
});

/* читаю з статичної змінної
app.get('/artists', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
	res.send(artists);
});
*/

/* test post
app.post('/artists', function (req, res) {
  console.log('req.body', req.body);
 res.send('post data')
})
*/

/*GET*/
app.get('/artists', (req, res) => {
  db.collection('artists').find().toArray(function (err, docs) {
    if (err) {
      console.log('get /artists', err);
      return res.sendStatus(500);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(docs);
  })
});

app.get('/artists/:id', (req, res) => {
	const artist = artists.find(artist => artist.id === Number(req.params.id));
	if (artist) {
		res.send(artist);
	} else {
		res.send(`Artist with id - ${req.params.id} no found`);
	}
});



/* POST */
app.post('/artists', function (req, res) {
  const artist = {
    name: req.body.name
  };

  db.collection('artists').insert(artist, function (err, result) {
    if (err) {
      console.log('post /artists');
      res.sendStatus(500);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(artist);
  })
})



MongoClient.connect('mongodb://localhost:27017/significanceCantoDB', function (err, database) {
	if (err) {
    return console.log('mongodb ERROR->',err);    
  }

  db = database.db('significanceCantoDB');
  app.listen(port, () => {
    console.log(`API starded in http://localhost:${port}/ ...........+db...___`);
  });
})

