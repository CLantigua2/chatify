const request = require('supertest');
const express = require('express');
const server = express();

describe('index.js', () => {
	it('should return 200 status', () => {
		request(server).get('/').expect(200).end((err, res) => (err ? res.json(err) : null));
	});
	describe('user routes', () => {
		it('should return 200 for user route', () => {
			request(server).get('/api/users').expect(200).end((err, res) => (err ? res.json(err) : null));
		});
		it('should register a user and return 201 status', () => {
			request(server)
				.post('/api/users/register')
				.send({
					name: 'Steve',
					email: 'Steve@hotmail.com',
					password: 'getMoneySteve',
					password2: 'getMoneySteve'
				})
				.set('Autherized', 'application/json')
				.expect(201)
				.end((err, res) => (err ? res.json(err) : null));
		});
	});
});
