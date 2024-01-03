import Logo from "shared/components/logo";
import { INavbarContainerProps } from "./navbar-container.types";
import Logout from "./components/logout";

const NavbarContainer: React.FC<INavbarContainerProps> = ({ children ,logout}) => {
    return (
        <nav className="bottom-0 z-50 flex w-full items-start justify-center max-md:fixed 2xs:bottom-[20px] md:h-screen md:w-[100px] lg:w-[250px]">
            <ul className="md:flex flex-col justify-between h-full md:pb-4 max-2xs:w-full">
                <div className="flex gap-2 max-md:bg-[rgba(25,25,25,0.7)] max-md:px-4 max-md:backdrop-blur-lg max-2xs:w-full max-2xs:justify-center max-2xs:border-t max-2xs:border-[rgb(50,50,50)] 2xs:gap-5 2xs:rounded-full md:flex-col md:pt-[40px]">
                    <div className="mb-[20px] flex w-full items-center justify-center max-md:hidden">
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
