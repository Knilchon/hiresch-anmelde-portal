import React from "react";
import Form, { Enum } from "../../types/types";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Theme } from "../../utils";

interface IOptionFieldsProps {
  form: Form;
  isError: boolean;
  checkOptions?: Enum;
  formDataUnit: keyof Form;
  handleOnChange: (value: any) => void;
}

const OptionFields: React.FC<IOptionFieldsProps> = ({
  form,
  isError,
  formDataUnit,
  checkOptions,
  handleOnChange,
}) => {
  return (
    <Box
      sx={{
        paddingLeft: "10px",
      }}
    >
      <FormControl>
        <RadioGroup>
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
                  color: isError ? Theme["red"] : Theme["darkGray"],
                },
              }}
              checked={form[formDataUnit] === option}
              control={<Radio />}
              label={option}
              onClick={() => handleOnChange(option)}
            />
          ))}
        </RadioGroup>
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
export default OptionFields;
