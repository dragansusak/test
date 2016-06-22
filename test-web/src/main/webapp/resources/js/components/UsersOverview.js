var React = require('react');
var Table = require('./Table');
var Link = require('./Link');
var UsersOverview = React.createClass({
    render: function () {
        return (
            <div>
                <Table/>
                <div>
                    <Link title="New user" url=""/>
                </div>
            </div>
        );
    }
});

module.exports = UsersOverview;