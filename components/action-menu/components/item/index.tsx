import { MenuItem } from "@mui/base";
import { IItemProps } from "./item.types";
import classNames from "classnames";

const Item: React.FC<IItemProps> = ({ text, onClick, setIsOpen, icon: Icon, hide, variant = "default" }) => {
    const containerClasses = classNames({
        "flex items-center justify-start gap-3 px-3 py-2 rounded-[8px] transition-colors w-full": 1,
        "hover:bg-[rgb(40,40,40)] fill-[rgb(120,120,120)]": variant === "default",
        "hover:bg-red-500 hover:bg-opacity-[0.15] fill-red-500": variant === "danger",
        "hover:bg-blue-500 hover:bg-opacity-[0.15] fill-blue-500": variant === "info",
        hidden: hide,
    });

    return (
        <MenuItem<"button">
            className={containerClasses}
            slots={{ root: "button" }}
            onClick={() => {
                setIsOpen(false);
                onClick();
            }}
        >
            <div className="w-[25px]">
                <Icon className="h-[20px] fill-inherit" />
            </div>
            <span className="text-white">{text}</span>
        </MenuItem>
    );
};

export default Item;
