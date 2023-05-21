export interface IToggle {
    disabled?: boolean;
    error?: boolean;
    defaultValue?: boolean;
    value?: boolean;
    label?: string | null;
    handleClick?: (...args: any) => void;
    handleChange?: (value: boolean) => void;
}
export interface IToggleProps extends IToggle {
    ariaLabel: string | null;
}
