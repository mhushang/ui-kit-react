import React from 'react';
import { PLACEMENT_TYPE, TRIGGER_TYPE } from './PopoverConstants';
export interface IPopoverProps {
    placement: PLACEMENT_TYPE.top | PLACEMENT_TYPE.right | PLACEMENT_TYPE.bottom | PLACEMENT_TYPE.left | PLACEMENT_TYPE.topStart | PLACEMENT_TYPE.topEnd | PLACEMENT_TYPE.leftStart | PLACEMENT_TYPE.leftEnd | PLACEMENT_TYPE.rightStart | PLACEMENT_TYPE.rightEnd | PLACEMENT_TYPE.bottomStart | PLACEMENT_TYPE.bottomEnd | PLACEMENT_TYPE.auto | PLACEMENT_TYPE.autoStart | PLACEMENT_TYPE.autoEnd;
    trigger?: TRIGGER_TYPE.click | TRIGGER_TYPE.hover;
    referenceNode: React.ReactElement;
    children: React.ReactNode;
    arrow?: boolean;
    wrapperClassName?: string;
    isOpen?: boolean;
    onChange?: (isOpen: boolean) => void;
    fullRefWidth?: boolean;
}
