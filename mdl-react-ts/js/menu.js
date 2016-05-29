"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var enums_1 = require('./enums');
var react_component_1 = require('./react-component');
var button_1 = require('./button');
var Icon = (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        _super.apply(this, arguments);
    }
    Icon.prototype.render = function () {
        var _a = this.props, className = _a.className, name = _a.name;
        var classes = classNames('material-icons', className);
        return React.createElement("i", React.__spread({}, this.props, {className: classes, name: ""}), name);
    };
    return Icon;
}(react_component_1.ReactComponentBase));
exports.Icon = Icon;
var BadgeButton = (function (_super) {
    __extends(BadgeButton, _super);
    function BadgeButton() {
        _super.apply(this, arguments);
    }
    BadgeButton.prototype.render = function () {
        var _a = this.props, className = _a.className, name = _a.name, id = _a.id, onClick = _a.onClick;
        var classes = classNames('material-icons', className);
        return (React.createElement(button_1.Button, {className: 'mdl-button--icon', onClick: onClick, id: id}, React.createElement("i", React.__spread({}, this.props, {onClick: null, className: classes}), name), ";"));
    };
    return BadgeButton;
}(react_component_1.ReactComponentBase));
exports.BadgeButton = BadgeButton;
var IconButton = (function (_super) {
    __extends(IconButton, _super);
    function IconButton() {
        _super.apply(this, arguments);
    }
    IconButton.prototype.render = function () {
        var _a = this.props, className = _a.className, name = _a.name, id = _a.id, onClick = _a.onClick;
        var classes = classNames('mdl-button--icon', className);
        return (React.createElement(button_1.Button, {className: classes, onClick: onClick, id: id}, React.createElement(Icon, {name: name, className: "f15"})));
    };
    return IconButton;
}(react_component_1.ReactComponentBase));
exports.IconButton = IconButton;
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(props) {
        _super.call(this, props);
        this.element = 'li';
        this.defaultClassName = 'mdl-menu__item';
    }
    return MenuItem;
}(react_component_1.BasicComponent));
exports.MenuItem = MenuItem;
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        _super.apply(this, arguments);
    }
    Menu.prototype.render = function () {
        var _a = this.props, align = _a.align, className = _a.className, ripple = _a.ripple, target = _a.target, valign = _a.valign;
        var classes = classNames('mdl-menu mdl-js-menu', (_b = {},
            _b["mdl-menu--" + enums_1.Valign[valign] + "-" + enums_1.Align[align]] = true,
            _b['mdl-js-ripple-effect'] = ripple,
            _b
        ), className);
        return (React.createElement("ul", {className: classes, htmlFor: target}, this.props.children));
        var _b;
    };
    Menu.defaultProps = {
        ripple: true,
        align: enums_1.Align.left,
        valign: enums_1.Valign.bottom
    };
    return Menu;
}(react_component_1.ReactComponentBase));
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map