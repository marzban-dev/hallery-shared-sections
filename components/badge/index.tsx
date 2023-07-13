import classNames from "classnames";
import { IBadgeProps } from "./badge.types";

const Badge: React.FC<IBadgeProps> = ({ id, onSelect, selected, text, icon: Icon, iconSize = 18 }) => {
    const containerClasses = classNames({
        "bg-[rgb(30,30,30)] rounded-[15px] border-2 px-3 h-[36px] transition-colors cursor-pointer flex justify-center items-center gap-2": 1,
        "border-[rgb(40,40,40)]": !selected,
        "border-blue-400": selected,
    });

    const textClasses = classNames({
        "font-semibold transition-colors": 1,
        "text-[rgb(100,100,100)]": !selected,
        "text-blue-400": selected,
    });

    const iconClasses = classNames({
        "fill-[rgb(130,130,130)]": !selected,
        "fill-blue-400": selected,
    });

    return (
        <div className={containerClasses} onClick={() => onSelect(id)} data-testid="badge-container">
            {Icon && (
                <div className="flex items-center justify-center">
                    <Icon className={iconClasses} style={{ height: iconSize }} />
                </div>
            )}
            {text && <span className={textClasses}>{text}</span>}
        </div>
    );
};

export default Badge;
