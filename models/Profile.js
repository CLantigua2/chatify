const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	username: {
		type: String,
		required: true,
		max: 15
	},
	status: {
		type: String,
		max: 50
	},
	location: [
		{
			city: {
				type: String,
			},
			state: {
				type: String,
				max: 2
			}
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
