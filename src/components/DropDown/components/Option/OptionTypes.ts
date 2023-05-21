import { CHECKBOX_VALUE } from '../../../Checkbox';
export interface IOption {
  value: string;
  key: string;
  label?: JSX.Element | string;
  disabled?: boolean;
}

export interface IOptionProps extends IOption {
  multiple?: boolean;
  isSelected?: boolean | CHECKBOX_VALUE.indeterminate;
  handleChange?: (isChecked: boolean, checkBoxValue: string) => void;
}
