import { useEffect, useRef, useState } from "react";

export const useDelay = (cb: () => void, values: any[]) => {
    const [firstRender, setFirstRender] = useState(true);
    const timer = useRef<NodeJS.Timeout>();

    useEffect(() => {
        setFirstRender(false);
    }, []);

    useEffect(() => {
        if (!firstRender) {
            if (timer.current) clearTimeout(timer.current);

            timer.current = setTimeout(() => {
                cb();
            }, 500);
        }
    }, values);
};
