import * as React from 'react';
import { ReactComponentBase } from './react-component';
export interface IAriaProps extends React.Props<any> {
    ariaLive?: string;
    ariaAtomic?: boolean;
    ariaRelevant?: string;
}
export declare class Snackbar extends ReactComponentBase<IAriaProps, any> {
    static defaultProps: {
        ariaLive: string;
        ariaAtomic: boolean;
        ariaRelevant: string;
    };
    render(): JSX.Element;
}
