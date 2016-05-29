import { Align, Valign } from './enums';
import { ReactComponentBase, BasicComponent } from './react-component';
import { IElementProps, IButtonProps, IMenuProps } from 'mdl-react';
export interface IconProps extends IElementProps {
}
export interface IconButtonProps extends IButtonProps {
}
export declare class Icon extends ReactComponentBase<IconProps, any> {
    render(): JSX.Element;
}
export declare class BadgeButton extends ReactComponentBase<IconButtonProps, any> {
    render(): JSX.Element;
}
export declare class IconButton extends ReactComponentBase<IconButtonProps, any> {
    render(): JSX.Element;
}
export declare class MenuItem extends BasicComponent {
    constructor(props: any);
}
export declare class Menu extends ReactComponentBase<IMenuProps, any> {
    static defaultProps: {
        ripple: boolean;
        align: Align;
        valign: Valign;
    };
    render(): JSX.Element;
}
