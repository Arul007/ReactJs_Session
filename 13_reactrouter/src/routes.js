"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./app')}>
    <DefaultRoute handler={require('./components/AllCommentsPage')} />
    <Route name="addComment" path="addComment" handler={require('./components/AddCommentPage')} />
    <Route name="commentDetail" path="/comment/:id" handler={require('./components/CommentDetailPage')} />
    <NotFoundRoute handler={require('./components/NotFoundPage')} />
    <Redirect from="comments" to="app" />
    <Redirect from="coments" to="app" />
  </Route>
);

module.exports = routes;
