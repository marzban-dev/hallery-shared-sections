"use client";

import classNames from "classnames";
import { Portal } from "shared/components/portal";
import { AnimatePresence, m as motion, PanInfo, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IModalProps } from "./modal.types";

const Modal: React.FC<IModalProps> = ({ title, show, onClose, children, className }) => {
    const [fullSize, setFullSize] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 520 });
    const [contentHeight, setContentHeight] = useState(500);
    const childContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const setHeight = () => {
            const height = childContainerRef.current?.clientHeight;
            if (height) {
                if (height > 700) {
                    if (isMobile) setFullSize(true);
                    else setContentHeight(650);
                } else {
                    setContentHeight(height + 50);
                }
            }
        };

        setHeight();

        window.addEventListener("resize", setHeight);
        return () => {
            window.removeEventListener("resize", setHeight);
        };
    }, [children]);

    useEffect(() => {
        if (!isMobile) setFullSize(false);
    }, [isMobile]);

    const containerClasses = classNames(
        {
            "no-flicker absolute z-[1200] min-h-[300px] w-full origin-bottom transform-gpu max-[520px]:bottom-0 min-[520px]:max-w-[700px] transition-[max-height,border-radius]": 1,
            "p-0": isMobile,
            "p-4": !isMobile,
        },
        className
    );

    const wrapperClasses = classNames({
        "rounded-b-none min-[520px]:rounded-[10px] bg-[rgb(20,20,20)]": 1,
        "rounded-t-[20px]": !fullSize,
        "overflow-visible": isMobile,
        "overflow-hidden": !isMobile,
    });

    const overlayVariants: Variants = {
        hide: {
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },
    };

    const contentDesktopVariants: Variants = {
        hide: {
            height: contentHeight,
            opacity: 0,
            y: 50,
            transition: {
                duration: 0.25,
                opacity: {
                    duration: 0.15,
                },
            },
        },
        show: {
            height: contentHeight,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.25,
            },
        },
    };

    const contentMobileVariants: Variants = {
        hide: {
            y: "100%",
            height: contentHeight,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            height: fullSize ? "100%" : contentHeight,
            y: 0,
            transition: {
                y: { type: "spring", stiffness: 350, damping: 40 },
            },
        },
    };

    const onDragEnd = (e: any, info: PanInfo) => {
        if (info.offset.y > 40) closeModal();
        if (info.offset.y < -10) setFullSize(true);
    };

    const closeModal = () => {
        onClose();
        setFullSize(false);
    };

    return (
        <Portal>
            <AnimatePresence>
                {show && (
                    <div className="fixed top-0 z-[999] flex h-full w-full items-center justify-center [perspective:1000px]">
                        <motion.div
                            className={containerClasses}
                            dragConstraints={{ bottom: 0, top: 0 }}
                            dragElastic={{ bottom: 0.4, top: 0.4 }}
                            dragTransition={{ bounceStiffness: 200, bounceDamping: 25 }}
                            variants={isMobile ? contentMobileVariants : contentDesktopVariants}
                            drag={isMobile ? "y" : undefined}
                            onDragEnd={onDragEnd}
                            initial="hide"
                            animate="show"
                            exit="hide"
                        >
                            <div className={wrapperClasses}>
                                <div className="hidden w-full cursor-grab items-center justify-center py-3 max-[520px]:flex">
                                    <div className="mr-[6px] h-[6px] w-[70px] rounded-[5px] bg-[rgb(40,40,40)]" />
                                </div>
                                <div className="relative">
                                    {/* <div className="absolute left-0 top-0 z-[1200] h-[20px] w-full bg-gradient-to-b from-[rgb(20,20,20)] to-transparent" /> */}
                                    <motion.div
                                        animate={{ height: fullSize ? "100vh" : contentHeight }}
                                        className="scrollbar-custom relative z-[1180] overflow-y-scroll px-4 pb-16 pt-2 min-[520px]:px-6 min-[520px]:py-6"
                                        id="modal-scroll-container"
                                    >
                                        <div className="w-full" ref={childContainerRef}>
                                            {title && (
                                                <div className="mb-6 flex items-center justify-center border-b-2 border-[rgb(40,40,40)] pb-3">
                                                    <span className="text-[20px] text-white">{title}</span>
                                                </div>
                                            )}
                                            {children}
                                        </div>
                                    </motion.div>
                                    <div className="absolute bottom-0 left-0 z-[1200] h-[20px] w-full bg-gradient-to-t from-[rgb(20,20,20)] to-transparent" />

                                    {isMobile && (
                                        <div className="absolute top-[40%] z-[1150] h-[100vh] w-full bg-[rgb(20,20,20)] transition-[top]" />
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={overlayVariants}
                            initial="hide"
                            animate="show"
                            exit="hide"
                            className="absolute z-[1100] h-full w-full cursor-pointer bg-[rgba(0,0,0,0.8)]"
                            onClick={closeModal}
                        ></motion.div>
                    </div>
                )}
            </AnimatePresence>
        </Portal>
    );
};

export default Modal;
