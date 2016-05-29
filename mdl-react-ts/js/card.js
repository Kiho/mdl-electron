"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var classNames = require('classnames');
var react_component_1 = require('./react-component');
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        _super.apply(this, arguments);
        this.displayName = 'MDL:Card';
    }
    Card.prototype.render = function () {
        var classes = {
            'mdl-card': true,
        };
        classes['mdl-shadow--' + this.props.shadow + 'dp'] = true;
        var title = this.props.title ? React.createElement(CardTitle, null, this.props.title) : null;
        var style = this.props.style;
        style.height = this.props.height ? this.props.height : style.height;
        style.width = this.props.width ? this.props.width : style.width;
        return (React.createElement("div", {className: classNames(classes), style: style}, title, this.props.children));
    };
    Card.defaultProps = {
        style: {}
    };
    return Card;
}(react_component_1.ReactComponentBase));
exports.Card = Card;
var CardTitle = (function (_super) {
    __extends(CardTitle, _super);
    function CardTitle() {
        _super.apply(this, arguments);
    }
    CardTitle.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, expand = _a.expand;
        var classes = classNames('mdl-card__title', {
            'mdl-card--expand': expand
        }, className);
        var title = typeof children === 'string'
            ? React.createElement('h2', { className: 'mdl-card__title-text' }, children)
            : children;
        return (React.createElement("div", {className: classes}, title));
    };
    return CardTitle;
}(react_component_1.ReactComponentBase));
exports.CardTitle = CardTitle;
//# sourceMappingURL=card.js.map