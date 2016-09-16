var React = require('react');

var Comment = React.createClass({
  onDelete: function(event) {
    event.preventDefault();
    console.log("***** " + this.props.author);
    console.log("***** " + this.props.text);
    console.log("***** " + this.props.id);
    this.props.onDelete(this.props.id);
  },
  render: function() {
    return (
      <tr>
        <td>{this.props.author}</td>
        <td>{this.props.children}</td>
        <td><a href="#" onClick={this.onDelete}>Delete</a></td>
      </tr>
    );
  }
});

module.exports = Comment;
