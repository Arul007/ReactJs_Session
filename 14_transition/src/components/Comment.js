var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Comment = React.createClass({
  render: function() {
    return (
      <tr>
        <td><Link to="commentDetail" params={{id: this.props.id}}>{this.props.id}</Link></td>
        <td>{this.props.author}</td>
        <td>{this.props.children}</td>
      </tr>
    );
  }
});

module.exports = Comment;
