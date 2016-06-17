var TableRow =  React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.data.firstName}</td>
                <td>{this.props.data.lastName}</td>
                <td>{this.props.data.username}</td>
                <td>{this.props.data.email}</td>
            </tr>
        );
    }

});

var Header =  React.createClass({
    render:function () {
        return (
            <thead>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Username</td>
            <td>Email</td>
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
            async:false,
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
            <div>
                <Header/>
                <table>
                    <tbody>
                    {this.state.data.map((user, i) => <TableRow key={i} data={user} />)}
                    </tbody>
                </table>
            </div>
        );
    }

});