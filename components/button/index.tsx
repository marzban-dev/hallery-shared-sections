import classNames from "classnames";
import { IButtonProps } from "./button.types";
import { Button as MuiButton } from "@mui/base";
import Spinner from "components/shared/spinner";

const Button: React.FC<IButtonProps> = ({
    gradient,
    fullWidth,
    variant = "filled",
    circle,
    rounded,
    shadow,
    size = "md",
    icon: Icon,
    loading,
    iconClassName,
    ...rest
}) => {
    const containerClasses = classNames(
        {
            "group flex justify-center items-center gap-2 transition-colors transition-[filter] [line-height:0]": 1,

            "rounded-[12px]": !rounded,
            "rounded-[35px]": rounded,

            "px-6 min-h-[45px] text-[20px]": !circle && size === "md",
            "px-4 min-h-[34px] text-[16px]": !circle && size === "sm",
            "px-3 min-h-[28px] text-[14px]": !circle && size === "xs",
            "rounded-full min-w-[50px] min-h-[50px] text-[20px]": !rounded && circle && size === "md",
            "rounded-full min-w-[42px] min-h-[42px] text-[16px]": !rounded && circle && size === "sm",
            "rounded-full min-w-[28px] min-h-[28px] text-[14px]": !rounded && circle && size === "xs",

            "text-white": variant === "filled",
            "bg-gradient-to-tr from-blue-600 to-blue-300": variant === "filled" && gradient,
            "bg-blue-500 hover:bg-blue-400": variant === "filled" && !gradient,
            "bg-transparent border-2 border-blue-500 text-blue-500 hover:border-blue-400 hover:text-white hover:bg-blue-400":
                variant === "outlined",

            "shadow-none": !shadow,
            "shadow-md shadow-[rgba(0,0,0,0.4)]": shadow,

            "grayscale-0": !rest.disabled,
            "grayscale-[1]": rest.disabled,

            "w-full": !circle && fullWidth,
        },
        rest.className
    );

    const iconClasses = classNames(
        {
            "h-[18px]": size === "md",
            "h-[16px]": size === "sm",
            "h-[12px]": size === "xs",
            "fill-white": variant === "filled",
            "fill-blue-500 group-hover:fill-white transition-colors": variant === "outlined",
        },
        iconClassName
    );

    return (
        <MuiButton slotProps={{ root: { className: containerClasses } }} {...rest}>
            {loading ? (
                <Spinner size={25} iconClassName={iconClasses} />
            ) : (
                <>
                    {rest.children} {Icon && <Icon className={iconClasses + " font"} />}
                </>
            )}
        </MuiButton>
    );
};

export default Button;
