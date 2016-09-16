var React = require('react');
var ReactDOM = require('react-dom');

var ReactComponent = React.createClass({
    propTypes: {
      name: React.PropTypes.string.isRequired,
      projects: React.PropTypes.array,
      age: function(props, propName) {
          if (typeof props[propName] !== "number"){
              return new Error("Age must be a number");
          }
          if (props[propName] > 100) {
              return new Error("Age entered is " + props[propName] + ", it should be less than or equal to 100");
          }
      }
    },
/*    getDefaultProps: function() {
      return (
        { name: "World of React" }
      )
    },
*/
	render: function() {
		return (<div>
				<h2>{this.props.children}</h2>
				<h4>Check the warning messages in the JavaScript console</h4>
				<p>Name : {this.props.name}</p>
				<p>Projects : {this.props.projects}</p>
				<p>Age : {this.props.age}</p>
			</div>);
	}
});

ReactDOM.render(<ReactComponent projects={"ShoppingCart"} age={101}>PropTypes demo</ReactComponent>,
    document.getElementById('mycontainer'));
