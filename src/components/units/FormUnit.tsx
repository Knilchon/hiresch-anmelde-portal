import React, { ReactHTMLElement } from 'react';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import Form, { Apprenticship, Course, EducationLevel, Enum, FormUnitType, Gender, Relation } from '../../types/types';
import { Theme } from '../../utils';
import { Weekday } from '../../types/types';

interface IFormUnitProps {
    label: string
    type: FormUnitType
    checkOptions?: Enum
    descriptText?: string
    form: Form
    isRequired: boolean,
    isWarningOn: boolean
    checkboxDescript?: string | JSX.Element
    formDataUnit: keyof Form
    updateForm: (obj:object) => void
}

const FormUnit: React.FC<IFormUnitProps> = ({label, type, isWarningOn, form, isRequired, descriptText, formDataUnit, checkOptions, checkboxDescript, updateForm}) => {

    const isError = isWarningOn && isRequired &&
    (form[formDataUnit] === '' && type === FormUnitType.InputField ||
    form[formDataUnit] === false && type === FormUnitType.CheckBox ||
    form[formDataUnit] === undefined && type === FormUnitType.OptionFields)
    

    const handleOnChange = (value: any) => {
        updateForm({[formDataUnit]: value})
    }

    const handleOnChangeArray = (value: any) => {
        if(Array.isArray(form[formDataUnit])){
            let arr = form[formDataUnit].includes(value) ? 
            form[formDataUnit].filter(item => item !== value) :
            [...form[formDataUnit],value]

            updateForm({...form, [formDataUnit]: arr})
        }else{
            updateForm(form)
        }
    }

    const checkArrayChecked = (formDataUnit: keyof Form, option: Apprenticship | Relation | Course | EducationLevel | Weekday | Gender) => {
        if(Array.isArray(form[formDataUnit]) && ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"].includes(option)){
            return(
                // @ts-ignore
                form[formDataUnit]?.includes(option)
            )
        }else{
            return false
        }
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
                flexFlow: 'column',
            }}>
            <Box sx={{
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'center'
            }}>
                <Checkbox 
                checked={typeof form[formDataUnit] === "boolean" ? form[formDataUnit] : false}
                onChange={(e,value) => {
                    handleOnChange(value)
                }} 
                sx={{color: isError ? 'red' : 'gray'}}
                size='small' 
                />
                <Typography sx={{
                    display: 'flex',
                    fontSize: '0.8rem',
                    color: Theme['darkGray']
                }}
                >{checkboxDescript || ''}</Typography>
            </Box>
            {isError && <Typography
            sx={{
                fontSize: '12px',
                color: Theme['red'],
                marginLeft: '10px'
            }}
            >Pflichtfeld</Typography>}
            </Box>
            }

            {type === FormUnitType.InputField && 
            <TextField 
            value={typeof form[formDataUnit] === "string" ? form[formDataUnit] : ''}
            onChange={(e) => {handleOnChange(e.target.value)}}
            size='small'
            error={isError}
            helperText={isError && 'Pflichtfeld'}
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
                        key={option.toString()}
                        sx={{
                            color: Theme['darkGray'],
                            height: '24px',
                            fontSize: '10px',
                            '& .MuiFormControlLabel-label': {
                                fontSize: '0.8rem'
                            },
                            '& .MuiSvgIcon-root':{
                                fontSize: '16px',
                                color: isError ? Theme['red'] : Theme['darkGray'],
                            }
                        }}
                        checked={form[formDataUnit] === option} 
                        control={<Radio/>} 
                        label={option} 
                        onClick={() => handleOnChange(option)}
                        />))}
                    </RadioGroup>
                    {isError && <Typography
                    sx={{
                        fontSize: '12px',
                        color: Theme['red']
                    }}
                    >Pflichtfeld</Typography>}
                </FormControl>
            </Box>}
            {type === FormUnitType.ArraySelect &&
                <Box
                sx={{
                    paddingLeft: '10px'
                }}
                >
                    <FormControl>
                        <FormGroup>
                            {checkOptions?.map((option) => (
                            <FormControlLabel
                            key={option.toString()}
                            sx={{
                                color: Theme['darkGray'],
                                height: '24px',
                                fontSize: '10px',
                                '& .MuiFormControlLabel-label': {
                                    fontSize: '0.8rem'
                                },
                                '& .MuiSvgIcon-root':{
                                    fontSize: '16px',
                                    color: isError ? Theme['red'] : '',
                                }
                            }}
                            checked={checkArrayChecked(formDataUnit,option)} 
                            control={<Checkbox/>} 
                            label={option} 
                            onClick={() => handleOnChangeArray(option)}
                            />))}
                        </FormGroup>
                        {isError && <Typography
                        sx={{
                            fontSize: '12px',
                            color: Theme['red']
                        }}
                        >Pflichtfeld</Typography>}
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