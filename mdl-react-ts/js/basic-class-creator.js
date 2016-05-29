"use strict";
var React = require('react');
var classNames = require('classnames');
exports.basicClassCreator = function (displayName, defaultClassName, element) {
    if (element === void 0) { element = 'div'; }
    var fn = function (props) {
        var className = props.className, children = props.children;
        return React.createElement(element, {
            className: classNames(defaultClassName, className)
        }, children);
    };
    fn.displayName = displayName;
    return fn;
};
//# sourceMappingURL=basic-class-creator.js.map