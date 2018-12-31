const request = require('supertest');
const express = require('express');
const server = express();

describe('index.js', () => {
	it('should return 200 status', () => {
		request(server).get('/').expect(200).end((err, res) => {
			if (err) res.json(err);
		});
	});
});
