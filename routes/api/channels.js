const express = require('express');
const router = express.Router();
const passport = require('passport');

// channel model
const Channel = require('../../models/Channel');
// profile model
const Profile = require('../../models/Profile');

// validation
const validateChannelInput = require('../../validation/channel');

// @route GET api/channel/test
// @desc Test channel route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Channel works' }));

// @route GET api/channel
// @desc get channels
// @access Public
router.get('/', (req, res) => {
	Channel.find()
		.sort({ date: -1 })
		.then((channels) => res.json(channels))
		.catch((err) => res.status(404).json({ nochannelsfound: 'No channels found' }));
});

// @route GET api/channel/:id
// @desc get channel by id
// @access Public
router.get('/:id', (req, res) => {
	Channel.findById(req.params.id)
		.then((channel) => res.json(channel))
		.catch((err) => res.status(404).json({ nochannelfound: 'No channel found with that ID' }));
});

// @route POST api/channel
// @desc create channel
// @access private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateChannelInput(req.body);

	// Check Validation
	if (!isValid) {
		// if any errors, send 400 with errors object
		return res.status(400).json(errors);
	}

	const newChannel = new Channel({
		name: req.body.name,
		purpose: req.body.purpose
	});
	newChannel.save().then((channel) => res.json(channel));
});

// @route DELETE api/channel/:id
// @desc delete channel
// @access private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Profile.findOne({ user: req.user.id }).then((channel) => {
		Channel.findById(req.params.id)
			.then((channel) => {
				// check for channel owner
				if (channel.user.toString() !== req.user.id) {
					return res.status(401).json({ notauthorized: 'User not authorized' });
				}

				// Delete
				channel.remove().then(() => res.json({ success: true }));
			})
			.catch((err) => res.status(404).json({ channelnotfound: 'No channel found' }));
	});
});

module.exports = router;
