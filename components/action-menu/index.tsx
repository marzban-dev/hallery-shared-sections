"use client";

import Menu from "@mui/base/Menu";
import { useMemo } from "react";
import { IActionMenuProps } from "./action-menu.types";
import Item from "./components/item";

const ActionMenu: React.FC<IActionMenuProps> = ({ isOpen, setIsOpen, anchorEl, items }) => {
    const renderItems = useMemo(() => {
        return items.map((item, index) => <Item {...item} setIsOpen={setIsOpen} key={index} />);
    }, [items])

    return (
        <Menu
            className="z-[999] px-4"
            open={isOpen}
            anchorEl={anchorEl}
        >
            <div className="rounded-[8px] border border-[rgb(60,60,60)] bg-[rgba(30,30,30,0.5)] backdrop-blur-2xl px-2 py-2 shadow-xl">
                <div className="right-20 flex flex-col items-start justify-start gap-1">
                    {renderItems}
                </div>
            </div>
        </Menu>
    );
};

export default ActionMenu;
