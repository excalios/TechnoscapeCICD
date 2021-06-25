const express = require('express');
const app = express();
const Products = require('./product.json');
const SmeeClient = require('smee-client');

const smee = new SmeeClient({
	source: 'https://smee.io/Zt9KemxgQOpNqbkP',
	target: 'http://localhost:8080/github-webhook',
	logger: console,
});

const events = smee.start();

app.get('/', (req, res) => {
	res.send('simple rest app');
});

app.get('/product/listall', (req, res) => {
	res.json(Products);
});

app.get('/product/:id', (req, res) => {
	res.json(
		Products.find((product) => {
			return req.params.id == product.id;
		})
	);
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = server;
