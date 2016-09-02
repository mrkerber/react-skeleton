var React = require('react');

var BasicComponent = React.createClass({



    render: function() {

        var divStyle = {
            marginTop: 10,
            marginLeft: 10,
            height: 200,
            width: 200
        };

        divStyle.background = this.props.color;

        return (
            <div style={divStyle}>
                <p>{this.props.number}</p>
            </div>
        );
    }
});

module.exports = BasicComponent;
