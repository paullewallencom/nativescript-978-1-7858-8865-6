"use strict";
var proxyquire = require('proxyquire');
var assert = require('assert');

var DummyWS = function() {
    this._isOpen = false;
    this._events = {};
};
DummyWS.prototype.on = function(event, callback) {
    if (!this._events[event]) { this._events[event] = [];}
    this._events[event].push(callback);
};
DummyWS.prototype.send = function(m) {
    for (var i=0;i<this._events.message.length;i++) {
        this._events.message[i](this, '{"clientId":1, "from":"SERVER", "message":"'+m+'"');
    }
};
DummyWS.prototype.isOpen = function() { return this._isOpen; };
DummyWS.prototype.close = function() { this._isOpen = false; };
DummyWS.prototype.open = function() { this._isOpen = true; };
DummyWS['@noCallThru'] = true;

var WebSocket = proxyquire('../app/WebSocketWrapper', {"nativescript-websockets": DummyWS});

var socket = new WebSocket();

describe('WebSockets Properties', function() {
    describe('#setName', function () {
        it('should = the name we set', function () {
            // Should now be "Hi"
            socket.setName("Hi");
            assert.equal(socket.getName(), "Hi");
        });
    });
    describe('#setHost', function () {
        it('should not be null', function () {
            // Should now be "Local"
            socket.setHost("Local");
            assert.notEqual(socket.getHost(), null);
        });
    });
});

describe('WebSocket Send/Receive', function() {

    describe('#Send', function () {
        it('WS done should be called with a fake packet', function (done) {
            socket.on("message", function(d) {
                assert.equal(d.from, 3);
                done();
            });
            socket.send("Blah");
        });
    });
});

