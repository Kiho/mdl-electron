import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

export const basicClassCreator = (displayName, defaultClassName, element = 'div') => {
    const fn = (props) => {
        const { className, children } = props;

        return React.createElement(element, {
            className: classNames(defaultClassName, className)
        }, children);
    };

    (fn as any).displayName = displayName;

    return fn;
};
