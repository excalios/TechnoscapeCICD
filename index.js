const express = require('express');
const app = express();
const Products = require('./product.json');

app.get('/', (req, res) => {
	res.send('simple rest app for technoscape');
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
