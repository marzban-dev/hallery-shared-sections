import { ChangeEvent, useEffect, useRef, useState } from "react";

interface IProps {
    initial?: string | null;
    onInputChange: () => void;
    onValueChange: (value: string) => void;
    onEmpty: () => void;
}

const useHandleSearch = ({ initial, onEmpty, onInputChange, onValueChange }: IProps) => {
    const [inputValue, setInputValue] = useState(initial ? initial : "");
    const [actualValue, setActualValue] = useState("");
    const timer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timer.current) {
            if (actualValue.length !== 0) {
                onValueChange(actualValue);
            } else {
                onEmpty();
            }
        }
    }, [actualValue]);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);

        if (timer.current) clearTimeout(timer.current);
        onInputChange();

        timer.current = setTimeout(() => {
            setActualValue(e.target.value);
        }, 500);
    };

    return {
        inputHandler: onChange,
        inputValue,
        setInputValue,
        setActualValue,
    };
};

export default useHandleSearch;
