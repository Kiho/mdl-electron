"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var react_component_1 = require('./react-component');
var Badge = (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        _super.apply(this, arguments);
    }
    Badge.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, text = _a.text, overlap = _a.overlap, noBackground = _a.noBackground;
        // No badge if no children
        if (!React.Children.count(children))
            return null;
        var element = typeof children === 'string'
            ? React.createElement("span", null, children)
            : React.Children.only(children);
        // No text -> No need of badge
        if (text === null || typeof text === 'undefined')
            return element;
        var classes = classNames('mdl-badge', {
            'mdl-badge--overlap': !!overlap,
            'mdl-badge--no-background': !!noBackground
        }, className);
        var source = element;
        return React.cloneElement(source, {
            className: classNames(classes, source.props && source.props.className),
            'data-badge': text
        });
    };
    return Badge;
}(react_component_1.ReactComponentBase));
exports.Badge = Badge;
//# sourceMappingURL=badge.js.map