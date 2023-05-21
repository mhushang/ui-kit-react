import { PaginationLocalizationType } from '../../PaginationTypes';
export interface IGoToPageProps {
    totalPages: number;
    localization: PaginationLocalizationType;
    onChange: (page: number, limit: number) => void;
    limit: number;
    ariaLabel: string | null;
}
