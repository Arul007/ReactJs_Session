var React = require('react');
var ReactDOM = require('react-dom');

var ReactComponent = React.createClass({
	retrieve: function() {
        var name = this.refs.mytext.value;
        alert("Retrieved name from text box: " + name);
	},
	render: function() {
		return (<div>
				<h2>{this.props.children}</h2>
				<span>Enter your name: </span>
				<input type="text" ref="mytext"/><br/><br/>
				<button onClick={this.retrieve} >Retrieve name and display</button>
			</div>);
	}
});

ReactDOM.render(<ReactComponent>Ref Demo</ReactComponent>,
    document.getElementById('mycontainer'));
