export interface ITextareaProps extends React.ComponentProps<"textarea"> {
    fullWidth?: boolean;
    error?: boolean;
    errorMessage?: string;
    showLabel?: boolean;
    containerClassName?: string;
    textBefore?: string;
    resize?: boolean;
    variant?: "stroke" | "fill";
    topTitle?: string;
}
