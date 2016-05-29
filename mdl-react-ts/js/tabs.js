"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var react_component_1 = require('./react-component');
var Tab = (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        _super.apply(this, arguments);
    }
    Tab.prototype.handleClick = function (e) {
        this.props.onTabClick(this.props.tabId);
    };
    Tab.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, className = _a.className, tabId = _a.tabId, onTabClick = _a.onTabClick, style = _a.style;
        var classes = classNames('mdl-tabs__tab', {
            'is-active': isActive
        }, className);
        style.cursor = 'pointer';
        return React.createElement("a", {className: classes, onClick: this.handleClick.bind(this), style: style}, this.props.children);
    };
    Tab.defaultProps = {
        style: {}
    };
    return Tab;
}(React.Component));
exports.Tab = Tab;
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = this;
        _super.call(this, props);
        this.handleClickTab = function (tabId) {
            _this.props.onChange(tabId);
        };
    }
    Tabs.prototype.render = function () {
        var that = this;
        var _a = this.props, activeTab = _a.activeTab, className = _a.className, onChange = _a.onChange, ripple = _a.ripple;
        var classes = classNames('mdl-tabs mdl-js-tabs', {
            'mdl-js-ripple-effect': ripple
        }, className);
        return (React.createElement("div", {className: classes}, React.createElement("div", {className: "mdl-tabs__tab-bar"}, React.Children.map(this.props.children, function (child, index) {
            return React.cloneElement(child, {
                tabId: index,
                isActive: index === activeTab,
                onTabClick: that.handleClickTab
            });
        })), React.createElement("div", {className: "react-mdl-hack", id: "undefined"})));
    };
    Tabs.propTypes = {
        children: React.PropTypes.arrayOf(function (props, propName, componentName) {
            var prop = props[propName];
            if (prop.type !== Tab) {
                return new Error('`' + componentName + '` only accepts `Tab` as children.');
            }
        })
    };
    Tabs.defaultProps = {
        activeTab: 0,
        ripple: true
    };
    return Tabs;
}(react_component_1.ReactComponentBase));
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.js.map