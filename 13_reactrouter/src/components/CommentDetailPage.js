var React = require('react');

var CommentDetail = React.createClass({
  render: function() {
    return (
      <div>
        <h2> Param Passed = {this.props.params.id} </h2>
        <h2> Query String Passed = {this.props.query.name} </h2>
      </div>
    );
  }
});

module.exports = CommentDetail;
