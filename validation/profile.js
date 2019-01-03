const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
	let errors = {};

	data.username = !isEmpty(data.username) ? data.username : '';
	data.status = !isEmpty(data.status) ? data.status : '';
	data.location.city = !isEmpty(data.location.city) ? data.location.city : '';
	data.location.state = !isEmpty(data.location.state) ? data.location.state : '';

	if (!Validator.isLength(data.username, { min: 2, max: 15 })) {
		errors.username = 'Username must be between 2 and 15 characters';
	}
	if (!Validator.isLength(data.username, { min: 2, max: 2 })) {
		errors.username = 'Username must be 2 characters';
	}

	if (Validator.isEmpty(data.username)) {
		errors.username = 'Profile username is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
