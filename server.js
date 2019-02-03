var express = require('express');

var app = express();
 
app.get('/', function(req, res) {
	res.send('<h1>Hello API</h1>');
});

app.listen(3012, function() {
	console.log('API starded in http://localhost:3012/ ..............');
});