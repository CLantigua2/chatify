const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateChannelInput(data) {
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : '';
	if (!Validator.isLength(data.name, { min: 1, max: 22 })) {
		errors.name = 'Channel name should be between 1 and 22 characters';
	}

	if (Validator.isEmpty(data.name)) {
		errors.name = 'Channel name is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
