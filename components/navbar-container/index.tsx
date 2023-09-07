import Logo from "shared/components/logo";
import { INavbarContainerProps } from "./navbar-container.types";

const NavbarContainer: React.FC<INavbarContainerProps> = ({ children }) => {
    return (
        <nav className="bottom-[20px] z-50 flex w-full items-start justify-center max-[800px]:fixed min-[800px]:h-screen min-[800px]:w-[100px] min-[1000px]:w-[250px]">
            <ul className="flex gap-2 rounded-full max-[800px]:bg-[rgba(20,20,20,0.8)] max-[800px]:px-4 max-[800px]:backdrop-blur-xl min-[420px]:gap-5 min-[800px]:flex-col min-[800px]:pt-[40px]">
                <div className="mb-[20px] flex w-full items-center justify-center max-[800px]:hidden">
                    <Logo />
                </div>
                {children}
            </ul>
        </nav>
    );
};

export default NavbarContainer;
