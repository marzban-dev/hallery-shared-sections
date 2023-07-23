import { headers } from "next/headers";

const getPathname = () => {
    const headersList = headers();

    const urlHeader = headersList.get("x-url")?.split("/");

    if (urlHeader) {
        urlHeader?.splice(0, 3);

        return `/${urlHeader.join("/")}`;
    }

    return "";
};

export default getPathname;
