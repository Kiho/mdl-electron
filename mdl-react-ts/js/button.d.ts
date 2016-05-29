import * as React from 'react';
import { IButtonProps } from 'mdl-react';
import { ReactComponentBase } from './react-component';
export declare class Button extends ReactComponentBase<IButtonProps, any> {
    static displayName: string;
    buttonClasses: string;
    onClick: React.MouseEventHandler;
    render(): React.DOMElement<{}, Element>;
}
export declare class FABButton extends Button {
    constructor(props: any);
}
