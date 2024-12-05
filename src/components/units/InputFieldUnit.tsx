import React from "react";
import Form from "../../types/types";
import { TextField } from "@mui/material";
import { Theme } from "../../utils";

interface IInputFieldUnitProps {
    form: Form;
    isError: boolean;
    formDataUnit: keyof Form;
    handleOnChange: (value: any) => void
}

const InputFieldUnit: React.FC<IInputFieldUnitProps> = ({
    form,
    isError,
    formDataUnit,
    handleOnChange,
}) => {

    return (
        <TextField
            value={
                typeof form[formDataUnit] === "string" ? form[formDataUnit] : ""
            }
            onChange={(e) => {
                handleOnChange(e.target.value);
            }}
            size="small"
            error={isError}
            helperText={isError && "Pflichtfeld"}
            sx={{
                width: "300px",
                "& .MuiInputBase-input": {
                    padding: "5px",
                    backgroundColor: Theme["white"],
                    borderRadius: "5px",
                    fontSize: "0.8rem",
                },
            }}
        />
    );
};
export default InputFieldUnit;
