const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	handle: {
		type: String,
		required: true,
		max: 40
	},
	theme: {
		sidebar: {
			type: String,
			default: '#000E0F'
		},
		active: {
			type: String,
			default: '#34EAF5'
		},
		inactive: {
			type: String,
			default: '#1B8389'
		},
		header: {
			type: String,
			default: '#FFFFFF'
		}
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
