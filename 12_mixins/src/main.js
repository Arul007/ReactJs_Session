var React = require('react');
var ReactDOM = require('react-dom');

var DefaultLanguageMixin = {
    getDefaultProps: function () {
				console.log("From Mixin => Returning Default Props...");
        return {language: "Java"};
    }
};

var MountMixin = {
    componentWillMount: function () {
        console.log("From Mixin => Component Will Mount...");
    }
};

var FirstComponent = React.createClass({
	mixins: [DefaultLanguageMixin],
	render: function() {
		return (<div>
				<h1>{this.props.children}</h1>
				<h3>Property 'language' from mixin => {this.props.language}</h3>
			</div>);
	}
});

var SecondComponent = React.createClass({
	mixins: [DefaultLanguageMixin, MountMixin],
	render: function() {
		return (<div>
				<h1>{this.props.children}</h1>
				<h3>Property 'language' from mixin => {this.props.language}</h3>
			</div>);
	}
});

var MainComponent = React.createClass({
	render: function() {
		return (<div>
				<FirstComponent>First Component</FirstComponent>
				<br/>
				<SecondComponent>Second Component</SecondComponent>
			</div>);
	}
});

ReactDOM.render(<MainComponent />,
	document.getElementById('mycontainer'));
