import classNames from "classnames";
import { ITextareaProps } from "./textarea.types";

const Textarea: React.FC<ITextareaProps> = ({
    error,
    errorMessage,
    fullWidth,
    showLabel,
    resize,
    textBefore,
    topTitle,
    variant = "fill",
    ...rest
}) => {
    const containerClasses = classNames({
        "min-h-[150px] rounded-[12px] border-2 transition-colors text-white px-3 flex justify-between align-center gap-3 relative": 1,
        "border-red-600 hover:border-red-400 focus-within:border-red-400": error,
        "border-[rgb(40,40,40)] hover:border-[rgb(60,60,60)] focus-within:border-[rgb(60,60,60)]": !error,
        "bg-[rgb(30,30,30)]": variant === "fill",
        "123": variant === "stroke",
        "w-full": fullWidth,
        "w-[350px]": !fullWidth,
    });

    const textareaClasses = classNames({
        "w-full bg-transparent outline-none border-none placeholder:text-[rgb(100,100,100)] scrollbar-custom pt-[10px]": 1,
        "resize-y": resize,
        "resize-none": !resize,
    });

    return (
        <div className="flex w-full flex-col items-start justify-start">
            {topTitle && <div className="py-2 pl-3 text-[18px] text-white">{topTitle}</div>}
            <div className={containerClasses}>
                {textBefore && (
                    <span className="select-none whitespace-nowrap pt-[10px] text-[rgb(140,140,140)]">
                        {textBefore}
                    </span>
                )}
                <textarea className={textareaClasses} {...rest} />
            </div>
        </div>
    );
};

export default Textarea;
