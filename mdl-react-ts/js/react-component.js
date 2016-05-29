"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
var ReactComponentBase = (function (_super) {
    __extends(ReactComponentBase, _super);
    function ReactComponentBase() {
        _super.apply(this, arguments);
    }
    ReactComponentBase.prototype.componentDidMount = function () {
        componentHandler.upgradeElement(ReactDOM.findDOMNode(this));
    };
    ReactComponentBase.prototype.componentWillUnmount = function () {
        componentHandler.downgradeElements(ReactDOM.findDOMNode(this));
    };
    return ReactComponentBase;
}(React.Component));
exports.ReactComponentBase = ReactComponentBase;
var BasicComponent = (function (_super) {
    __extends(BasicComponent, _super);
    function BasicComponent() {
        _super.apply(this, arguments);
        this.element = 'div';
        this.defaultClassName = '';
    }
    BasicComponent.prototype.render = function () {
        var _a = this.props, className = _a.className, disabled = _a.disabled, onClick = _a.onClick;
        return React.createElement(this.element, {
            className: classNames(this.defaultClassName, className),
            disabled: disabled,
            onClick: onClick
        }, this.props.children);
    };
    return BasicComponent;
}(React.Component));
exports.BasicComponent = BasicComponent;
function cloneChildren(children, props) {
    return React.Children.map(children, function (child) {
        var p = typeof props === 'function' ? props(child) : props;
        return React.cloneElement(child, p);
    });
}
exports.cloneChildren = cloneChildren;
//# sourceMappingURL=react-component.js.map