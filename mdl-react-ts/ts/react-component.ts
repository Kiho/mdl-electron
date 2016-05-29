﻿import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

export abstract class ReactComponentBase<P, S> extends React.Component<P, S> {
    componentDidMount() {
        componentHandler.upgradeElement(ReactDOM.findDOMNode(this));
    }

    componentWillUnmount() {
        componentHandler.downgradeElements(ReactDOM.findDOMNode(this));
    }
}

export interface BasicProps extends React.Props<any> {
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler;
}

export class BasicComponent extends React.Component<BasicProps, any> {
    element = 'div';
    defaultClassName = '';

    render() {
        let { className, disabled, onClick } = this.props;
        return React.createElement(this.element, {
            className: classNames(this.defaultClassName, className),
            disabled: disabled,
            onClick
        }, this.props.children);
    }
}

export function cloneChildren(children, props) {
    return React.Children.map(children, (child: React.DOMElement<any, any>) => {
        var p = typeof props === 'function' ? props(child) : props;
        return React.cloneElement(child, p);
    });
}
