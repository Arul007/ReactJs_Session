var React = require('react');
var ReactDOM = require('react-dom');

var ReactComponent = React.createClass({
    add: function() {
        alert('Add clicked');
    },
    edit: function() {
        alert('Edit clicked');
    },
    delete: function() {
        alert('Delete clicked');
    },
    render: function() {
        return (
            <div>
                <h2>{this.props.children}</h2>
                <button onClick={this.add} >Add</button>
                <button onClick={this.edit} >Edit</button>
                <button onClick={this.delete} >Delete</button>
            </div>
            );
    }
});

ReactDOM.render(<ReactComponent>Event Demo</ReactComponent>,
    document.getElementById('mycontainer'));
