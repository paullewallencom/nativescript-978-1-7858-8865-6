/***********************************************************************************
 * (c) 2015, Nathanael Anderson
 * Licensed under the MIT license
 *
 * Version 1.0.0                                       Nathan@master-technology.com
 **********************************************************************************/
"use strict";

var platform = require('platform');

exports.pageLoaded = function(args) {
    var page = args.object;

    // Title Label background color per platform
    var titleLabel = page.getViewById('title');

    if (titleLabel.ios) {
        // iOS background will be blue
        titleLabel.backgroundColor = "blue";
    } else if (titleLabel.android) {
        // Android background will be green
        titleLabel.backgroundColor = "green";
    } else {
        // Future platforms will be red
        titleLabel.backgroundColor = "red";
    }

    // Find our label
    var diffLabel = page.getViewById('diff');

    // Setup our platform differences label
    var data = "Manufacturer: " + platform.device.manufacturer + "\r\n";

    // Device Differences
    data += "Platform os: " + platform.device.os + "\r\n";
    data += "Os version: " + platform.device.osVersion + "\r\n";
    data += "Model: " + platform.device.model + "\r\n";
    data += "SDK Version: " + platform.device.sdkVersion + "\r\n";
    data += "Device Type: " + platform.device.deviceType + "\r\n";
    data += "Device uuid: " + platform.device.uuid + "\r\n";
    data += "Device Language: " + platform.device.language + "\r\n\r\n";

    // Screen Differences
    data += "Screen width in pixels: " + platform.screen.mainScreen.widthPixels + "\r\n";
    data += "Screen height in pixels: " + platform.screen.mainScreen.heightPixels + "\r\n";
    data += "Screen width in DIPs: " + platform.screen.mainScreen.widthDIPs + "\r\n";
    data += "Screen height in DIPs: " + platform.screen.mainScreen.heightDIPs + "\r\n";
    data += "Screen Scale: " + platform.screen.mainScreen.scale;
    diffLabel.text = data;

};
