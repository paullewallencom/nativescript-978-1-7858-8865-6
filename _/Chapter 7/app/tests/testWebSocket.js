"use strict";
 
var WebSocket = require ("nativescript-websockets"); // jshint ignore:line
 
var socket = new WebSocket("ws://192.168.56.1:3000");
socket.open();

describe('WebSocket Send/Receive', function() {

    var rnd = parseInt(Math.random()*100000,10).toString();
    describe('#Send', function () {
        it('WS message handler should be called with packets', function (done) {
            var hasCalledDone = false;
            var counter = 0;
            socket.on("message", function(ws, d) {
                counter++;
                if (counter === 1) {
                    var hasCommand = d.indexOf("{\"command\":\"setClient\",\"clientId\":");
                    assert.equal(hasCommand, 0);
                } else {
                    // Wait for our message back
                    if (d === '{"from":"ME","message":"'+rnd+'"}') {
                        if (!hasCalledDone) {
                            hasCalledDone = true;
                            done();
                        }
                    }
                }
            });
            socket.send(JSON.stringify({from: "TEST", message: rnd}));
        });
    });
});

