"use client";

import Menu from "@mui/base/Menu";
import { useMemo } from "react";
import { IActionMenuProps } from "./action-menu.types";
import Item from "./components/item";

const ActionMenu: React.FC<IActionMenuProps> = ({ isOpen, setIsOpen, anchorEl, items }) => {
    const renderItems = useMemo(() => {
        return items.map((item, index) => <Item {...item} setIsOpen={setIsOpen} key={index} />);
    }, [items]);

    return (
        <Menu
            className="z-[999] right-[100px] rounded-[8px] border border-[rgb(60,60,60)] bg-[rgb(30,30,30)] px-2 py-2 shadow-xl"
            open={isOpen}
            slotProps={{
                listbox: {
                    className: "flex flex-col items-start justify-start gap-1",
                },
            }}
            anchorEl={anchorEl}
        >
            {renderItems}
        </Menu>
    );
};

export default ActionMenu;
