var React = require('react');
var ReactDOM = require('react-dom');

var ReactComponent = React.createClass({
	componentWillMount: function() {
		alert("component going to mount");
	},
	componentDidMount: function() {
		alert("component is mounted");
	},
	render: function() {
		return (<div id="demo-container">
				<h2>{this.props.children}</h2>
			</div>);
	}
});

ReactDOM.render(<ReactComponent>Component Lifecycle demo</ReactComponent>,
	document.getElementById('mycontainer'));

var removeReactComponent = document.getElementById('demo-container');
removeReactComponent.onclick = function() {
	ReactDOM.unmountComponentAtNode(document.getElementById('mycontainer'));
	alert("component is unmounted");
}
