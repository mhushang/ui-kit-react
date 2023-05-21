import { PaginationLocalizationType } from '../../PaginationTypes';
import { PLACEMENT_TYPE } from '../../../Popover';

export interface IRangeLimitsProps {
  currentPage: number;
  totalItems: number;
  rangeLabel: boolean;
  limit: number;
  localization: PaginationLocalizationType;
  changeLimit: (limit: number) => void;
  ariaLabel: string | null;
  rangeDropDownPlacement?: PLACEMENT_TYPE.bottom | PLACEMENT_TYPE.top;
}
