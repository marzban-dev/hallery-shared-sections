import { MenuOwnProps } from "@mui/base";
import { IItem } from "./components/item/item.types";

export interface IActionMenuProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    anchorEl: MenuOwnProps["anchorEl"];
    items: IItem[];
}
