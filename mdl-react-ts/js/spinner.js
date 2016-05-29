"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var react_component_1 = require('./react-component');
var Spinner = (function (_super) {
    __extends(Spinner, _super);
    function Spinner() {
        _super.apply(this, arguments);
    }
    Spinner.prototype.render = function () {
        var _a = this.props, className = _a.className, singleColor = _a.singleColor, isActive = _a.isActive;
        var classes = classNames('mdl-spinner mdl-js-spinner', {
            'mdl-spinner--single-color': singleColor,
            'is-active': isActive
        }, className);
        return React.createElement("div", {className: classes});
    };
    return Spinner;
}(react_component_1.ReactComponentBase));
exports.Spinner = Spinner;
//# sourceMappingURL=spinner.js.map