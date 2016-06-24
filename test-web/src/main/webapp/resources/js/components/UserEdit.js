var React = require('react');
var jQuery = require('jquery');
var mainEndpoint = require('./endpoints').mainEndpoint;
require('./../../css/userDetails');
var UserEdit = React.createClass({
    getInitialState: function() {
        return {
            data: {}
        }
    },
    componentDidMount:function () {
        if(this.props.route.newUser){
            //if the user is new, then no need to load data from endpoin
            return;
        }
        this.loadData();
    },
    loadData : function (){
        var url= mainEndpoint + this.props.routeParams.userId;
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
    onSubmitUser:function () {
      this.props.route.handleSubmitUser(this.state.data);
    },
    onChangeFirstName:function (e) {
        var data =this.state.data;
        data.firstName=e.target.value;
        this.setState({
            data: data
        });
    },
    onChangeLastName:function (e) {
        var data =this.state.data;
        data.lastName=e.target.value;
        this.setState({
            data: data
        });
    },
    onChangeUsername:function (e) {
        var data =this.state.data;
        data.username=e.target.value;
        this.setState({
            data: data
        });
    },
    onChangeEmail:function (e) {
        var data =this.state.data;
        data.email=e.target.value;
        this.setState({
            data: data
        });
    },
    render: function() {

        return (
            <div className="userDetails">
                <form onSubmit={this.onSubmitUser}>
                <div className="userDetailsRow-even">
                    <span>First Name:</span>&nbsp;
                    <input value={this.state.data.firstName} onChange={this.onChangeFirstName}></input>
                </div>
                <div className="userDetailsRow-odd">
                    <span>Last name:</span>&nbsp;
                    <input value={this.state.data.lastName} onChange={this.onChangeLastName}></input>
                </div>
                <div className="userDetailsRow-even">
                    <span>Username:</span>&nbsp;
                    <input value={this.state.data.username} onChange={this.onChangeUsername}></input>
                </div>
                <div className="userDetailsRow-odd">
                    <span>Email:</span>&nbsp;
                    <input value={this.state.data.email} onChange={this.onChangeEmail}></input>
                </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
});

module.exports = UserEdit;


