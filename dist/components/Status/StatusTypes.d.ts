import { ReactElement } from 'react';
import { STATUS_COLOR } from './StatusConstants';
export interface IStatusProps {
    children: JSX.Element | string;
    color?: keyof typeof STATUS_COLOR;
    disabled?: boolean;
    highlightBorder?: boolean;
    className?: string;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    isClickable?: boolean;
    onClick?: () => void;
    styles?: object;
}
