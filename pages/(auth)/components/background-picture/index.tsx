import Image from "next/image";
import BackgroundImage from "../../../../../public/assets/img/auth-form-bg.jpg";
import React from "react";

const BackgroundPicture: React.FC = () => {
    return (
        <div className="relative h-full max-[1000px]:hidden w-[50%] overflow-hidden">
            <div className="h-full w-full">
                <Image
                    src={BackgroundImage}
                    alt="background"
                    className="object-cover brightness-75"
                    id="form-background-image"
                    placeholder="blur"
                    fill
                />
            </div>
        </div>
    );
};
export default BackgroundPicture;
