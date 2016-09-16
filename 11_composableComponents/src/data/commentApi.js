"use strict";

var comments = require('./commentData').comments;

var CommentApi = {
	getAllComments: function() {
		return JSON.parse(JSON.stringify(comments));
	}
};

module.exports = CommentApi;
