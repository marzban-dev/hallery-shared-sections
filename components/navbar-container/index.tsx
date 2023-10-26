import Logo from "shared/components/logo";
import { INavbarContainerProps } from "./navbar-container.types";
import Link from "next/link";
import {Button} from "@mui/base";
import Logout from "./components/logout";

const NavbarContainer: React.FC<INavbarContainerProps> = ({ children ,logout}) => {
    return (
        <nav className="bottom-0 z-50 flex w-full items-start justify-center max-[800px]:fixed min-[430px]:bottom-[20px] min-[800px]:h-screen min-[800px]:w-[100px] min-[1000px]:w-[250px]">
            <ul className="min-[800px]:flex flex-col justify-between h-full min-[800px]:pb-4 max-[430px]:w-full">
                <div className="flex gap-2 max-[800px]:bg-[rgba(20,20,20,0.8)] max-[800px]:px-4 max-[800px]:backdrop-blur-xl max-[430px]:w-full max-[430px]:justify-center max-[430px]:border-t max-[430px]:border-[rgb(50,50,50)] min-[420px]:gap-5 min-[430px]:rounded-full min-[800px]:flex-col min-[800px]:pt-[40px]">
                    <div className="mb-[20px] flex w-full items-center justify-center max-[800px]:hidden">
                        <Logo />
                    </div>
                    {children}
                </div>
                {logout && <Logout />}
            </ul>
        </nav>
    );
};

export default NavbarContainer;
