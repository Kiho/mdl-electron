"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var react_component_1 = require('./react-component');
var CheckBox = (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox(props) {
        _super.call(this, props);
    }
    CheckBox.prototype.componentDidUpdate = function (prevProps) {
        if (!this.node) {
            this.node = ReactDOM.findDOMNode(this);
            this.node.MaterialCheckbox.checkToggleState();
        }
        if (this.props.disabled !== prevProps.disabled) {
            this.node.MaterialCheckbox.checkDisabled();
        }
    };
    //_handleChange(event) {
    //    this.props.onChange(event);
    //    return true;
    //    // this.setState({ checked: event.target.checked }); // onChange={this._handleChange.bind(this) }
    //}
    CheckBox.prototype.render = function () {
        var _a = this.props, checked = _a.checked, disabled = _a.disabled, id = _a.id, label = _a.label, checkedLink = _a.checkedLink, defaultChecked = _a.defaultChecked, onChange = _a.onChange;
        var labelOrId = (label || id);
        if (!labelOrId) {
            console.warn('Label or ID must be set.');
        }
        var inputId = 'checkbox-' + labelOrId.toString().replace(/\s+/g, '');
        return (React.createElement("label", {className: "mdl-checkbox mdl-js-checkbox", htmlFor: inputId}, React.createElement("input", {type: "checkbox", id: inputId, className: "mdl-checkbox__input", disabled: disabled, checked: checked, onChange: onChange, checkedLink: checkedLink}), label ? React.createElement("span", {className: "mdl-checkbox__label"}, label) : null));
    };
    return CheckBox;
}(react_component_1.ReactComponentBase));
exports.CheckBox = CheckBox;
//# sourceMappingURL=checkbox.js.map