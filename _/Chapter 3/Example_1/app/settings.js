var frame = require("ui/frame");
exports.tap = function() {
    frame.topmost().goBack();
};

