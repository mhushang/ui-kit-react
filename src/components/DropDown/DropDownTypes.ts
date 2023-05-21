import { DROPDOWN_DEFAULT_LOCALIZATION } from './DropDownConstants';
import { IOption } from './components/Option/OptionTypes';
import { IOptionsTreeItem } from './components/OptionTree/OptionTreeTypes';

export interface IDropDownProps {
  options: IOption[] | IOptionsTreeItem[];
  searchIsActive?: boolean;
  showClearSelectedButton?: boolean;
  showSelectedTags?: boolean;
  onClearSelected?: () => void;
  value?: string[] | string;
  multiple?: boolean;
  tree?: boolean;
  disabled?: boolean;
  onChange: (selected: Array<string> | string) => void;
  placeholder: string | null;
  error?: boolean;
  localization?: DropDownLocalizationType;
  ariaLabel: string | null;
  errorText?: string;
  isLoading?: boolean;
}

export type DropDownLocalizationType = {
  [K in keyof typeof DROPDOWN_DEFAULT_LOCALIZATION]?: string;
};
