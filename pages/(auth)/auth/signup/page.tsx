import BackgroundPicture from "../../components/background-picture";
import SignupContainer from "./components/signup-container";

const SignupPageComponent = () => {
    return (
        <main className="fixed left-0 top-0 z-[999] flex h-screen w-full items-center justify-start bg-black">
            <BackgroundPicture />
            <SignupContainer />
        </main>
    );
};

export default SignupPageComponent;
