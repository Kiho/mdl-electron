﻿import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import { IFieldProps } from 'mdl-react';

// import { Align, Valign } from './enums';
import { ReactComponentBase } from './react-component';

export interface IMaterialField {
    checkDirty: Function;
    checkValidity: Function;
    checkDisabled: Function;
}

export interface SelectfieldProps extends IFieldProps {
    inputClassName?: string;
    error?: string;
    floatingLabel?: boolean;
    valueLink?: any;
    ripple?: boolean;
    inputRef?: string;
    onFocus?: Function;
    onBlur?: Function;
    onKeyDown?: Function;
    onKeyUp?: Function;
}

export interface TextfieldProps extends SelectfieldProps {
    expandable?: boolean;
    expandableIcon?: string;
    maxRows?: number;
    pattern?: string;
    rows?: number;
    maxLength?: number;
    isPassword?: boolean;
}

export class Textfield extends ReactComponentBase<TextfieldProps, any> {
    node: IMaterialField;

    input: HTMLInputElement;

    componentDidUpdate(prevProps) {
        if (!this.node) {
            let node = ReactDOM.findDOMNode(this) as any;
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
            let elt = ReactDOM.findDOMNode(this);
            elt.className = classNames(elt.className, 'is-invalid');
        }        
    }

    _handleChange = (e) => {
        this.props.onChange(e);
    }

    render() {
        var { className, inputClassName,
            inputRef, onFocus, onBlur, onKeyDown, onKeyUp, onClick,
            error, expandable, expandableIcon, name,
            floatingLabel, label, maxRows, onChange, readOnly, disabled, maxLength,
            rows, style, value, valueLink, id, pattern, required, error, isPassword } = this.props;

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

        let errorMessage = (this.input && this.input.value) ? error : '*';
        var inputAndLabelError = [
            input,
            <label key="label" className="mdl-textfield__label" htmlFor={inputId}>{label}</label>,
            error || required ? (
                <span key="error" className="mdl-textfield__error">{errorMessage}</span>
            ) : null
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

        return (
            <div className={containerClasses} style={style}>
                {expandable ? (
                    <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor={inputId}>
                        <i className="material-icons">{expandableIcon}</i>
                        </label>
                ) : null}
                {field}
                </div>
        );
    }
}

export class Selectfield extends ReactComponentBase<SelectfieldProps, any> {
    node: IMaterialField

    componentDidUpdate(prevProps) {
        if (!this.node) {
            let node = ReactDOM.findDOMNode(this) as any;
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
    }

    render() {
        var {
            className, inputClassName, value, valueLink, id, label,
            floatingLabel, required, error, onChange
        } = this.props;

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
            <label key="label" className="mdl-selectfield__label" htmlFor={inputId}>{label}</label>,
            error ? (
                <span key="error" className="mdl-selectfield__error">{error}</span>
            ) : null
        ];

        var containerClasses = classNames('mdl-selectfield mdl-js-selectfield', {
            'mdl-selectfield--floating-label': floatingLabel
        }, className);

        var field;
        field = inputAndLabelError;

        return (
            <div className={containerClasses}>
                    {field}
                </div>
        );
    }
}
