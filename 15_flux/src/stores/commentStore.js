"use strict";

var Dispatcher = require('../dispatcher/dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var _comments = [];

var CommentStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(cb) {
      this.on('change', cb);
    },
    removeChangeListener: function(cb) {
      this.removeListener('change', cb);
    },
    emitChange: function() {
      this.emit('change');
    },
    getAllComments: function() {
      return _comments;
    }
});

Dispatcher.register(function(action) {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _comments = action.initialData.comments;
            CommentStore.emitChange();
          break;
        case ActionTypes.ADD_COMMENT:
            _comments.push(action.comment);
            CommentStore.emitChange();
            break;
        case ActionTypes.DELETE_COMMENT:
            _.remove(_comments, function(comment) {
                return (action.id === comment.id);
            });
            console.log("Emitting Delete Change..." + action.id);
            CommentStore.emitChange();
            break;
        default:
    }
});

module.exports = CommentStore;
