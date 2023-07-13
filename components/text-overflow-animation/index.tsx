"use client";

import classNames from "classnames";
import { m as motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ITextOverflowAnimation } from "./text-overflow-animation.types";

const TextOverflowAnimation: React.FC<ITextOverflowAnimation> = ({ children, fade = true, className }) => {
    const [overflowAmount, setOverflowAmount] = useState(0);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const textScrollWidth = textRef.current!.scrollWidth;
        const textWidth = textRef.current!.clientWidth;

        if (textWidth < textScrollWidth) {
            setOverflowAmount(textScrollWidth - textWidth + (fade ? 20 : 0));
        }
    }, []);

    const textVariants: Variants = {
        scroll: {
            x: [0, -overflowAmount],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
                repeatType: "mirror",
            },
        },
    };

    const containerClasses = classNames("whitespace-nowrap", className);

    return (
        <div className="relative overflow-hidden">
            {fade && (
                <div className="absolute right-0 top-0 z-20 h-full w-[10px] bg-gradient-to-l from-[rgb(20,20,20)] to-transparent" />
            )}
            <motion.div variants={textVariants} animate="scroll" className={containerClasses} ref={textRef}>
                {children}
            </motion.div>
            {fade && (
                <div className="absolute left-0 top-0 z-20 h-full w-[10px] bg-gradient-to-r from-[rgb(20,20,20)] to-transparent" />
            )}
        </div>
    );
};
export default TextOverflowAnimation;
