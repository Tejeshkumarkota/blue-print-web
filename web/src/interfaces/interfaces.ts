interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: any;//TODO: For any, later it should be string
}
export type { NavItem }