const request = require('supertest');
const server = require('./server');
const User = require('./models/User');
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log(err));
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
	beforeAll(async () => {
		await User.remove({});
	});

	// afterEach(async () => {
	// 	await User.remove({});
	// });
	afterAll(async () => {
		await mongoose.connection.close();
	});
	it('has a module', () => {
		expect(User).toBeDefined();
	});
	it('should return status 200 for user route', async () => {
		let response = await request(server).get(`${users}/test`);
		expect(response.status).toBe(200);
	});
	it('should require auth token and give 401 code', async () => {
		let response = await request(server).get(`${users}/current`);
		expect(response.status).toBe(401);
	});
	it('return 404 if logging in a nonexistent user', async () => {
		const agent = await request(server);
		const response = await agent.post(`${users}/login`).send({
			email: 'Charles@gmail.com',
			password: 'MrCharles'
		});
		expect(response.status).toEqual(404);
	});

	it('return 200 and type JSON if registering a user', async () => {
		const agent = await request(server);
		const response = await agent.post(`${users}/register`).send({
			name: 'Charles',
			email: 'Charles@email.com',
			password: 'MrCharles',
			password2: 'MrCharles'
		});
		expect(response.status).toEqual(200);
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
