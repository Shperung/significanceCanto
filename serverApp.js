const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const ObjectID = require('mongodb').ObjectID;
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'build')));

let db;

const port = process.env.PORT || 3012;

const config = {
	MONGO_HOST: process.env.NODE_ENV === 'production'
		? 'mongodb+srv://Shperung:19871989_yanot@significance-canto-vwnqo.mongodb.net/significanceCantoDB?retryWrites=true'
		: 'mongodb://localhost:27017/significanceCantoDB',
	URL: process.env.NODE_ENV === 'production'
		? 'https://significance-canto.herokuapp.com/'
		: 'http://localhost',
  };
  

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


/*GET*/
app.get('/api/artists', (req, res) => {
 
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
  
app.get('/api/artists/:id', (req, res) => {
	db.collection('artists').findOne({_id: ObjectID(req.params.id)}, function (err, doc) {
		if (err) {
		console.log('get /artists/:id');
		return res.sendStatus(500);
		}
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
		res.send(doc);
	});
});
  
  /* POST */
  app.post('/api/artists', function (req, res) {
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
  });
  
  /* MongoClient */
  const client = new MongoClient(config.MONGO_HOST, { useNewUrlParser: true });
  client.connect(err => {
	 if (err) {
		return console.log('mongodb ERROR->',err);    
	 }
	db = client.db("significanceCantoDB");
	app.listen(port, () => {
	  console.log(`API starded in http://localhost:${port}/ .......`);
	});
  
  });
  