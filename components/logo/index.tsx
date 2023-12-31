import Image from "next/image";
import Link from "next/link";
import LogoImage from "public/assets/img/logo.png";

const Logo: React.FC = () => {
    return (
        <Link href="https://hallery.art" className="w-[40px]">
            <Image src={LogoImage} alt="logo" priority />
        </Link>
    );
};
export default Logo;
