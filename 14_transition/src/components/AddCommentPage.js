"use strict";

var React = require('react');
var Router = require('react-router');
var CommentForm = require('./CommentForm');
var AllCommentsPage = require('./AllCommentsPage');
var CommentApi = require('../data/CommentApi');

var AddCommentPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    saveComment: function(comment) {
        CommentApi.saveComment(comment);
        this.transitionTo('app');
    },

    render: function() {
        return (
            <CommentForm onSave={this.saveComment} />
        );
    }
});

module.exports = AddCommentPage;
