import classNames from "classnames";
import { IButtonProps } from "./button.types";
import { Button as MuiButton } from "@mui/base";
import Spinner from "shared/components/spinner";

const Button: React.FC<IButtonProps> = ({
    variant = "filled",
    size = "md",
    color = "default",
    gradient,
    fullWidth,
    circle,
    rounded,
    shadow,
    icon: Icon,
    loading,
    iconClassName,
    disabled,
    ...rest
}) => {
    const colorClasses = {
        gradient: classNames({
            "bg-gradient-to-r": 1,
            "from-blue-600 to-blue-300": color === "default",
            "from-red-600 to-red-300": color === "danger",
        }),
        filled: classNames({
            "bg-blue-500 hover:bg-blue-400": color === "default",
            "bg-red-500 hover:bg-red-400": color === "danger",
        }),
        outlined: classNames({
            "bg-transparent border-2 hover:text-white": 1,
            "border-blue-500 text-blue-500 hover:border-blue-400 hover:bg-blue-400": color === "default",
            "border-red-500 text-red-500 hover:border-red-400 hover:bg-red-400": color === "danger",
        }),
        iconOutlined: classNames({
            "group-hover:fill-white transition-colors": 1,
            "fill-blue-500": color === "default",
            "fill-red-500": color === "default",
        }),
    };

    const containerClasses = classNames(
        {
            "group flex justify-center items-center gap-2 transition-colors transition-[filter] [line-height:0] outline-1 outline-transparent": 1,

            "rounded-[12px]": !rounded,
            "rounded-[35px]": rounded,

            "px-6 min-h-[45px] text-[20px]": !circle && size === "md",
            "px-4 min-h-[34px] text-[16px]": !circle && size === "sm",
            "px-3 min-h-[28px] text-[14px]": !circle && size === "xs",
            "rounded-full min-w-[50px] min-h-[50px] text-[20px]": !rounded && circle && size === "md",
            "rounded-full min-w-[42px] min-h-[42px] text-[16px]": !rounded && circle && size === "sm",
            "rounded-full min-w-[28px] min-h-[28px] text-[14px]": !rounded && circle && size === "xs",

            "text-white": variant === "filled",
            [colorClasses.gradient]: variant === "filled" && gradient,
            [colorClasses.filled]: variant === "filled" && !gradient,
            [colorClasses.outlined]: variant === "outlined",

            "shadow-none": !shadow,
            "shadow-md shadow-[rgba(0,0,0,0.4)]": shadow,

            "grayscale-0": !disabled,
            "grayscale-[1]": disabled,

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
            [colorClasses.iconOutlined]: variant === "outlined",
        },
        iconClassName
    );

    return (
        <MuiButton slotProps={{ root: { className: containerClasses } }} disabled={disabled || loading} {...rest}>
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
