import { useQueryClient } from "@tanstack/react-query";
import Router from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFullscreenArt } from "store/slice/app.slice";

const useRouteLoading = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const [isLoading, setIsLoading] = useState(false);

    const start = () => setIsLoading(true);

    const end = () => {
        queryClient.cancelQueries();
        dispatch(setFullscreenArt(null));
        setIsLoading(false);
    };

    const error = () => {
        queryClient.cancelQueries();
        setIsLoading(false);
    };

    useEffect(() => {
        // Router.events.on("routeChangeStart", start);
        // Router.events.on("routeChangeComplete", end);
        // Router.events.on("routeChangeError", error);
        // return () => {
        //     Router.events.off("routeChangeStart", start);
        //     Router.events.off("routeChangeComplete", end);
        //     Router.events.off("routeChangeError", error);
        // };
    }, []);

    return isLoading;
};

export default useRouteLoading;
