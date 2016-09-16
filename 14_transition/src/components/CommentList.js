var React = require('react');
var Comment = require('./Comment');

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.comments.map(function (comment) {
      return (
        <Comment key={comment.id} id={comment.id} author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div>
        <table border="1">
          <thead>
            <th>ID</th>
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
