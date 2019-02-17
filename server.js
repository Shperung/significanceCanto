const express = require('express');
const app = express();

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

app.get('/artists', (req, res) => {
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






app.listen(port, () => {
	console.log(`API starded in http://localhost:${port}/ ..............___`);
});