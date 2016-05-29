"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var react_component_1 = require('./react-component');
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.apply(this, arguments);
        this.buttonClasses = 'mdl-button mdl-js-button';
    }
    Button.prototype.render = function () {
        var _a = this.props, accent = _a.accent, className = _a.className, colored = _a.colored, text = _a.text, disabled = _a.disabled, primary = _a.primary, raised = _a.raised, ripple = _a.ripple, component = _a.component, href = _a.href, onClick = _a.onClick, id = _a.id, children = _a.children;
        if (this.onClick) {
            onClick = this.onClick;
        }
        var buttonClasses = classNames(this.buttonClasses, {
            'mdl-js-ripple-effect': ripple,
            'mdl-button--raised': raised,
            'mdl-button--colored': colored,
            'mdl-button--primary': primary,
            'mdl-button--accent': accent
        }, className);
        component = component || (href ? 'a' : 'button');
        if (text)
            children = text;
        return React.createElement(component, {
            className: buttonClasses,
            onClick: onClick,
            href: href,
            id: id,
            text: text,
            disabled: disabled
        }, children);
    };
    Button.displayName = "Button";
    return Button;
}(react_component_1.ReactComponentBase));
exports.Button = Button;
var FABButton = (function (_super) {
    __extends(FABButton, _super);
    function FABButton(props) {
        _super.call(this, props);
        this.buttonClasses = classNames('mdl-button--fab', {
            'mdl-button--mini-fab': this.props.mini
        }, this.buttonClasses);
    }
    return FABButton;
}(Button));
exports.FABButton = FABButton;
//# sourceMappingURL=button.js.map