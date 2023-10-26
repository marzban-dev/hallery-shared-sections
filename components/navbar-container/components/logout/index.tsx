"use client";

import useAuth from "shared/hooks/use-auth";
import { Button } from "@mui/base";
import IconArrowRightFromBracket from "shared/components/icons/arrow-right-from-bracket";

const Logout = () => {
    const { logout } = useAuth();

    return (
        <li className="max-[800px]:hidden">
            <Button
                onClick={logout}
                className="group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-transparent transition-colors max-[1000px]:h-[50px] max-[1000px]:w-[50px] min-[1000px]:w-full min-[1000px]:justify-start min-[1000px]:py-3 min-[1000px]:pl-4 min-[1000px]:pr-10"
            >
                <div className="relative flex items-center justify-center text-white">
                    <div className="flex items-center justify-start min-[1000px]:w-[40px]">
                        <IconArrowRightFromBracket style={{ height: 20 }} className="group-hover:fill-red-400 fill-red-500 transition-colors" />
                    </div>
                    <span className="text-[18px] max-[1000px]:hidden text-red-500 group-hover:text-red-400 transition-colors">Logout</span>
                </div>
            </Button>
        </li>
    );
};

export default Logout;