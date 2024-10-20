import { LucideIcon } from 'lucide-react';

export interface MenuItem {
    icon: LucideIcon;
    label: string;
}

export interface SideBarProps {
    onItemClick: (item: string) => void;
    activePage: string;
}