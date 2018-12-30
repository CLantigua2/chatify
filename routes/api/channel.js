const express = require('express');
const router = express.Router();
const passport = require('passport');

// Post model
const Channel = require('../../models/channel');
// Profile model
const Profile = require('../../models/Profile');

// Validation
// const validateChannelInput = require('../../validation/channel');
const { validatePostInput, validateChannelInput } = require('../../validation/channel');

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Channels Works' }));

// @route   GET api/channel
// @desc    Get channel
// @access  Public
router.get('/', (req, res) => {
	Channel.find()
		.sort({ date: -1 })
		.then((channel) => res.json(channel))
		.catch((err) => res.status(404).json({ nopostsfound: 'No posts found' }));
});

// @route   GET api/channel/:id
// @desc    Get post by id
// @access  Public
router.get('/:id', (req, res) => {
	Channel.findById(req.params.id)
		.then((channel) => res.json(channel))
		.catch((err) => res.status(404).json({ nopostfound: 'No channel found with that ID' }));
});

// @route   POST api/channel
// @desc    Create channel
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateChannelInput(req.body);

	// Check Validation
	if (!isValid) {
		// If any errors, send 400 with errors object
		return res.status(400).json(errors);
	}

	const newChannel = new Channel({
		name: req.body.name,
		purpose: req.body.purpose,
		user: req.user.id
	});
	newChannel.save().then((channel) => res.json(channel));
});

// @route   DELETE api/channel/:id
// @desc    Delete post
// @access  Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Profile.findOne({ user: req.user.id }).then((profile) => {
		Channel.findById(req.params.id)
			.then((channel) => {
				// Check for post owner
				if (channel.user.toString() !== req.user.id) {
					return res.status(401).json({ notauthorized: 'User not authorized' });
				}

				// Delete
				channel.remove().then(() => res.json({ success: true }));
			})
			.catch((err) => res.status(404).json({ channelnotfound: 'No channel found' }));
	});
});

// @route   POST api/posts/like/:id
// @desc    Like post
// @access  Private
router.post('/like/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Profile.findOne({ user: req.user.id }).then((profile) => {
		Channel.findById(req.params.id)
			.then((post) => {
				if (post.comments.likes.filter((like) => like.user.toString() === req.user.id).length > 0) {
					return res.status(400).json({ alreadyliked: 'User already liked this post' });
				}

				// Add user id to likes array
				post.comments.likes.unshift({ user: req.user.id });

				post.save().then((post) => res.json(post));
			})
			.catch((err) => res.status(404).json({ postnotfound: 'No post found' }));
	});
});

// @route   POST api/posts/unlike/:id
// @desc    Unlike post
// @access  Private
router.post('/unlike/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Profile.findOne({ user: req.user.id }).then((profile) => {
		Channel.findById(req.params.id)
			.then((post) => {
				if (post.comments.likes.filter((like) => like.user.toString() === req.user.id).length === 0) {
					return res.status(400).json({ notliked: 'You have not yet liked this post' });
				}

				// Get remove index
				const removeIndex = post.comments.likes.map((item) => item.user.toString()).indexOf(req.user.id);

				// Splice out of array
				post.comments.likes.splice(removeIndex, 1);

				// Save
				post.save().then((post) => res.json(post));
			})
			.catch((err) => res.status(404).json({ postnotfound: 'No post found' }));
	});
});

// @route   POST api/channels/comment/:id
// @desc    Add comment to post
// @access  Private
router.post('/comment/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateChannelInput(req.body);

	// Check Validation
	if (!isValid) {
		// If any errors, send 400 with errors object
		return res.status(400).json(errors);
	}

	Channel.findById(req.params.id)
		.then((comment) => {
			const newComment = {
				text: req.body.text,
				name: req.body.name,
				avatar: req.body.avatar,
				user: req.user.id
			};

			// Add to comments array
			comment.comments.push(newComment);

			// Save
			comment.save().then((post) => res.json(post));
		})
		.catch((err) => res.status(404).json({ postnotfound: 'No post found' }));
});

// @route   PUT api/channels/comment/:id
// @desc    Add comment to post
// @access  Private
router.put('/comment/:id/:comment_id', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validatePostInput(req.body);

	// Check Validation
	if (!isValid) {
		// If any errors, send 400 with errors object
		return res.status(400).json(errors);
	}

	const { comment_id } = req.params;
	const textData = req.body;
	Channel.findByIdAndUpdate(comment_id, textData).then((comment) => {
		if (comment) {
			res.status(200).json(comment);
		} else {
			res.status(404).json({ message: 'no message with that id exists' });
		}
	});
});

// @route   DELETE api/channel/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete('/comment/:id/:comment_id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Channel.findById(req.params.id)
		.then((post) => {
			// Check to see if comment exists
			if (post.comments.filter((comment) => comment._id.toString() === req.params.comment_id).length === 0) {
				return res.status(404).json({ commentnotexists: 'Comment does not exist' });
			}

			// Get remove index
			const removeIndex = post.comments.map((item) => item._id.toString()).indexOf(req.params.comment_id);

			// Splice comment out of array
			post.comments.splice(removeIndex, 1);

			post.save().then((post) => res.json(post));
		})
		.catch((err) => res.status(404).json({ postnotfound: 'No post found' }));
});

module.exports = router;
