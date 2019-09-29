const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const ObjectID = require('mongodb').ObjectID;

// const config = require('/config.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let db;

const port = process.env.PORT || 3012;

const config = {
  MONGO_HOST: process.env.NODE_ENV === 'production'
      ? 'mongodb+srv://Shperung:vwnqo123qwer@significance-canto-vwnqo.mongodb.net/significanceCantoDB?retryWrites=true'
      : 'mongodb://localhost:27017/significanceCantoDB',
  URL: process.env.NODE_ENV === 'production'
      ? 'https://significance-canto.herokuapp.com/'
      : 'http://localhost',
};


 
app.get('/', (req, res) => {
	res.send('<h1>Hello API3</h1>');
});

/* читаю з статичної змінної
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

app.get('/artists', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
	res.send(artists);
});

app.get('/artists/:id', (req, res) => {
	const artist = artists.find(artist => artist.id === Number(req.params.id));
	if (artist) {
		res.send(artist);
	} else {
		res.send(`Artist with id - ${req.params.id} no found`);
	}
});

*/

/* test post
app.post('/artists', function (req, res) {
  console.log('req.body', req.body);
 res.send('post data')
})
*/

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
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(artist);
  })
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const dbUser = 'viktorkrav4uk87@gmail.com';
const dbPass = 'vwnqo123qwer';
const dbHost = 'significance-canto-vwnqo.mongodb.net';
const dbBase = 'significanceCantoDB';

// MongoClient.connect('mongodb://localhost:27017/significanceCantoDB', function (err, database) {
// MongoClient.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbBase}`, { useNewUrlParser: true },  function (err, database) {
// 	if (err) {
//     return console.log('mongodb ERROR->',err);    
//   }

//   db = database.db(dbBase);
//   app.listen(port, () => {
//     console.log(`API starded in http://localhost:${port}/ ...........+db...___`);
//   });
// })



// const uri = "mongodb+srv://viktorkrav4uk87@gmail.com:vwnqo123qwer@significance-canto-vwnqo.mongodb.net/significanceCantoDB";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   if (err) {
//      return console.log('mongodb ERROR->',err);    
//   }
//   client.db("significanceCantoDB");
//   app.listen(port, () => {
//     console.log(`API starded in http://localhost:${port}/ ...........+db...___`);
//   });
//   client.close();
// });




//const uri = "mongodb+srv://Shperung:vwnqo123qwer@significance-canto-vwnqo.mongodb.net/significanceCantoDB?retryWrites=true";
const client = new MongoClient(config.MONGO_HOST, { useNewUrlParser: true });
client.connect(err => {
   if (err) {
      return console.log('mongodb ERROR->',err);    
   }
  db = client.db("significanceCantoDB");
 // console.log('ok', db);
  app.listen(port, () => {
    console.log(`API starded in http://localhost:${port}/ ...........+db...___`);
  });

  //client.close();
});


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


app.listen(port, () => {
    console.log(`API starded in http://localhost:${port}/ .......`);
});


// робоча версія на AWS
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const ObjectID = require('mongodb').ObjectID;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
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


app.listen(port, () => {
    console.log(`API starded in http://localhost:${port}/ .......`);
});

