import { STATUS_COLOR } from '../Status/StatusConstants';
import { IStatusProps } from '../Status/StatusTypes';
export interface IDropDownStatusProps extends Partial<IStatusProps> {
    color?: keyof typeof STATUS_COLOR;
    options?: IDropDownStatusOption[];
    value?: string | number;
    onChange?: (selectedOption: IDropDownStatusOption) => void;
}
export interface IDropDownStatusOption {
    value: string | number;
    label: string;
}
