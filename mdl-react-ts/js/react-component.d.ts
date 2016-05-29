import * as React from 'react';
export declare abstract class ReactComponentBase<P, S> extends React.Component<P, S> {
    componentDidMount(): void;
    componentWillUnmount(): void;
}
export interface BasicProps extends React.Props<any> {
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler;
}
export declare class BasicComponent extends React.Component<BasicProps, any> {
    element: string;
    defaultClassName: string;
    render(): React.DOMElement<{}, Element>;
}
export declare function cloneChildren(children: any, props: any): React.DOMElement<any, any>[];
