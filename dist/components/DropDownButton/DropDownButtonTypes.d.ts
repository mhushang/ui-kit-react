import { ReactElement } from 'react';
export interface IDropDownButtonProps {
    options: IDropDownButtonOption[];
    value?: string | number;
    onChange?: (selectedOption: IDropDownButtonOption) => void;
    leftIcon?: ReactElement;
    placeholder?: JSX.Element | string;
    disabled?: boolean;
    className?: string;
    label?: JSX.Element | string;
    labelPrefix?: JSX.Element | string;
}
export interface IDropDownButtonOption {
    value: string | number;
    key: string;
    label: JSX.Element | string;
    disabled?: boolean;
}
