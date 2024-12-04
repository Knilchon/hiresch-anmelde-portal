import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Theme } from "../../utils";
import Form from "../../types/types";

import Datenschutz from "../views/Datenschutz";
import Persoenliches from "../views/Persoenliches";
import Wohnort from "../views/Wohnort";
import Minder from "../views/Minder";
import Ausbildung from "../views/Ausbildung";
import Schulbesuch from "../views/Schulbesuch";

const labels = [
    'Datenschutz',
    'Persönliche Daten',
    'Ihre Adresse',
    'Nur ausfüllen, wenn Sie unter 18 Jahre sind!',
    'Angaben zu ihrem Ausbildungsbetrieb',
    'Bisherige Schulbesuche',
    ''
]

const views = [
    Datenschutz,
    Persoenliches,
    Wohnort,
    Minder,
    Ausbildung,
    Schulbesuch,
]

interface ILogginFormProps {
    form: Form
    arraySize: number
    isWarningOn: boolean
    progressIndex: number
    updateForm: (obj:object) => void,
    setAreRequiredChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const LogginForm: React.FC<ILogginFormProps> = (props) => {

    const CurrentView = views[props.progressIndex]

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
            >{labels[props.progressIndex]}</Typography>
        </Box>
        {props.progressIndex < views.length && 
        <CurrentView {...props}/>}
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