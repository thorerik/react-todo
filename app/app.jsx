var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// load foundation-sites
$(document).foundation();

// load our own custom styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
