const request = require('supertest');
const express = require('express');
const server = express();

end = (err, res) => {
	if (err) res.json(err);
};

describe('index.js', () => {
	it('should return 200 status', () => {
		request(server).get('/').expect(200).end();
	});
	it('should return 200 for user route', () => {
		request(server).get('/api/users').expect(200).end();
	});
});
