import React from 'react';
import { TOASTER_PLACEMENT_TYPE, TOASTER_TYPE } from './ToasterConstants';
export type TToasterType = TOASTER_TYPE.success | TOASTER_TYPE.info | TOASTER_TYPE.warning | TOASTER_TYPE.error;
export interface IToasterProviderProps {
    children: React.ReactNode;
    placement: TOASTER_PLACEMENT_TYPE.top | TOASTER_PLACEMENT_TYPE.topLeft | TOASTER_PLACEMENT_TYPE.topRight | TOASTER_PLACEMENT_TYPE.bottom | TOASTER_PLACEMENT_TYPE.bottomLeft | TOASTER_PLACEMENT_TYPE.bottomRight;
}
export interface IToaster {
    text: string | React.ReactNode;
    type: TToasterType;
    id?: string;
    duration?: number;
    autoClose?: boolean;
    icon?: React.ReactNode | boolean;
}
export interface IToasterContext {
    toaster: (toast: IToaster) => string;
    closeToaster: (id: string) => void;
}
export interface IToasterProps extends IToaster {
    onClose?: () => void;
}
