import React from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import Form, { Enum, FormUnitType } from '../../types/types';
import { Theme } from '../../utils';

interface IFormUnitProps {
    label: string
    type: FormUnitType
    checkOptions?: Enum
    descriptText?: string
    form: Form
    isRequired: boolean,
    checkboxDescript?: string
    formDataUnit: keyof Form
    updateForm: (obj:object) => void
}

const FormUnit: React.FC<IFormUnitProps> = ({label, type, form, isRequired, descriptText, formDataUnit, checkOptions, checkboxDescript, updateForm}) => {

    const handleOnChange = (value: any) => {
        updateForm({[formDataUnit]: value})
    }

    return(
    <CustomBox>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexFlow: 'row',
            marginRight: '2px',
            paddingRight: '5px',
            borderBottom: `solid 1.5px ${Theme['gray']}`,
            minWidth: '170px',
            maxWidth: '170px',
        }}
        >
            <Typography sx={{
                fontSize: '0.8rem',
                color: Theme['darkGray'],
                }}>{label}
                {isRequired && <strong style={{
                color: Theme['red'],
                marginLeft: '2px',
                }}
                >*</strong>}
            </Typography>
            
        </Box>
        <Box sx={{
            display: 'flex',
            flexFlow: 'column',
            flexGrow: '1',
            padding: '5px',
            backgroundColor: Theme['lightGray'],
            borderBottom: `solid 1.5px ${Theme['gray']}`,
        }}>

            {type === FormUnitType.CheckBox && 
            <Box sx={{
                display: 'flex',
                flexFlow: 'row',
                height: '25px',
                alignItems: 'center'
            }}>
            <Checkbox 
            checked={typeof form[formDataUnit] === "boolean" ? form[formDataUnit] : false}
            onChange={(e,value) => {
                handleOnChange(value)
            }} 
            size='small' 
            />
            <Typography sx={{
                fontSize: '0.8rem',
                color: Theme['darkGray']
            }}
            >{checkboxDescript || ''}</Typography>
            </Box>
            }

            {type === FormUnitType.InputField && 
            <TextField 
            value={typeof form[formDataUnit] === "string" ? form[formDataUnit] : ''}
            onChange={(e) => {handleOnChange(e.target.value)}}
            size='small'
              sx={{
                width: '300px',
                '& .MuiInputBase-input': {
                  padding: '5px',
                  backgroundColor: Theme['white'],
                  borderRadius: '5px',
                  fontSize: '0.8rem'
                },
            }}
            />
            }
            {type === FormUnitType.OptionFields && 
            <Box
            sx={{
                paddingLeft: '10px'
            }}
            >
                <FormControl>
                    <RadioGroup>
                        {checkOptions?.map((option) => (
                        <FormControlLabel
                        sx={{
                            color: Theme['darkGray'],
                            height: '24px',
                            fontSize: '10px',
                            '& .MuiFormControlLabel-label': {
                                fontSize: '0.8rem'
                            },
                            '& .MuiSvgIcon-root':{
                                fontSize: '16px'
                            }
                        }}
                        checked={form[formDataUnit] === option} 
                        control={<Radio/>} 
                        label={option} 
                        onClick={() => handleOnChange(option)}
                        />))}
                    </RadioGroup>
                </FormControl>
            </Box>}
            {descriptText && 
            <Typography sx={{
                fontSize: '0.8rem',
                marginLeft: '5px',
                color: Theme['gray']
            }}>
                {descriptText}
            </Typography>}
        </Box>
    </CustomBox>
)};
export default FormUnit;

const CustomBox = styled(Box)({
    display: "flex",
    width: '100%'
});