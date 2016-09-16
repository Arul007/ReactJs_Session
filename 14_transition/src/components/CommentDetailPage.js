var React = require('react');

var CommentDetail = React.createClass({
  statics: {
      willTransitionFrom: function (transition, element) {
        if (!confirm('Are you sure you want to leave this page ?')) {
          transition.abort();
        }
      },
      willTransitionTo: function (transition, params, query, callback) {
        if (!confirm('Are you sure you want to view the comment details ?')) {
          transition.abort();
        } else {
          callback();
        }
      },
  },
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
