"use client";

import { LazyMotion, domMax } from "framer-motion";
import { DefaultToastOptions, Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import { useMediaQuery } from "react-responsive";

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 520 });

    const toastOptions: DefaultToastOptions = {
        position: isMobile ? "top-center" : "bottom-center",
        style: {
            borderRadius: "5px",
            background: "#1c1c1c",
            color: "#fff",
            padding: "10px 20px",
        },
    };

    return (
        <LazyMotion features={domMax}>
            <SkeletonTheme baseColor="rgb(40,40,40)" highlightColor="rgb(45,45,45)">
                {children}
                <Toaster toastOptions={toastOptions} position="bottom-center" reverseOrder={false} />
            </SkeletonTheme>
        </LazyMotion>
    );
};
export default AppProvider;
