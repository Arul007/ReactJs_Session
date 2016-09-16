var React = require('react');

var Comment = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.author}</td>
        <td>{this.props.children}</td>
      </tr>
    );
  }
});

module.exports = Comment;
