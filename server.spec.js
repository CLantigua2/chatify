const request = require('supertest');
const server = require('./server');

describe('index.js', () => {
	describe('/ route', () => {
		it('should return status code 200', () => {
			// hit the endpoint and get the response
			request(server).get('/').then((response) => {
				expect(response.status).toBe(200);
			});
		});
	});
});
