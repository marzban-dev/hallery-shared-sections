"use client";

import classNames from "classnames";
import { forwardRef } from "react";
import { IInputProps } from "./input.types";
import MuiInput from "@mui/base/Input";
import IconCircleExclamation from "shared/components/icons/circle-exclamation";

const Input = forwardRef<any, IInputProps>(function Input(
    {
        error,
        errorMessage,
        fullWidth,
        showLabel,
        icon: Icon,
        textBefore,
        inputSize = "md",
        containerClassName,
        variant = "fill",
        topTitle,
        ...rest
    },
    ref
) {
    const containerClasses = classNames(
        {
            "flex justify-center items-center rounded-[10px] border-2 transition-colors text-white px-3 flex justify-between align-center gap-3 relative": 1,
            "border-red-600 hover:border-red-400 focus-within:border-red-400": error,
            "border-[rgb(40,40,40)] hover:border-[rgb(65,65,65)] focus-within:border-[rgb(65,65,65)]": !error,
            "bg-[rgb(30,30,30)]": variant === "fill",
            "123": variant === "stroke",
            "w-full": fullWidth,
            "w-[350px]": !fullWidth,
            "h-[40px]": inputSize === "sm",
            "h-[50px]": inputSize === "md",
        },
        containerClassName
    );

    const iconClasses = classNames({
        "fill-[rgb(150,150,150)]": 1,
        "h-[20px]": inputSize === "sm",
        "h-[22px]": inputSize === "md",
    });

    return (
        <div className="flex w-full flex-col items-start justify-start">
            {topTitle && <div className="py-2 pl-3 text-[18px] text-white">{topTitle}</div>}
            <MuiInput
                slotProps={{
                    root: {
                        className: containerClasses,
                    },
                    input: {
                        className: "w-full border-none bg-transparent outline-none placeholder:text-[rgb(100,100,100)]",
                    },
                }}
                endAdornment={
                    Icon && (
                        <div className="flex h-full items-center justify-center">
                            <Icon className={iconClasses} />
                        </div>
                    )
                }
                startAdornment={
                    textBefore && (
                        <span className="select-none whitespace-nowrap text-[rgb(140,140,140)]">{textBefore}</span>
                    )
                }
                {...rest}
                ref={ref}
            />
            {error && errorMessage && (
                <div className="mt-2 flex items-center justify-start gap-2 px-3 text-[16px] font-medium text-white sm:px-4">
                    <IconCircleExclamation className="h-[16px] fill-red-600 mt-[2px]"/><span>{errorMessage}</span>
                </div>
            )}
        </div>
    );
});

export default Input;
