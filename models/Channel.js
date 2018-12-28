const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Post Schema
const ChannelSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	name: {
		type: String,
		required: true
	},
	purpose: {
		type: String
	},
	comments: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: 'users'
			},
			text: {
				type: String,
				required: true
			},
			name: {
				type: String
			},
			avatar: {
				type: String
			},
			likes: [
				{
					user: {
						type: Schema.Types.ObjectId,
						ref: 'users'
					}
				}
			],
			date: {
				type: Date,
				default: Date.now
			}
		}
	],

	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Channel = mongoose.model('channel', ChannelSchema);
