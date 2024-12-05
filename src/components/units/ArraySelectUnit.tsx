import React from "react";
import Form, { Apprenticship, Course, EducationLevel, Enum, Gender, Relation, Weekday } from "../../types/types";
import { Box, FormControl, FormGroup, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { Theme } from "../../utils";

interface IArraySelectProps {
    form: Form;
    isError: boolean;
    checkOptions?: Enum;
    formDataUnit: keyof Form;
    updateForm: (obj: object) => void;
    handleOnChangeArray: (value: any) => void
    checkArrayChecked: (formDataUnit: keyof Form, option: Apprenticship | Relation | Course | EducationLevel | Weekday | Gender) => boolean
}

const ArraySelect: React.FC<IArraySelectProps> = ({
    form,
    isError,
    formDataUnit,
    checkOptions,
    updateForm,
    checkArrayChecked,
    handleOnChangeArray,
}) => {

    return (
        <Box
            sx={{
                paddingLeft: "10px",
            }}
        >
            <FormControl>
                <FormGroup
                    sx={{
                        display: "flex",
                        flexFlow: "row",
                    }}
                >
                    {checkOptions?.map((option) => (
                        <FormControlLabel
                            key={option.toString()}
                            sx={{
                                color: Theme["darkGray"],
                                height: "24px",
                                fontSize: "10px",
                                "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem",
                                },
                                "& .MuiSvgIcon-root": {
                                    fontSize: "16px",
                                    color: isError ? Theme["red"] : "",
                                },
                            }}
                            checked={checkArrayChecked(formDataUnit, option)}
                            control={<Checkbox />}
                            label={option}
                            onClick={() => handleOnChangeArray(option)}
                        />
                    ))}
                </FormGroup>
                {isError && (
                    <Typography
                        sx={{
                            fontSize: "12px",
                            color: Theme["red"],
                        }}
                    >
                        Pflichtfeld
                    </Typography>
                )}
            </FormControl>
        </Box>
    );
};
export default ArraySelect;
