/***********************************************************************************
 * (c) 2015, Nathanael Anderson
 * Licensed under the MIT license
 *
 * Version 0.0.1                                       Nathan@master-technology.com
 **********************************************************************************/
"use strict";
/* global require, exports */

var application = require("application");
application.mainModule = "main-page";
application.cssFile = "app.css";

// This iOS specific code should not be required anymore; iOS is supposed to now Auto-register fonts
// But in case you are using this code on v1.4 or earlier of NS, this code is left.
if (application.ios) {
    var fontModule = require("ui/styling/font");
    fontModule.ios.registerFont("MaterialIcons-Regular.ttf");
}

application.start();
