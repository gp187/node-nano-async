"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Wrapper_1 = require("./src/Wrapper");
var nanoFactory = require("nano");
exports.default = function (config) {
    return (new Wrapper_1.Wrapper()).wrap(nanoFactory(config));
};
//# sourceMappingURL=index.js.map