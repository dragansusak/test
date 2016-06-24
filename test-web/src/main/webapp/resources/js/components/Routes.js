var React = require('react');
var ReactRouter = require('react-router');
var jQuery = require('jquery');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('./Main');
var UserDetails = require('./UserDetails');
var UserEdit = require('./UserEdit');
var UsersOverview = require('./UsersOverview');
var mainEndpoint = require('./endpoints').mainEndpoint;

var onSubmitNewUser = function (data) {
    var url = mainEndpoint + "new";
    jQuery.ajax({
        contentType:'application/json; charset=utf-8',
        type:'POST',
        url: url,
        data: JSON.stringify(data),
        success: function () {
           hashHistory.push("/");
        }.bind(this),
    });
};
var onSubmitEditUser = function () {

    alert('Not implemented yet');
};
var routes = (

    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={UsersOverview}></IndexRoute>
            <Route path='userDetails/:userId' component={UserDetails}></Route>
            <Route path='userEdit/:userId' component={UserEdit} handleSubmitUser={onSubmitEditUser}></Route>
            <Route path='newUser' component={UserEdit} newUser={true} handleSubmitUser={onSubmitNewUser}></Route>
        </Route>

    </Router>

);

module.exports = routes;