"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var react_component_1 = require('./react-component');
function cloneChildren(children, props) {
    return React.Children.map(children, function (child) {
        var p = typeof props === 'function' ? props(child) : props;
        return React.cloneElement(child, p);
    });
}
var Spacer = (function (_super) {
    __extends(Spacer, _super);
    function Spacer(props) {
        _super.call(this, props);
        this.defaultClassName = 'mdl-layout-spacer';
    }
    return Spacer;
}(react_component_1.BasicComponent));
exports.Spacer = Spacer;
var Content = (function (_super) {
    __extends(Content, _super);
    function Content(props) {
        _super.call(this, props);
        this.element = 'main';
        this.defaultClassName = 'mdl-layout__content';
    }
    return Content;
}(react_component_1.BasicComponent));
exports.Content = Content;
var Drawer = (function (_super) {
    __extends(Drawer, _super);
    function Drawer() {
        _super.apply(this, arguments);
    }
    Drawer.prototype.render = function () {
        var _a = this.props, className = _a.className, title = _a.title;
        var classes = classNames('mdl-layout__drawer', className);
        return (React.createElement("header", {className: classes}, title ? React.createElement("span", {className: "mdl-layout-title"}, title) : null, this.props.children));
    };
    return Drawer;
}(react_component_1.ReactComponentBase));
exports.Drawer = Drawer;
function cloneNavigationItem(children, props) {
    return React.Children.map(children, function (child) {
        var p = typeof props === 'function' ? props(child) : props;
        return React.cloneElement(child, p);
    });
}
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation(props) {
        _super.call(this, props);
    }
    Navigation.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        var classes = classNames('mdl-navigation', className);
        return (React.createElement("nav", React.__spread({}, this.props, {className: classes}), cloneNavigationItem(children, function (child) { return ({
            className: classNames({ 'mdl-navigation__link': child.type !== Spacer }, child.props ? child.props.className : null)
        }); })));
    };
    return Navigation;
}(react_component_1.ReactComponentBase));
exports.Navigation = Navigation;
var HeaderRow = (function (_super) {
    __extends(HeaderRow, _super);
    function HeaderRow() {
        _super.apply(this, arguments);
    }
    HeaderRow.prototype.render = function () {
        var _a = this.props, className = _a.className, title = _a.title, location = _a.location;
        var classes = classNames('mdl-layout__header-row', className);
        return (React.createElement("div", {className: classes}, title ? React.createElement("span", {className: "mdl-layout-title"}, React.createElement("a", {href: 'index.html'}, title)) : null, location && React.createElement("span", {className: "mdl-layout-title"}, "  ", "/ " + location), React.createElement(Spacer, null), this.props.children));
    };
    return HeaderRow;
}(react_component_1.ReactComponentBase));
exports.HeaderRow = HeaderRow;
var HeaderTabs = (function (_super) {
    __extends(HeaderTabs, _super);
    function HeaderTabs() {
        _super.apply(this, arguments);
    }
    HeaderTabs.prototype.render = function () {
        var _a = this.props, className = _a.className, ripple = _a.ripple;
        var classes = classNames('mdl-layout__tab-bar', {
            'mdl-js-ripple-effect': ripple !== false
        }, className);
        return (React.createElement("div", {className: classes}, cloneChildren(this.props.children, function (child) { return ({
            className: classNames('mdl-layout__tab', child.props.className)
        }); })));
    };
    return HeaderTabs;
}(react_component_1.ReactComponentBase));
exports.HeaderTabs = HeaderTabs;
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.render = function () {
        var _a = this.props, className = _a.className, scroll = _a.scroll, title = _a.title, location = _a.location, transparent = _a.transparent, waterfall = _a.waterfall;
        var classes = classNames('mdl-layout__header', {
            'mdl-layout__header--scroll': scroll,
            'mdl-layout__header--transparent': transparent,
            'mdl-layout__header--waterfall': waterfall
        }, className);
        var isRowOrTab = false;
        React.Children.forEach(this.props.children, function (child) {
            if (child && (child.type === HeaderRow || child.type === HeaderTabs)) {
                isRowOrTab = true;
            }
        });
        return (React.createElement("header", {className: classes}, isRowOrTab ? this.props.children : (React.createElement(HeaderRow, {title: title, location: location}, this.props.children))));
    };
    return Header;
}(react_component_1.ReactComponentBase));
exports.Header = Header;
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        _super.apply(this, arguments);
    }
    Layout.prototype.render = function () {
        var _a = this.props, className = _a.className, fixedDrawer = _a.fixedDrawer, fixedHeader = _a.fixedHeader, fixedTabs = _a.fixedTabs;
        var classes = classNames('mdl-layout mdl-js-layout', {
            'mdl-layout--fixed-drawer': fixedDrawer,
            'mdl-layout--fixed-header': fixedHeader,
            'mdl-layout--fixed-tabs': fixedTabs
        }, className);
        return (React.createElement("div", React.__spread({}, this.props, {className: classes}), this.props.children));
    };
    return Layout;
}(react_component_1.ReactComponentBase));
exports.Layout = Layout;
//# sourceMappingURL=layout.js.map