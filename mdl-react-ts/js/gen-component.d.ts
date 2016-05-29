import * as React from 'react';
import { BasicProps } from './react-component';
export interface ElementProps extends BasicProps {
    element?: JSX.Element;
}
export declare class Component<P extends ElementProps> extends React.Component<P, any> {
    protected defaultClassName: string;
    render(): React.ReactElement<any>;
}
