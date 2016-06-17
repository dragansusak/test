// var UserDetails = React.createClass({
//
//     render: function() {
//
//         return (
//             <div className="userDetails">
//                 <div clasName="userDetailsRow">
//                     <div>First Name</div>
//                     <div>{this.props.data.firstName}</div>
//                 </div>
//                 <div clasName="userDetailsRow">
//                     <div>Last name</div>
//                     <div>{this.props.data.lastName}</div>
//                 </div>
//                 <div clasName="userDetailsRow">
//                     <div>Username</div>
//                     <div>{this.props.data.username}</div>
//                 </div>
//                 <div clasName="userDetailsRow">
//                     <div>Email</div>
//                     <div>{this.props.data.email}</div>
//                 </div>
//             </div>
//         );
//     }
// });


var TableRow =  React.createClass({
    render: function () {
        return (
            <tr className={this.props.rowStyle}>
                <td>{this.props.data.firstName}</td>
                <td>{this.props.data.lastName}</td>
                <td>{this.props.data.username}</td>
                <td>{this.props.data.email}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }

});

var Header =  React.createClass({
    render:function () {
        return (
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
        );
    }

});

var Table =  React.createClass({
    getInitialState: function() {
        return {
            data: []
        }
    },
    componentDidMount:function () {
        this.loadData();
    },
    loadData:function () {
        var url= "/test/users";
        $.ajax({
            url: url,
            data: null,
            success: function (data) {
                this.setState({
                    data: data
                });
            }.bind(this),
        });
    },
    render:function () {
        return (
            <div className="table">
                <table>
                <Header/>
                    <tbody>
                    {this.state.data.map((user, i) => <TableRow key={i} data={user} rowStyle={i%2==0?'tableRow-even':'tableRow-odd'}/>)}
                    </tbody>
                </table>
            </div>
        );
    }

});

ReactDOM.render(
<Table />,
    document.getElementById('container')
);
