"use strict";

var Dispatcher = require('../dispatcher/dispatcher');
var CommentApi = require('../data/commentApi');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                comments: CommentApi.getAllComments()
            }
        });
    }
};

module.exports = InitializeActions;
