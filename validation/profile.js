const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
	let errors = {};

	data.handle = !isEmpty(data.handle) ? data.handle : '';

	if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
		errors.handle = 'Handle must be between 2 and 40 characters';
	}

	if (Validator.isEmpty(data.handle)) {
		errors.handle = 'Profile handle is required';
	}

	if (!Validator.isLength(data.sidebar, { min: 7, max: 7 })) {
		errors.handle = 'Please provie a 7 character Hex Code ex. #FF0000';
	}
	if (!Validator.isLength(data.active, { min: 7, max: 7 })) {
		errors.handle = 'Please provie a 7 character Hex Code ex. #FF0000';
	}
	if (!Validator.isLength(data.inactive, { min: 7, max: 7 })) {
		errors.handle = 'Please provie 7 character Hex Code ex. #FF0000';
	}
	if (!Validator.isLength(data.header, { min: 7, max: 7 })) {
		errors.handle = 'Please provie 7 character Hex Code ex. #FF0000';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
