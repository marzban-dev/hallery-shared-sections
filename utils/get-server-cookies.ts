import { cookies as Cookies } from "next/headers";

const getServerCookies = () => {
    const cookies = Cookies();

    let cookiesObject: any = {};

    cookies.getAll().forEach((item) => {
        cookiesObject[item.name] = item.value;
    });

    return cookiesObject;
};

export default getServerCookies;