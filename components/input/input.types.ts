export interface IInputProps extends React.ComponentProps<"input"> {
    fullWidth?: boolean;
    error?: boolean;
    errorMessage?: string;
    showLabel?: boolean;
    containerClassName?: string;
    icon?: any;
    textBefore?: string;
    inputSize?: "sm" | "md";
    variant?: "stroke" | "fill";
    topTitle?: string;
}
