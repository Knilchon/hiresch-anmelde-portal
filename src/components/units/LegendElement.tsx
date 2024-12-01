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
    setProgressIndex: React.Dispatch<React.SetStateAction<number>>
}

const LegendElement: React.FC<ILegendElementProps> = ({progressIndex, setProgressIndex}) => {
    return(
    <CustomBox>
        {labels.map((label,index) => (
        <LegendItem 
        label={label} 
        index={index}
        progressIndex={progressIndex}
        setProgressIndex={setProgressIndex}
        />))}
    </CustomBox>)

}
export default LegendElement;

const CustomBox = styled(Box)({
    display: "flex",
});