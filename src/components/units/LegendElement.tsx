import React from "react";
import {Box,  styled } from "@mui/system";
import LegendItem from "./LegendItem";
import formConstruct from "../../types/views";

interface ILegendElementProps{
    progressIndex: number,
    setIsWarningOn: React.Dispatch<React.SetStateAction<boolean>>,
    setProgressIndex: React.Dispatch<React.SetStateAction<number>>
}

const LegendElement: React.FC<ILegendElementProps> = (props) => {
    return(
    <CustomBox>
        {formConstruct().map((section,index) => (
        <LegendItem 
        key={index}
        label={section.legendTitle} 
        isClickable={index <= props.progressIndex-1 && props.progressIndex !== formConstruct().length-1}
        index={index}
        {...props}
        />))}
    </CustomBox>)

}
export default LegendElement;

const CustomBox = styled(Box)({
    display: "flex",
    marginBottom: '10px'
});