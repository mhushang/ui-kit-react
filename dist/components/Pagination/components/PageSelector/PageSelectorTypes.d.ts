import { PaginationLocalizationType } from '../../PaginationTypes';
export interface IPageSelectorProps {
    totalPages: number;
    totalItems: number;
    localization: PaginationLocalizationType;
    onChange: (page: number, limit: number) => void;
    currentPage: number;
    limit: number;
    ariaLabel: string | null;
}
