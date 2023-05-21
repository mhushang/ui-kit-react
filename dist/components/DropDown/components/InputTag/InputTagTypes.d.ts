import { IDropDownProps } from '../../DropDownTypes';
import { IOption } from '../Option/OptionTypes';
import { IOptionsTreeItem } from '../OptionTree/OptionTreeTypes';
export interface IInputTagProps extends Partial<IDropDownProps> {
    selectedItems: string[];
    setFilteredOptions: (filteredOptions: IOption[] | IOptionsTreeItem[]) => void;
    isOpen: boolean;
}
