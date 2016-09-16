var React = require('react');
var ReactDOM = require('react-dom');

var ReactComponent = React.createClass({
	render: function() {
		return <div>Welcome to React</div>;
	}
});

ReactDOM.render( <div>
			<ReactComponent/>
			<ReactComponent/>
			<ReactComponent/>
			</div>
	, document.getElementById('mycontainer'));
