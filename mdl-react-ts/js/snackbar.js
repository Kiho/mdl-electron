"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_component_1 = require('./react-component');
var Snackbar = (function (_super) {
    __extends(Snackbar, _super);
    function Snackbar() {
        _super.apply(this, arguments);
    }
    Snackbar.prototype.render = function () {
        return (React.createElement("div", React.__spread({}, this.props, {className: "mdl-js-snackbar mdl-snackbar"}), React.createElement("div", {className: "mdl-snackbar__text"}), React.createElement("button", {className: "mdl-snackbar__action", type: "button"})));
    };
    Snackbar.defaultProps = {
        ariaLive: "assertive",
        ariaAtomic: true,
        ariaRelevant: "text"
    };
    return Snackbar;
}(react_component_1.ReactComponentBase));
exports.Snackbar = Snackbar;
//# sourceMappingURL=snackbar.js.map