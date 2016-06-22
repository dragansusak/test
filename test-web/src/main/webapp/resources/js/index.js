var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./components/Routes');

require('./../css/Table');

ReactDOM.render(
    Routes,
    document.getElementById('container')
);
