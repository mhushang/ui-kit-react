import { ReactNode } from 'react';
export interface ITextProps {
    children: ReactNode;
    display?: boolean;
    size?: number;
    bold?: boolean;
    underline?: boolean;
    uppercase?: boolean;
    color?: `#${string}`;
    spacing?: number;
    className?: string;
}
