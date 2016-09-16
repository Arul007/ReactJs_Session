var React = require('react');
var ReactDOM = require('react-dom');

var ReactComponent = React.createClass({
	getInitialState: function() {
		return {checked: true}
	},
	handleChange: function() {
		this.setState({checked: !this.state.checked})
	},
	render: function() {
		var currentState = this.state.checked ? " Checked" : " Unchecked";
		return (<div>
				<h2>{this.props.children}</h2>
				<input type="checkbox" onChange={this.handleChange} defaultChecked={this.state.checked}/>
				<span>{currentState} state</span>
			</div>);
	}
});

ReactDOM.render(<ReactComponent>State Demo</ReactComponent>,
    document.getElementById('mycontainer'));
