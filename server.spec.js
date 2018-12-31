const request = require('supertest');
const server = require('./server');

describe('index.js', () => {
	describe('/ route', () => {
		it('should return status code 200', async () => {
			let response = await request(server).get('/');
			expect(response.status).toBe(200);
		});
		it('Should return JSON', async () => {
			let response = await request(server).get('/');
			expect(response.type).toBe('application/json');
		});
	});
});
