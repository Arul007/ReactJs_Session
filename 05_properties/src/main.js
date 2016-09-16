var React = require('react');
var ReactDOM = require('react-dom');

var ReactComponent = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Operating System: {this.props.os}</h1>
				<h3>Developed by {this.props.children}</h3>
			</div>
		);
	}
});

ReactDOM.render( <div>
			<ReactComponent os="Windows">Microsoft</ReactComponent>
			<ReactComponent os="Solaris">Sun Microsystems</ReactComponent>
			<ReactComponent os="iOS">Apple</ReactComponent>
			</div>
	, document.getElementById('mycontainer'));
