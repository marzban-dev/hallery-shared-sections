"use client";

import { Button } from "@mui/base";
import IconCheck from "shared/components/icons/check";
import classNames from "classnames";

type RadioButton = {
    value: string | number;
    title: string;
    active: boolean;
    className?: string;
    onClick: (value: string | number) => void;
};

const RadioButton = ({ value, title, active, className, onClick }: RadioButton) => {
    const containerClasses = classNames(
        {
            "flex items-center justify-start gap-2 cursor-pointer py-[6px] px-2 rounded-[100px] hover:bg-[rgb(30,30,30)] active:scale-[0.85] transition-all": 1,
            "bg-[rgb(50,50,50)]": active,
            "bg-transparent": !active,
        },
        className
    );

    const iconContainerClasses = classNames({
        "min-w-[22px] min-h-[22px] transition-colors rounded-full border-2 flex justify-center items-center": 1,
        "bg-blue-500 border-blue-500": active,
        "border-[rgb(60,60,60)] bg-transparent": !active,
    });

    const iconClasses = classNames({
        "h-[14px] transition-colors mt-[3px]": 1,
        "fill-white": active,
        "fill-transparent": !active,
    });

    return (
        <Button className={containerClasses} onClick={() => onClick(value)}>
            <div className={iconContainerClasses}>
                <IconCheck className={iconClasses} />
            </div>
            <span className="pr-2 text-white">{title}</span>
        </Button>
    );
};

export default RadioButton;
