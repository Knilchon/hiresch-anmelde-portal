import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Theme } from "../../utils";

interface IProgressElementProps{
    arraySize: number
    progressIndex: number
    areRequiredChecked: boolean
    onClick: () => void
    setIsWarningOn: React.Dispatch<React.SetStateAction<boolean>>
}

const ProgressElement: React.FC<IProgressElementProps> = ({progressIndex, areRequiredChecked, arraySize, setIsWarningOn, onClick}) => {

    const handleOnClick = () => {
        if(areRequiredChecked){
            onClick()
        }else{
            setIsWarningOn(true)
        }
    }

    return(<CustomBox isShown={progressIndex !== arraySize-1}>
        <Typography sx={{
            color: Theme['darkGray'],
            fontSize: '0.8rem'
        }}
        >Das ist Seite <strong>{progressIndex+1}</strong> von <strong>{arraySize}</strong>. Bitte füllen sie alle Seiten aus. Klicken Sie auf weiter.
        </Typography>
        <button onClick={handleOnClick}>Weiter</button>
    </CustomBox>)
}
export default ProgressElement;

interface ICustomBoxProps{
    isShown: boolean
}

const CustomBox = styled(Box)<ICustomBoxProps>(({isShown}) => ({
    display: isShown ? "flex" : "none",
    flexFlow: "row",
    padding: '10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Theme['yellow'],
    boxShadow: '1px 2px 3px gray',
    marginTop: '10px',
    height: '15px',
    width: 'calc(100% - 20px)',
}));