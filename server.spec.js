const request = require('supertest');
const server = require('./server');

const users = '/api/users/';
const profile = '/api/profile/';
const channels = '/api/channels/';

describe('server.js', () => {
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

describe('/api/users route', () => {
	it('should return status 200 for user route', async () => {
		let response = await request(server).get(`${users}/test`);
		expect(response.status).toBe(200);
	});
});
describe('/api/profile route', () => {
	it('should return status 200 for profile route', async () => {
		let response = await request(server).get(`${profile}/test`);
		expect(response.status).toBe(200);
	});
});
describe('/api/channels route', () => {
	it('should return status 200 for channels route', async () => {
		let response = await request(server).get(`${channels}/test`);
		expect(response.status).toBe(200);
	});
});
