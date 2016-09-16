"use strict";

var comments = require('./CommentData').comments;

var currentID = 3;

var CommentApi = {
	getAllComments: function() {
		return JSON.parse(JSON.stringify(comments));
	},
	saveComment: function(comment) {
    currentID = currentID + 1;
    comment.id = currentID;
    comments.push(comment);
	}
};

module.exports = CommentApi;
