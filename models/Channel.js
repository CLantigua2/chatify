const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Channel = mongoose.model('channel', ChannelSchema);
