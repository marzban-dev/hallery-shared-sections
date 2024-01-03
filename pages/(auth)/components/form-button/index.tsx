"use client";

import classNames from "classnames";
import Spinner from "@/shared/components/spinner";
import { AnimatePresence, Variants, m as motion, useAnimation } from "framer-motion";
import CheckIcon from "public/assets/icon/circle-check.svg";
import XIcon from "public/assets/icon/circle-xmark.svg";
import { useEffect, useState } from "react";
import { IFormButtonProps } from "./form-button.types";

const FormButton: React.FC<IFormButtonProps> = ({ formState, disabled, children }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const animationControls = useAnimation();

    useEffect(() => {
        setTimeout(() => {
            if (formState === "success") animationControls.start("show");
            if (formState === "error") animationControls.start("show-and-hide");
        }, 400);
    }, [formState]);

    const buttonClasses = classNames({
        "relative overflow-hidden w-full h-[50px] rounded-[18px] mt-4 text-white font-semibold form-submit-button bg-form-background-primary hover:bg-form-background-lighter transition-colors flex justify-center items-center": 1,
        "cursor-default": disabled || isAnimating,
    });

    const overlayClasses = classNames({
        "absolute w-[500px] h-[500px] rounded-full flex justify-center items-center scale-0": 1,
        "bg-red-500": formState === "error",
        "bg-green-600": formState === "success",
    });

    const overlayIconClasses = classNames({
        "w-[25px]": 1,
        "fill-red-100": formState === "error",
        "fill-green-100": formState === "success",
    });

    const textVariants: Variants = {
        hide: {
            opacity: 0,
            transition: {
                duration: 0.1,
            },
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },
    };

    const overlayVariants: Variants = {
        "show-and-hide": {
            scale: [0, 1, 1, 1, 1, 1, 1, 0],
            transition: { duration: 2 },
        },
        show: {
            scale: [0, 1],
            transition: { duration: 0.5 },
        },
    };

    const overlayIconVariants: Variants = {
        "show-and-hide": { opacity: 1, transition: { duration: 0.2 } },
        show: { opacity: 1, transition: { duration: 0.2 } },
    };

    return (
        <button type="submit" className={buttonClasses} disabled={disabled || isAnimating}>
            <motion.div
                variants={overlayVariants}
                animate={animationControls}
                className={overlayClasses}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <motion.div variants={overlayIconVariants}>
                    {formState === "success" && <CheckIcon className={overlayIconClasses} />}
                    {formState === "error" && <XIcon className={overlayIconClasses} />}
                </motion.div>
            </motion.div>

            <AnimatePresence mode="wait">
                {formState === "loading" && (
                    <motion.div variants={textVariants} initial="hide" animate="show" exit="hide" key={1}>
                        <Spinner size={30} />
                    </motion.div>
                )}
                {formState === "idle" && (
                    <motion.div variants={textVariants} initial="hide" animate="show" exit="hide" key={2}>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
};

export default FormButton;
