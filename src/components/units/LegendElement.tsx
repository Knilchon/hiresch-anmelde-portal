import React from "react";
import {Box,  styled } from "@mui/system";
import { Theme } from "../../utils";
import LegendItem from "./LegendItem";

const labels = [
    'Datenschutz',
    'Persönliches',
    'Wohnort',
    'Unter 18?',
    'Ausbildung',
    'Schulbesuch',
    'Bestätigung'
]

interface ILegendElementProps{
    progressIndex: number,
    setIsWarningOn: React.Dispatch<React.SetStateAction<boolean>>,
    setProgressIndex: React.Dispatch<React.SetStateAction<number>>
}

const LegendElement: React.FC<ILegendElementProps> = (props) => {
    return(
    <CustomBox>
        {labels.map((label,index) => (
        <LegendItem 
        key={index}
        label={label} 
        index={index}
        {...props}
        />))}
    </CustomBox>)

}
export default LegendElement;

const CustomBox = styled(Box)({
    display: "flex",
});