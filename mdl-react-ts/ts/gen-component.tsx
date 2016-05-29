import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

import { BasicProps, BasicComponent } from './react-component';

export interface ElementProps extends BasicProps {
    element?: JSX.Element
}

export class Component<P extends ElementProps> extends React.Component<P, any> {
    protected defaultClassName = '';

    render() {
        let { element, className, disabled, onClick, children } = this.props;
        return React.cloneElement(element, {
            className: classNames(this.defaultClassName, className),
            disabled: disabled,
            onClick: onClick
        }, children);
    }
}

