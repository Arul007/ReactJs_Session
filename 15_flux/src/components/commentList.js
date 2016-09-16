var React = require('react');
var Comment = require('./comment');
var CommentActions = require('../actions/commentActions');

var CommentList = React.createClass({
  deleteComment: function(id) {
      console.log('Delete Comment from CommentList for id .... ' + id);
      CommentActions.deleteComment(id);
  },
  render: function() {
    var self = this;
    var commentNodes = this.props.comments.map(function (comment) {
      return (
        <Comment key={comment.id} id={comment.id} author={comment.author} onDelete={self.deleteComment}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div>
        <table border="1">
          <thead>
            <th>Author</th>
            <th>Comment</th>
          </thead>
          <tbody>
            {commentNodes}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = CommentList;
