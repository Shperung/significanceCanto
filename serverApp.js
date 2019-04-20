const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let db;

const port = process.env.PORT || 3012;

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
  

  const ObjectID = require('mongodb').ObjectID;
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

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


const MongoClient = require('mongodb').MongoClient;
const mongo_uri = "mongodb+srv://Shperung:19871989_yanot@significance-canto-vwnqo.mongodb.net/significanceCantoDB?ssl=true&retryWrites=true"
// const client = new MongoClient(host, { useNewUrlParser: true });
// client.connect(err => {
//    if (err) {
//       return console.log('mongodb ERROR->>>>>>>>>',err);    
//    }
//   db = client.db("significanceCantoDB");
//   app.listen(port, () => {
//     console.log(`API starded in http://localhost:${port}/ .......+++++`);
//   });

// });
let dbClient;

MongoClient
  .connect(mongo_uri, { useNewUrlParser: true, poolSize: 10 })
  .then(client => {
    db = client.db('significanceCantoDB');
    dbClient = client;
	collection = db.collection('artists');
	app.listen(port, () => {
	console.log(`API starded in http://localhost:${port}/ .......--------`);
	});
  })
  .catch(error => console.error('error-*-*-*777', error));




