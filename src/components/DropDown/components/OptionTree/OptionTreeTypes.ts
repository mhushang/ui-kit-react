import { IOption } from '../Option/OptionTypes';

export type TOptionsTreeItemId = string | null;
export interface IOptionsTreeItem extends IOption {
  parent_id: TOptionsTreeItemId;
  id: string;
}

export interface IOptionTreeItemProps extends IOptionTreeProps {
  idsToRender?: string[];
  level?: number;
}

export interface IOptionTreeProps {
  options: IOptionsTreeItem[];
  selectedItems: string[];
  multiple?: boolean;
  isSelected?: boolean;
  handleChange?: (isChecked: boolean, checkBoxValue: string) => void;
  disabled?: boolean;
}
