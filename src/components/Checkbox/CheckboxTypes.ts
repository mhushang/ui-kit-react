import { CHECKBOX_VALUE } from './CheckboxConstants';

export interface ICheckbox {
  disabled: boolean;
  value: boolean | CHECKBOX_VALUE.indeterminate;
  label: string | React.ReactNode;
  className: string;
  onChange: (isChecked: boolean, event?: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  name: string;
}

export interface ICheckboxProps extends Partial<ICheckbox> {
  children?: React.ReactNode;
  ariaLabel: string | null;
}
