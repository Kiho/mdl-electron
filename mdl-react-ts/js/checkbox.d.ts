import * as React from 'react';
import { ReactComponentBase } from './react-component';
import { IElementProps } from 'mdl-react';
export interface CheckBoxProps extends IElementProps {
    checked?: boolean;
    disabled?: boolean;
    defaultChecked?: boolean;
    label?: string;
    onChange?: React.MouseEventHandler;
    checkedLink?: any;
}
export declare class CheckBox extends ReactComponentBase<CheckBoxProps, any> {
    constructor(props: any);
    node: any;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
