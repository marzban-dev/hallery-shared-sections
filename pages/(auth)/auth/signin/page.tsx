import BackgroundPicture from "../../components/background-picture";
import SigninContainer from "./components/signin-container";

const SigninPageComponent = () => {
    return (
        <main className="fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-start bg-black">
            <BackgroundPicture />
            <SigninContainer />
        </main>
    );
};

export default SigninPageComponent;
