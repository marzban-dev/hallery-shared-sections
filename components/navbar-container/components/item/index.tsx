"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IItemProps } from "./item.types";

const Item: React.FC<IItemProps> = ({ icon: Icon, children, href, text, iconSize = 26 }) => {
    const pathname = usePathname();

    const isRouteMatch = pathname === href;

    const containerClasses = classNames({
        "group flex cursor-pointer bg-transparent items-center justify-center min-[1000px]:justify-start gap-2 max-[1000px]:h-[50px] max-[1000px]:w-[50px] min-[1000px]:py-3 min-[1000px]:pl-4 min-[1000px]:pr-10 min-[1000px]:w-full rounded-full transition-colors": 1,
        "min-[800px]:bg-gradient-to-l from-blue-300 to-blue-600": isRouteMatch,
        "hover:bg-[rgb(25,25,25)]": !isRouteMatch,
    });

    const iconClasses = classNames({
        "group-hover:fill-white transition-colors": 1,
        "max-[800px]:fill-[url(#icon-gradient)] min-[800px]:fill-white": isRouteMatch,
        "fill-[rgb(140,140,140)] min-[800px]:fill-white": !isRouteMatch,
    });

    const textClasses = classNames({
        "text-[18px] max-[1000px]:hidden": 1,
        "text-white": isRouteMatch,
        "text-[rgb(180,180,180)]": !isRouteMatch,
    });

    return (
        <li>
            <Link href={href} className={containerClasses}>
                <div className="relative flex items-center justify-center text-white">
                    <div className="flex items-center justify-start min-[1000px]:w-[40px]">
                        <svg width="0" height="0">
                            <radialGradient id="icon-gradient" r="150%" cx="30%" cy="107%">
                                <stop stopColor="rgb(147,197,253)" offset="0" />
                                <stop stopColor="rgb(37,99,235)" offset="0.9" />
                            </radialGradient>
                        </svg>
                        {children ?? <Icon style={{ height: iconSize }} className={iconClasses} />}
                    </div>
                    <span className={textClasses}>{text}</span>
                </div>
            </Link>
        </li>
    );
};

export default Item;
