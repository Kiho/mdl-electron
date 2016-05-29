import { ReactComponentBase } from './react-component';
export interface ISpinnerProps {
    isActive?: boolean;
    singleColor?: boolean;
    className?: string;
}
export declare class Spinner extends ReactComponentBase<ISpinnerProps, any> {
    render(): JSX.Element;
}
