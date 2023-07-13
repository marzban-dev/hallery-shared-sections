"use client";

import { useEffect, useRef } from "react";
import { IProgressLoadingProps } from "./progress-loading.types";
import { m as motion, useMotionTemplate, useSpring } from "framer-motion";
import randint from "utils/randint";

const ProgressLoading: React.FC<IProgressLoadingProps> = ({ isLoading }) => {
    const percentMotionValue = useSpring(0, { damping: 30, stiffness: 300 });
    const percentTemplate = useMotionTemplate`${percentMotionValue}%`;
    const timer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timer.current) clearInterval(timer.current);

        if (!isLoading) {
            percentMotionValue.set(100);
            setTimeout(() => percentMotionValue.set(10), 200);
        } else {
            percentMotionValue.set(10);

            timer.current = setInterval(() => {
                const prevPercent = percentMotionValue.get();
                percentMotionValue.set(randint(prevPercent + 1, prevPercent + 3));
            }, 500);
        }
    }, [isLoading]);

    return (
        <motion.div
            animate={{ opacity: isLoading ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex h-[4px] w-full items-center justify-start"
        >
            <motion.div className="h-full bg-blue-400" style={{ width: percentTemplate }} />
        </motion.div>
    );
};

export default ProgressLoading;
