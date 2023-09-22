"use client";

import classNames from "classnames";
import { forwardRef, useState } from "react";
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
    const [isFocused, setIsFocused] = useState(false);

    const containerClasses = classNames(
        {
            "flex justify-center items-center rounded-[10px] border transition-colors text-white px-3 flex justify-between align-center gap-3 relative": 1,
            "border-red-600": error,
            "border-[rgb(40,40,40)] focus-within:border-blue-400": !error,
            "hover:border-[rgb(100,100,100)]": !error && !isFocused,
            "bg-[rgb(30,30,30)]": variant === "fill",
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
                    <>
                        {error && <IconCircleExclamation className="mt-[2px] h-[18px] fill-red-600" />}
                        {textBefore && (
                            <span className="select-none whitespace-nowrap text-[rgb(140,140,140)]">{textBefore}</span>
                        )}
                    </>
                }
                {...rest}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                ref={ref}
            />
            {error && errorMessage && (
                <div className="mt-2 flex items-center justify-start gap-2 px-3 text-[16px] font-medium text-red-400 sm:px-4">
                    <span>{errorMessage}</span>
                </div>
            )}
        </div>
    );
});

export default Input;
