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
// @desc Test post route
