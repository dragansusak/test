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
        $.ajax({
            url: "/test/users/1",
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

ReactDOM.render(
    <UserDetails userId="1"/>,
    document.getElementById('container')
);

