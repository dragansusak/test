var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require ('./Main');
var UserDetails = require ('./UserDetails');
var UsersOverview = require ('./UsersOverview');


var routes = (

    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={UsersOverview}></IndexRoute>
            <Route path='userDetails/:userId' component={UserDetails}></Route>
        </Route>

    </Router>

);

module.exports = routes;