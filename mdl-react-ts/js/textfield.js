"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');
// import { Align, Valign } from './enums';
var react_component_1 = require('./react-component');
var Textfield = (function (_super) {
    __extends(Textfield, _super);
    function Textfield() {
        var _this = this;
        _super.apply(this, arguments);
        this._handleChange = function (e) {
            _this.props.onChange(e);
        };
    }
    Textfield.prototype.componentDidUpdate = function (prevProps) {
        if (!this.node) {
            var node = ReactDOM.findDOMNode(this);
            this.node = node.MaterialTextfield;
            this.node.checkDirty();
            this.node.checkValidity();
            this.input = node.querySelector('input');
        }
        if (this.props.required !== prevProps.required ||
            this.props.pattern !== prevProps.pattern) {
            this.node.checkValidity();
        }
        if (this.props.value !== prevProps.value) {
            this.node.checkDirty();
        }
        if (prevProps.valueLink) {
            if (this.props.valueLink.value !== prevProps.valueLink.value) {
                this.node.checkDirty();
            }
        }
        if (this.props.disabled !== prevProps.disabled) {
            this.node.checkDisabled();
        }
        if (this.props.error && !this.props.pattern) {
            // At every re-render, mdl will set 'is-invalid' class according to the 'pattern' props validity
            // If we want to force the error display, we have to override mdl 'is-invalid' value.
            var elt = ReactDOM.findDOMNode(this);
            elt.className = classNames(elt.className, 'is-invalid');
        }
    };
    Textfield.prototype.render = function () {
        var _a = this.props, className = _a.className, inputClassName = _a.inputClassName, inputRef = _a.inputRef, onFocus = _a.onFocus, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, onClick = _a.onClick, error = _a.error, expandable = _a.expandable, expandableIcon = _a.expandableIcon, name = _a.name, floatingLabel = _a.floatingLabel, label = _a.label, maxRows = _a.maxRows, onChange = _a.onChange, readOnly = _a.readOnly, disabled = _a.disabled, maxLength = _a.maxLength, rows = _a.rows, style = _a.style, value = _a.value, valueLink = _a.valueLink, id = _a.id, pattern = _a.pattern, required = _a.required, error = _a.error, isPassword = _a.isPassword;
        var hasRows = !!rows;
        var inputId = 'textfield-' + (label || id).replace(/[^a-z0-9]/gi, '');
        var inputTag = hasRows || maxRows > 1 ? 'textarea' : 'input';
        var input = React.createElement(inputTag, {
            className: classNames('mdl-textfield__input', inputClassName),
            id: inputId,
            key: inputId,
            ref: inputRef,
            value: value,
            name: name,
            pattern: pattern,
            error: error,
            required: required,
            valueLink: valueLink,
            readOnly: readOnly,
            disabled: disabled,
            maxLength: maxLength,
            rows: rows,
            onChange: valueLink ? null : this._handleChange,
            onClick: onClick,
            onFocus: onFocus,
            onBlur: onBlur,
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp,
            type: isPassword ? 'password' : 'text'
        });
        var errorMessage = (this.input && this.input.value) ? error : '*';
        var inputAndLabelError = [
            input,
            React.createElement("label", {key: "label", className: "mdl-textfield__label", htmlFor: inputId}, label),
            error || required ? (React.createElement("span", {key: "error", className: "mdl-textfield__error"}, errorMessage)) : null
        ];
        var containerClasses = classNames('mdl-textfield mdl-js-textfield', {
            'mdl-textfield--floating-label': floatingLabel,
            'mdl-textfield--expandable': expandable
        }, className);
        var field;
        if (expandable) {
            field = React.createElement('div', { className: 'mdl-textfield__expandable-holder' }, inputAndLabelError);
        }
        else {
            field = inputAndLabelError;
        }
        return (React.createElement("div", {className: containerClasses, style: style}, expandable ? (React.createElement("label", {className: "mdl-button mdl-js-button mdl-button--icon", htmlFor: inputId}, React.createElement("i", {className: "material-icons"}, expandableIcon))) : null, field));
    };
    return Textfield;
}(react_component_1.ReactComponentBase));
exports.Textfield = Textfield;
var Selectfield = (function (_super) {
    __extends(Selectfield, _super);
    function Selectfield() {
        _super.apply(this, arguments);
    }
    Selectfield.prototype.componentDidUpdate = function (prevProps) {
        if (!this.node) {
            var node = ReactDOM.findDOMNode(this);
            this.node = node.MaterialSelectfield;
            this.node.checkDirty();
            this.node.checkValidity();
        }
        if (this.props.required !== prevProps.required) {
            this.node.checkValidity();
        }
        if (this.props.value !== prevProps.value) {
            this.node.checkDirty();
        }
        if (prevProps.valueLink) {
            if (this.props.valueLink.value !== prevProps.valueLink.value) {
                this.node.checkDirty();
            }
        }
        if (this.props.disabled !== prevProps.disabled) {
            this.node.checkDisabled();
        }
        if (this.props.error) {
            // At every re-render, mdl will set 'is-invalid' class according to the 'pattern' props validity
            // If we want to force the error display, we have to override mdl 'is-invalid' value.
            var elt = ReactDOM.findDOMNode(this);
            elt.className = classNames(elt.className, 'is-invalid');
        }
    };
    Selectfield.prototype.render = function () {
        var _a = this.props, className = _a.className, inputClassName = _a.inputClassName, value = _a.value, valueLink = _a.valueLink, id = _a.id, label = _a.label, floatingLabel = _a.floatingLabel, required = _a.required, error = _a.error, onChange = _a.onChange;
        var inputId = 'selectfield-' + (label || id).replace(/[^a-z0-9]/gi, '');
        var inputTag = 'select';
        var input = React.createElement(inputTag, {
            className: classNames('mdl-selectfield__select', inputClassName),
            id: inputId,
            key: inputId,
            value: value,
            error: error,
            required: required,
            valueLink: valueLink,
            onChange: onChange
        }, this.props.children);
        var inputAndLabelError = [
            input,
            React.createElement("label", {key: "label", className: "mdl-selectfield__label", htmlFor: inputId}, label),
            error ? (React.createElement("span", {key: "error", className: "mdl-selectfield__error"}, error)) : null
        ];
        var containerClasses = classNames('mdl-selectfield mdl-js-selectfield', {
            'mdl-selectfield--floating-label': floatingLabel
        }, className);
        var field;
        field = inputAndLabelError;
        return (React.createElement("div", {className: containerClasses}, field));
    };
    return Selectfield;
}(react_component_1.ReactComponentBase));
exports.Selectfield = Selectfield;
//# sourceMappingURL=textfield.js.map