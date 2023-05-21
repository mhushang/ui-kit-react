export interface ITab {
  name: string;
  ariaLabel: string | null;
  key: string;
  notificationCount?: number;
  onClick?: (item: ITab) => void;
  disabled?: boolean;
}

export interface ITabsProps {
  items: Array<ITab>;
  activeKey?: string;
  divider?: boolean;
  onChange?: (item: ITab) => void;
}
