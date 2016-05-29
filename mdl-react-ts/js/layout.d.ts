import * as React from 'react';
import { ReactComponentBase, BasicComponent } from './react-component';
export interface DrawerProps extends React.Props<any> {
    title?: string;
    className?: string;
}
export interface HeaderRowProps extends DrawerProps {
    location?: string;
}
export interface HeaderTabProps extends DrawerProps {
    ripple?: boolean;
}
export interface HeaderProps extends HeaderRowProps {
    scroll?: boolean;
    transparent?: boolean;
    waterfall?: any;
}
export interface LayoutProps extends React.Props<any> {
    className?: string;
    fixedDrawer?: boolean;
    fixedHeader?: boolean;
    fixedTabs?: boolean;
}
export declare class Spacer extends BasicComponent {
    constructor(props: any);
}
export declare class Content extends BasicComponent {
    constructor(props: any);
}
export declare class Drawer extends ReactComponentBase<DrawerProps, any> {
    render(): JSX.Element;
}
export declare class Navigation extends ReactComponentBase<DrawerProps, any> {
    constructor(props: any);
    render(): JSX.Element;
}
export declare class HeaderRow extends ReactComponentBase<HeaderRowProps, any> {
    render(): JSX.Element;
}
export declare class HeaderTabs extends ReactComponentBase<HeaderTabProps, any> {
    render(): JSX.Element;
}
export declare class Header extends ReactComponentBase<HeaderProps, any> {
    render(): JSX.Element;
}
export declare class Layout extends ReactComponentBase<LayoutProps, any> {
    render(): JSX.Element;
}
