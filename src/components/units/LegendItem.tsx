import React from "react";
import {Box,  styled } from "@mui/system";
import { Theme } from "../../utils";
import { Typography } from "@mui/material";

interface ILegendItemProps{
    label: string,
    index: number,
    progressIndex: number,
    setIsWarningOn: React.Dispatch<React.SetStateAction<boolean>>,
    setProgressIndex: React.Dispatch<React.SetStateAction<number>>
}

const LegendItem: React.FC<ILegendItemProps> = ({label, index, progressIndex, setIsWarningOn, setProgressIndex}) => {

    const handleOnClick = () => {
        if(index <= progressIndex-1){
            setProgressIndex(index)
            setIsWarningOn(false)
        }
    }

    return(
    <CustomBox 
    onClick={handleOnClick}
    isActivated={index <= progressIndex}
    isClickable={index <= progressIndex-1}
    >
        <Typography sx={{
            fontSize: '0.7rem'
        }}
        >{label}</Typography>
    </CustomBox>)

}
export default LegendItem;

interface CustomeBoxProps {
    isActivated?: boolean;
    isClickable?: boolean
  }

const CustomBox = styled(Box)<CustomeBoxProps>((props) =>({
    display: "flex",
    height: '20px',
    width: '100px',
    margin: '1px',
    borderRadius: '2px',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: props.isActivated ? Theme['gray'] : Theme['lightGray'],
    color: props.isActivated ? Theme['white'] : Theme['gray'],
    ':hover':{
        backgroundColor: props.isClickable ? Theme['darkGray'] : 
        props.isActivated ? Theme['gray'] : Theme['lightGray'],
    }
}));