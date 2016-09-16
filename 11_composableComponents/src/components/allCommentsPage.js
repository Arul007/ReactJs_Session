"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var CommentList = require('./commentList');
var CommentApi = require('../data/commentApi');

var AllCommentsPage = React.createClass({
    getInitialState: function() {
        return {
          comments: []
        };
    },
    componentDidMount: function() {
        if (this.isMounted()) {
            this.setState({ comments: CommentApi.getAllComments() });
        }
    },
    render: function() {
        return (
            <div>
                <h1>Comments</h1>
                <CommentList comments={this.state.comments} />
            </div>
        );
    }
});

module.exports = AllCommentsPage;
