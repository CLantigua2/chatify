const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = {
	validateChannelInput,
	validatePostInput
};

function validateChannelInput(data) {
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : '';
	data.purpose = !isEmpty(data.purpose) ? data.purpose : '';

	if (!Validator.isLength(data.name, { min: 1, max: 22 })) {
		errors.name = 'Name must be between 1 and 22 characters';
	}

	if (Validator.isEmpty(data.name)) {
		errors.name = 'Channel Name field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
}

function validatePostInput(data) {
	let errors = {};

	data.text = !isEmpty(data.text) ? data.text : '';
	if (Validator.isEmpty(data.text)) {
		errors.text = 'Post cannot be empty';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
}
