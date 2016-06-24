var React = require('react');
var jQuery = require('jquery');
require('./../../css/userDetails');
var UserDetails = React.createClass({
    getInitialState: function() {
        return {
            data: {}
        }
    },
    componentDidMount:function () {
        this.loadData();
    },
    loadData : function (){
        var url= "http://localhost:8080/test/users/" + this.props.routeParams.userId;
        jQuery.ajax({
            url: url,
            data: null,
            success: function (data) {
                this.setState({
                    data: data
                });
            }.bind(this),
        });
    },
    render: function() {

        return (
            <div className="userDetails">
                <div className="userDetailsRow-even">
                    <span>First Name:</span>&nbsp;
                    <span>{this.state.data.firstName}</span>
                </div>
                <div className="userDetailsRow-odd">
                    <span>Last name:</span>&nbsp;
                    <span>{this.state.data.lastName}</span>
                </div>
                <div className="userDetailsRow-even">
                    <span>Username:</span>&nbsp;
                    <span>{this.state.data.username}</span>
                </div>
                <div className="userDetailsRow-odd">
                    <span>Email:</span>&nbsp;
                    <span>{this.state.data.email}</span>
                </div>
            </div>
        );
    }
});

module.exports = UserDetails;


