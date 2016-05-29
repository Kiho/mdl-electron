import * as React from 'react';
import { ReactComponentBase } from './react-component';
export interface TabProps extends React.Props<any> {
    isActive?: boolean;
    tabId?: number;
    className?: string;
    style?: any;
    onTabClick?: Function;
}
export interface TabsProps extends React.Props<any> {
    isActive?: boolean;
    activeTab: number;
    className?: string;
    ripple: boolean;
    onChange: Function;
}
export declare class Tab extends React.Component<TabProps, any> {
    static defaultProps: {
        style: {};
    };
    handleClick(e: any): void;
    render(): JSX.Element;
}
export declare class Tabs extends ReactComponentBase<TabsProps, any> {
    constructor(props: any);
    static propTypes: {
        children: React.Requireable<any>;
    };
    static defaultProps: {
        activeTab: number;
        ripple: boolean;
    };
    handleClickTab: (tabId: any) => void;
    render(): JSX.Element;
}
