declare module 'mdl-react' {
    export interface IElementProps extends React.Props<any> {
        className?: string;
        text?: string;
        id?: string;
        name?: string;
        disabled?: boolean;
        style?: any;
    }

    export interface IFieldProps extends IElementProps {
        label: string;
        format?: string;
        placeholder?: string;
        readOnly?: boolean;
        value?: any;
        required?: boolean;
        onChange?: Function;
        onClick?: React.MouseEventHandler;
    }

    export interface IButtonProps extends IElementProps {
        accent?: boolean;
        colored?: boolean;
        component?: any;
        href?: string;
        primary?: boolean;
        raised?: boolean;
        ripple?: boolean;
        mini?: boolean;
        target?: string;
        onClick?: React.MouseEventHandler;
    }

    export interface IMenuProps extends IElementProps {
        target: string;
        align?: any;
        valign?: any;
        ripple?: boolean;
    }

    export interface IBadgeProps extends React.Props<any> {
        className?: string;
        text?: string | number;
        overlap?: boolean;
        noBackground?: boolean;
    }
}