import React from "react";
import Form from "../../types/types";
import { Box, Checkbox, Typography } from "@mui/material";
import { Theme } from "../../utils";

interface ICheckBoxUnitProps {
    form: Form;
    isError: boolean;
    formDataUnit: keyof Form;
    checkboxDescript?: string | JSX.Element;
    handleOnChange: (value: any) => void
}

const CheckBoxUnit: React.FC<ICheckBoxUnitProps> = ({
    form,
    isError,
    formDataUnit,
    checkboxDescript,
    handleOnChange,
}) => {

    return (
        <Box
                        sx={{
                            display: "flex",
                            flexFlow: "column",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexFlow: "row",
                                alignItems: "center",
                            }}
                        >
                            <Checkbox
                                checked={
                                    typeof form[formDataUnit] === "boolean"
                                        ? form[formDataUnit]
                                        : false
                                }
                                onChange={(e, value) => {
                                    handleOnChange(value);
                                }}
                                sx={{ color: isError ? "red" : "gray" }}
                                size="small"
                            />
                            <Typography
                                sx={{
                                    display: "flex",
                                    fontSize: "0.8rem",
                                    color: Theme["darkGray"],
                                }}
                            >
                                {checkboxDescript || ""}
                            </Typography>
                        </Box>
                        {isError && (
                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color: Theme["red"],
                                    marginLeft: "10px",
                                }}
                            >
                                Pflichtfeld
                            </Typography>
                        )}
                    </Box>
    );
};
export default CheckBoxUnit;
