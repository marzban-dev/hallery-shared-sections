import { IItem } from "components/shared/action-menu/components/item/item.types";

export interface IActionMenuButtonProps {
    className?: string;
    options: IItem[];
    iconClassName?: string;
}
