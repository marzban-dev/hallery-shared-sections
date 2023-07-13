"use client";

import { Input } from "@mui/base";
import { IRadioButtonProps } from "./radio-button.types";
import IconCheck from "components/shared/icons/check";
import classNames from "classnames";

const RadioButton: React.FC<IRadioButtonProps> = ({ value, name, title, active, onChange }) => {
    const containerClasses = classNames({
        "flex items-center justify-start gap-2 cursor-pointer py-[6px] px-2 rounded-[100px]": 1,
        "bg-[rgb(50,50,50)]": active,
        "bg-transparent": !active,
    });

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
        <div>
            <label htmlFor={value} className={containerClasses}>
                <div className={iconContainerClasses}>
                    <IconCheck className={iconClasses} />
                </div>
                <span className="pr-2 text-white">{title}</span>
            </label>
            <Input
                className="hidden"
                type="radio"
                value={value}
                id={value}
                name={name}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default RadioButton;
