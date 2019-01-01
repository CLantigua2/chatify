const request = require('supertest');
const server = require('./server');

const users = '/api/users/';
const profile = '/api/profile/';
const channels = '/api/channels/';

let token;

beforeAll((done) => {
	request(server)
		.post(`${users}/login`)
		.send({
			// name: 'username',
			email: 'user@hotmail.com',
			// password: 'password',
			password2: 'password'
		})
		.end((err, response) => {
			token = response.body.token;
			done();
		});
});

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
	it('should require auth token and give 401 code', async () => {
		let response = await request(server).get(`${users}/current`);
		expect(response.status).toBe(401);
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
