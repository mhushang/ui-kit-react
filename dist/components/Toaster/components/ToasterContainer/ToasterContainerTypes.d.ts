import { TOASTER_PLACEMENT_TYPE } from '../../ToasterConstants';
import { IToaster } from '../../ToasterTypes';
export interface IToasterContainerProps {
    toasters: IToaster[];
    placement: TOASTER_PLACEMENT_TYPE.top | TOASTER_PLACEMENT_TYPE.topLeft | TOASTER_PLACEMENT_TYPE.topRight | TOASTER_PLACEMENT_TYPE.bottom | TOASTER_PLACEMENT_TYPE.bottomLeft | TOASTER_PLACEMENT_TYPE.bottomRight;
    close: (id: string) => void;
}
