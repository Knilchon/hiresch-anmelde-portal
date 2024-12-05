import React, { ReactHTMLElement } from "react";
import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import styled from "styled-components";
import Form, {
    Apprenticship,
    Course,
    EducationLevel,
    Enum,
    FormUnitType,
    Gender,
    Relation,
} from "../../types/types";
import { Theme } from "../../utils";
import { Weekday } from "../../types/types";
import FileUploadUnit from "./FileUploadUnit";
import ArraySelect from "./ArraySelectUnit";
import CheckBoxUnit from "./CheckboxUnit";
import InputFieldUnit from "./InputFieldUnit";
import OptionFields from "./OptionFieldsUnit";

interface IFormUnitProps {
    label: string;
    type: FormUnitType;
    checkOptions?: Enum;
    descriptText?: string;
    form: Form;
    isRequired: boolean;
    isWarningOn: boolean;
    checkboxDescript?: string | JSX.Element;
    formDataUnit: keyof Form;
    updateForm: (obj: object) => void;
}

const FormUnit: React.FC<IFormUnitProps> = (props) => {

    const {
        label,
        type,
        isWarningOn,
        form,
        isRequired,
        descriptText,
        formDataUnit,
        checkOptions,
        checkboxDescript,
        updateForm,
    } = props

    const isError =
        isWarningOn &&
        isRequired &&
        ((form[formDataUnit] === "" && type === FormUnitType.InputField) ||
        (form[formDataUnit] === false && type === FormUnitType.CheckBox) ||
        (form[formDataUnit] === undefined && type === FormUnitType.OptionFields));

    const handleOnChange = (value: any) => {
        updateForm({ [formDataUnit]: value });
    };

    const handleOnChangeArray = (value: any) => {
        if (Array.isArray(form[formDataUnit])) {
            let arr = form[formDataUnit].includes(value)
                ? form[formDataUnit].filter((item) => item !== value)
                : [...form[formDataUnit], value];

            updateForm({ ...form, [formDataUnit]: arr });
        } else {
            updateForm(form);
        }
    };

    const checkArrayChecked = (
        formDataUnit: keyof Form,
        option:
            | Apprenticship
            | Relation
            | Course
            | EducationLevel
            | Weekday
            | Gender
    ) => {
        if (Array.isArray(form[formDataUnit]) && ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"].includes(option)) {
            return (
                // @ts-ignore
                form[formDataUnit]?.includes(option)
            );
        } else {
            return false;
        }
    };

    return (
        <CustomBox>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexFlow: "row",
                    marginRight: "2px",
                    paddingRight: "5px",
                    borderBottom: `solid 1.5px ${Theme["gray"]}`,
                    minWidth: "170px",
                    maxWidth: "170px",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "0.8rem",
                        color: Theme["darkGray"],
                    }}
                >
                    {label}
                    {isRequired && (
                        <strong
                            style={{
                                color: Theme["red"],
                                marginLeft: "2px",
                            }}
                        >
                            *
                        </strong>
                    )}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexFlow: "column",
                    flexGrow: "1",
                    padding: "5px",
                    backgroundColor: Theme["lightGray"],
                    borderBottom: `solid 1.5px ${Theme["gray"]}`,
                }}
            >
                {type === FormUnitType.CheckBox && (
                    <CheckBoxUnit {...props} 
                    handleOnChange={handleOnChange} 
                    isError={isError}/>
                )}
                {type === FormUnitType.InputField && (
                    <InputFieldUnit {...props} 
                    handleOnChange={handleOnChange}
                    isError={isError}/>
                )}
                {type === FormUnitType.OptionFields && (
                    <OptionFields {...props} 
                    handleOnChange={handleOnChange}
                    isError={isError}/>
                )}
                {type === FormUnitType.ArraySelect && (
                    <ArraySelect {...props} 
                    handleOnChangeArray={handleOnChangeArray} 
                    checkArrayChecked={checkArrayChecked} 
                    isError={isError} />
                )}
                {type === FormUnitType.FileUpload && (
                    <FileUploadUnit {...props} />
                )}
                {descriptText && (
                    <Typography
                        sx={{
                            fontSize: "0.8rem",
                            marginLeft: "5px",
                            color: Theme["gray"],
                        }}
                    >
                        {descriptText}
                    </Typography>
                )}
            </Box>
        </CustomBox>
    );
};
export default FormUnit;

const CustomBox = styled(Box)({
    display: "flex",
    width: "100%",
});
