"use client";

import { m as motion } from "framer-motion";
import { ISpinnerProps } from "./spinner.types";
import SpinnerThird from "shared/components/icons/spinner-third";

const Spinner: React.FC<ISpinnerProps> = ({ size = 30, style, iconClassName, className = "" }) => {
    return (
        <motion.div
            className={`flex items-center justify-center overflow-hidden p-[2px] ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={style}
        >
            <div data-testid="loading-icon">
                <SpinnerThird
                    className={iconClassName + " animate-spin fill-white [animation-duration:0.5s]"}
                    style={{ width: size }}
                />
            </div>
        </motion.div>
    );
};

export default Spinner;
