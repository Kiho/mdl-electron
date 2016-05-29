import { IFieldProps } from 'mdl-react';
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
export declare class Textfield extends ReactComponentBase<TextfieldProps, any> {
    node: IMaterialField;
    input: HTMLInputElement;
    componentDidUpdate(prevProps: any): void;
    _handleChange: (e: any) => void;
    render(): JSX.Element;
}
export declare class Selectfield extends ReactComponentBase<SelectfieldProps, any> {
    node: IMaterialField;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
