import React from 'react';
import { BUTTON_TYPE } from './ButtonConstants';
export interface IButtonProps {
    ariaLabel: string | null;
    text?: string | React.ReactElement | null;
    theme?: BUTTON_TYPE.default | BUTTON_TYPE.primaryOrange | BUTTON_TYPE.primaryGrey | BUTTON_TYPE.primaryGreen | BUTTON_TYPE.primaryRed | BUTTON_TYPE.noBorder | BUTTON_TYPE.link | BUTTON_TYPE.hoverUnderline | BUTTON_TYPE.underline;
    error?: boolean;
    disabled?: boolean;
    className?: string;
    leftIcon?: React.ReactElement;
    centralIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    loading?: boolean;
    handleClick?: (...args: any) => void;
    id?: string;
    name?: string;
    tabIndex?: number;
    submit?: boolean;
}
