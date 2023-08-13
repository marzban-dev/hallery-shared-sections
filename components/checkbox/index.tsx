"use client";

import { Input } from "@mui/base";
import classNames from "classnames";
import IconCheck from "../icons/check";
import { ICheckboxProps } from "./checkbox.types";

const Checkbox: React.FC<ICheckboxProps> = ({ value, name, active, ...rest }) => {
    const iconContainerClasses = classNames({
        "w-[22px] h-[22px] transition-colors rounded-[8px] border-2 flex justify-center items-center cursor-pointer": 1,
        "bg-blue-500 border-blue-500": active,
        "border-[rgb(60,60,60)] bg-transparent": !active,
    });

    const iconClasses = classNames({
        "h-[14px] transition-colors mt-[3px]": 1,
        "fill-white": active,
        "fill-transparent": !active,
    });

    return (
        <div>
            <label htmlFor={name}>
                <div className={iconContainerClasses}>
                    <IconCheck className={iconClasses} />
                </div>
            </label>
            <Input className="hidden" type="checkbox" value={value} id={name} {...(rest as any)} />
        </div>
    );
};

export default Checkbox;
