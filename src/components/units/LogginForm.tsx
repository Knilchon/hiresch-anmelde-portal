import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Theme } from "../../utils";
import Form from "../../types/types";

import View from "./View";
import { ViewInterface } from "../../types/views";

interface ILogginFormProps {
    form: Form
    arraySize: number
    view: ViewInterface
    isWarningOn: boolean
    progressIndex: number
    updateForm: (obj:object) => void,
    setAreRequiredChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const LogginForm: React.FC<ILogginFormProps> = (props) => {

    return(
    <CustomBox isShown={props.progressIndex !== props.arraySize-1}>
        <Box sx={{
            display: "inherit",
            alignItems: "center",
            paddingLeft: '5px',
            backgroundColor: Theme['orange'],
            borderRadius: '3px 3px 0px 0px',
            color: Theme['white'],
            height: '20px',
            width: 'calc(100% - 5px)'
        }}
        >
            <Typography sx={{
                fontSize: '0.7rem'
            }}  
            >{props.view.underLabel}</Typography>
        </Box> 
        <View {...props}/>
    </CustomBox>
    )
}
export default LogginForm;

interface ICustomBoxProps{
    isShown: boolean
}

const CustomBox = styled(Box)<ICustomBoxProps>(({isShown}) => ({
    display: isShown ? "flex" : "none",
    flexFlow: "column",
    width: '100%'
}));