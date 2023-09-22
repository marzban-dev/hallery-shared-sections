import Cookies from "universal-cookie";
import getAuth from "./get-auth";
import getServerCookies from "./get-server-cookies";

const getServerAuth = () => {
    const serverCookies = getServerCookies();

    const cookies = new Cookies(serverCookies);
    
    return getAuth(cookies);
};

export default getServerAuth;
