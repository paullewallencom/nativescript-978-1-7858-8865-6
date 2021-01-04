"use strict";

var AjaxSocket = require ('../app/AjaxSocket');
var assert = require('assert');

AjaxSocket.prototype.send = function(s) {
    this._handler("send", '{"clientId":1,"messages":[{"from":"me"}]}');
};
AjaxSocket.prototype._handleListener = function() { return; };

var socket = new AjaxSocket();

describe('Ajax Properties', function() {
    describe('#setName', function () {
        it('should = the name we set', function () {
            socket.setName("Hi");
            // Should now be "Hi"
            assert.equal(socket.getName(), "Hi");
        });
    });
    describe('#setHost', function () {
        it('should not be null', function () {
            socket.setHost("Local");
            // Should now be "Local"
            assert.notEqual(socket.getHost(), null);
        });
    });
});

describe('Ajax Send/Receive', function() {
    describe('#Send', function () {
        it('Ajax done should be called with a fake packet', function (done) {
                socket.on("message", function(d) {
                    assert.equal(d.from, 3);
                    done();
                });
            socket.send("Blah");
        });
    });
});

