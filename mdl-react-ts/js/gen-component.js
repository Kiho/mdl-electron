"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var Component = (function (_super) {
    __extends(Component, _super);
    function Component() {
        _super.apply(this, arguments);
        this.defaultClassName = '';
    }
    Component.prototype.render = function () {
        var _a = this.props, element = _a.element, className = _a.className, disabled = _a.disabled, onClick = _a.onClick, children = _a.children;
        return React.cloneElement(element, {
            className: classNames(this.defaultClassName, className),
            disabled: disabled,
            onClick: onClick
        }, children);
    };
    return Component;
}(React.Component));
exports.Component = Component;
//# sourceMappingURL=gen-component.js.map