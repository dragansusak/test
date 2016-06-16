var UserDetails = React.createClass({

    render: function() {

        return (
            <div className="userDetails">
                <div clasName="userDetailsRow">
                    <div>First Name</div>
                    <div>{this.props.data.firstName}</div>
                </div>
                <div clasName="userDetailsRow">
                    <div>Last name</div>
                    <div>{this.props.data.lastName}</div>
                </div>
                <div clasName="userDetailsRow">
                    <div>Username</div>
                    <div>{this.props.data.username}</div>
                </div>
                <div clasName="userDetailsRow">
                    <div>Email</div>
                    <div>{this.props.data.email}</div>
                </div>
            </div>
        );
    }
});

var userDetailData;

$(document).ready();

ReactDOM.render(
<UserDetails userId="1"/>,
    document.getElementById('container')
);
