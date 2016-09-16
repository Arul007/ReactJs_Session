"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={require('./app')}>
    <DefaultRoute handler={require('./components/allCommentsPage')} />
    <Route name="addComment" path="addComment" handler={require('./components/addCommentPage')} />
  </Route>
);

module.exports = routes;
