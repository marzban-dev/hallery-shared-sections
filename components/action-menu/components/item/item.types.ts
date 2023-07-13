export interface IItem {
    text: string;
    icon?: any;
    variant?: "default" | "danger" | "info";
    hide?: boolean;
    onClick: () => void;
}

export interface IItemProps extends IItem {
    setIsOpen: (isOpen: boolean) => void;
}
