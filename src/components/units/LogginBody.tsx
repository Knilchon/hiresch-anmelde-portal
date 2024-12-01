import { Box, Button, Typography } from "@mui/material"
import React, { useState } from "react"
import { styled } from '@mui/system';
import { Theme } from "../../utils";
import LegendElement from "./LegendElement";
import LogginForm from "./LogginForm";
import ProgressElement from "./ProgressElement";
import Form, { defaultForm } from "../../types/types";

const labels = [
    'Datenschutz',
    'Persönliches',
    'Wohnort',
    'Unter 18?',
    'Ausbildung',
    'Schulbesuch',
    'Geschafft!'
]

const LogginBody: React.FC = () => {

    const [progressIndex, setProgressIndex] = useState(0)

    const [form, setForm] = useState<Form>(defaultForm)

    const handleOnClick = () => {
        setProgressIndex((index) => index + 1)
    }

    const updateForm = (obj: object) => {
        setForm((prev) => ({...prev, ...obj}));
    };

    return (
        <CustomBox>
            <LegendElement 
            progressIndex={progressIndex}
            setProgressIndex={setProgressIndex}
            />
            {/* <BeginningAndEndTextElement/> */}
            <Box sx={{
                width: '100%'
            }}>
                <LabelCustom sx={{
                    color: Theme['darkGray'],
                    fontSize: '1.5rem',
                }}
                >{labels[progressIndex]}</LabelCustom>
            </Box>
            <LogginForm
                form={form}
                updateForm={updateForm}
                progressIndex={progressIndex}
                arraySize={labels.length}
            />
            <ProgressElement
                progressIndex={progressIndex}
                arraySize={labels.length}
                onClick={handleOnClick}
            />
            <Button onClick={()=>{console.log(form)}}>Test</Button>
        </CustomBox>
    )
}
export default LogginBody;

const CustomBox = styled(Box)({
    display: "flex",
    flexFlow: "column",
    flexGrow: '1',
    padding: '10px',
    paddingLeft: '45px',
    paddingRight: '45px',
    overflow: 'scroll',
    justifyContent: "start",
    alignItems: 'center',
    backgroundColor: Theme['white'],
    borderStyle: 'solid',
    borderColor: Theme['lightGray'],
    borderWidth: '3px',
});

const LabelCustom = styled(Typography)({

})