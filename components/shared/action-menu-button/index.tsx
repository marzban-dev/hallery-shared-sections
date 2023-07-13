"use client";

import { Button, ClickAwayListener } from "@mui/base";
import { IActionMenuButtonProps } from "./action-menu-button.types";
import EllipsisVertical from "components/shared/icons/ellipsis-vertical";
import ActionMenu from "components/shared/action-menu";
import { useRef, useState } from "react";
import classNames from "classnames";

const ActionMenuButton: React.FC<IActionMenuButtonProps> = ({ className, iconClassName, options }) => {
    const buttonEl = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const iconClasses = classNames(
        {
            "h-[28px] transition-colors": 1,
            "fill-[rgb(200,200,200)] group-hover:fill-white": !iconClassName,
        },
        iconClassName
    );

    return (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <div>
                <Button
                    className={classNames("group py-2", className)}
                    onClick={() => setIsOpen(!isOpen)}
                    ref={buttonEl}
                >
                    <EllipsisVertical className={iconClasses} />
                </Button>
                <ActionMenu isOpen={isOpen} setIsOpen={setIsOpen} anchorEl={buttonEl.current} items={options} />
            </div>
        </ClickAwayListener>
    );
};

export default ActionMenuButton;
