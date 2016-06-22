var React = require('react');
var Link = React.createClass({
    render: function () {
        return (
            <a href={this.props.url} onClick={this.props.handleClick}>{this.props.title}</a>
        );
    }
});

module.exports = Link;