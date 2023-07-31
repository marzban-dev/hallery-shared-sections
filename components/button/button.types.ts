import { Button } from "@mui/base";
import { ComponentProps } from "react";

export interface IButtonProps extends ComponentProps<typeof Button> {
    gradient?: boolean;
    fullWidth?: boolean;
    variant?: "outlined" | "filled";
    size?: "sm" | "md" | "xs";
    color?: "default" | "danger";
    circle?: boolean;
    rounded?: boolean;
    shadow?: boolean;
    icon?: any;
    loading?: boolean;
    iconClassName?: string;
}
