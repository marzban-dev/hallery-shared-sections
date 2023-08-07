import { useMemo } from "react";
import SelectOption from "./components/select-option";
import { ISelectMenuProps } from "./select-menu.types";
import classNames from "classnames";
import IconCaretDownSolid from "../icons/caret-down-solid";

const SelectMenu: React.FC<ISelectMenuProps> = ({
    items,
    containerClassName,
    fullWidth,
    icon: Icon,
    inputSize = "md",
    variant = "fill",
    topTitle,
    ...rest
}) => {
    const renderOptions = useMemo(() => {
        return items.map((item) => <SelectOption {...item} key={item.value} />);
    }, [items]);

    const containerClasses = classNames(
        {
            "relative flex rounded-[12px] border-2 border-[rgb(40,40,40)] bg-[rgb(30,30,30)] text-white outline-none transition-colors focus-within:border-[rgb(60,60,60)] hover:border-[rgb(50,50,50)]": 1,
            "bg-[rgb(30,30,30)]": variant === "fill",
            "123": variant === "stroke",
            "w-full": fullWidth,
            "w-[350px]": !fullWidth,
            "h-[40px]": inputSize === "sm",
            "h-[50px]": inputSize === "md",
        },
        containerClassName
    );

    const selectInputClasses = classNames({
        "scrollbar-custom z-[20] h-full w-full appearance-none bg-transparent px-3 outline-none": 1,
        "ml-6": Icon,
    });

    const iconClasses = classNames({
        "fill-[rgb(150,150,150)]": 1,
        "h-[20px]": inputSize === "sm",
        "h-[22px]": inputSize === "md",
    });

    return (
        <div className="flex w-full flex-col items-start justify-start">
            {topTitle && <div className="py-2 pl-3 text-[18px] text-white">{topTitle}</div>}
            <div className={containerClasses}>
                {Icon && (
                    <div className="absolute left-[12px] flex h-full items-center justify-center">
                        <Icon className={iconClasses} />
                    </div>
                )}
                <select {...rest} className={selectInputClasses}>
                    {renderOptions}
                </select>
                <div className="absolute right-[12px] flex h-full items-center justify-center">
                    <IconCaretDownSolid className="h-[20px] fill-[rgb(150,150,150)]" />
                </div>
            </div>
        </div>
    );
};
export default SelectMenu;
