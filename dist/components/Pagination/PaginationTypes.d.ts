import { PAGINATION_DEFAULT_LOCALIZATION, PAGINATION_LIMITS } from "./PaginationConstants";
import { PLACEMENT_TYPE } from "../Popover";
export interface IPaginationProps {
    totalItems: number;
    onChange: (page: number, limit: number) => void;
    ariaLabel: string | null;
    currentPage?: number;
    currentLimit?: (typeof PAGINATION_LIMITS)[number];
    rangeDropDown?: boolean;
    rangeDropDownPlacement?: PLACEMENT_TYPE.bottom | PLACEMENT_TYPE.top;
    rangeLabel?: boolean;
    goToPage?: boolean;
    localization?: PaginationLocalizationType;
}
export type PaginationLocalizationType = {
    [K in keyof typeof PAGINATION_DEFAULT_LOCALIZATION]?: string;
};
