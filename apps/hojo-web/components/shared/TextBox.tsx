import { TextField, TextFieldProps } from "@mui/material";

export default function TextBox (props?: TextFieldProps) {
    return <TextField { ...props } fullWidth />
}