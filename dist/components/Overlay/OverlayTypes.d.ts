import React from 'react';
import { OVERLAY_PLACEMENT_TYPE } from './OverlayConstants';
export interface IOverlayProps {
    isOpen: boolean;
    children: React.ReactNode;
    closable?: boolean;
    escClose?: boolean;
    width?: number | string;
    height?: number | string;
    onClose?: () => void;
    placement?: OVERLAY_PLACEMENT_TYPE.top | OVERLAY_PLACEMENT_TYPE.right | OVERLAY_PLACEMENT_TYPE.bottom | OVERLAY_PLACEMENT_TYPE.left;
    footer?: React.ReactNode;
    className?: string;
}
