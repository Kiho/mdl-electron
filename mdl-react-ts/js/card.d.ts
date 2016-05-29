import * as React from 'react';
import { ReactComponentBase } from './react-component';
export interface CardProps extends React.Props<any> {
    style?: any;
    shadow?: number;
    className?: string;
    title?: string;
    height?: number;
    width?: number;
}
export declare class Card extends ReactComponentBase<CardProps, any> {
    displayName: string;
    static defaultProps: {
        style: {};
    };
    render(): JSX.Element;
}
export interface CardTitleProps extends React.Props<any> {
    className?: string;
    expand?: boolean;
}
export declare class CardTitle extends ReactComponentBase<CardTitleProps, any> {
    render(): JSX.Element;
}
