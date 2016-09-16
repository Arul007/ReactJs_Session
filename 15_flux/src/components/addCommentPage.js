"use strict";

var React = require('react');
var Router = require('react-router');
var CommentForm = require('./commentForm');
var AllCommentsPage = require('./allCommentsPage');
var CommentActions = require('../actions/commentActions');

var AddCommentPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    saveComment: function(comment) {
// F2:
        CommentActions.addComment(comment);
        this.transitionTo('app');
    },
    render: function() {
        return (
            <CommentForm onSave={this.saveComment} />
        );
    }
});

module.exports = AddCommentPage;
