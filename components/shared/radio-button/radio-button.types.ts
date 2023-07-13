import { Input } from "@mui/base";

export interface IRadioButtonProps {
    onChange: (value: string) => void;
    value: string;
    title: string;
    name: string;
    active: boolean;
}
