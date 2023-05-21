import { ReactElement, ChangeEvent, KeyboardEvent, InputHTMLAttributes } from 'react';
import { INPUT_TYPE } from './InputConstants';
export interface IInput {
    readOnly?: boolean;
    placeholder: string | null;
    error: boolean;
    errorText: string | null;
    disabled: boolean;
    bigLabel: string | null;
    smallLabel: string | null;
    maxLength: number;
    width: number;
    value: string | number;
    type: INPUT_TYPE.text | INPUT_TYPE.number | INPUT_TYPE.password;
    icon: ReactElement;
    firstIconButton: IIconButtonProps;
    secondIconButton: IIconButtonProps;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: ChangeEvent<HTMLInputElement>) => void;
    handleKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
    name: string;
    styles?: object;
    id: string;
}
export interface IIconButtonProps {
    icon: ReactElement;
    ariaLabel: string | null;
    disabled?: boolean;
    handleClick: (...args: any) => void;
}
export interface IInputProps extends Partial<IInput> {
    ariaLabel: string | null;
    nativeProps?: InputHTMLAttributes<HTMLInputElement>;
}
