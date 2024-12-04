import { Box, Button, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { styled } from '@mui/system';
import { Theme } from "../../utils";
import LegendElement from "./LegendElement";
import LogginForm from "./LogginForm";
import ProgressElement from "./ProgressElement";
import Form, { defaultForm } from "../../types/types";
import { ViewInterface } from "../../types/views";
import formConstruct from "../../types/views";

const LogginBody: React.FC = () => {

    const [progressIndex, setProgressIndex] = useState<number>(0)
    const [areRequiredChecked, setAreRequiredChecked ] = useState<boolean>(false)
    const [isWarningOn, setIsWarningOn] = useState<boolean>(false)
    const [form, setForm] = useState<Form>(defaultForm)
    const [view, setView] = useState<ViewInterface>(formConstruct[0])

    const handleOnClick = () => {
        setProgressIndex((index) => index + 1)
        setIsWarningOn(false)
    }
    
    const updateForm = (obj: object) => {
        setForm((prev) => ({...prev, ...obj}));
    };

    useEffect(()=>{
        setView(formConstruct[progressIndex])
    },[progressIndex])

    return (
        <CustomBox>
            <LegendElement 
            progressIndex={progressIndex}
            setIsWarningOn={setIsWarningOn}
            setProgressIndex={setProgressIndex}
            />
            {view.preText}
            <Box sx={{
                width: '100%'
            }}>
                <LabelCustom>{view.formSection}</LabelCustom>
            </Box>
            {view.postText}
            <LogginForm
                form={form}
                view={view}
                updateForm={updateForm}
                isWarningOn={isWarningOn}
                progressIndex={progressIndex}
                arraySize={formConstruct.length}
                setAreRequiredChecked={setAreRequiredChecked}
            />
            <ProgressElement
                setIsWarningOn={setIsWarningOn}
                areRequiredChecked={areRequiredChecked}
                progressIndex={progressIndex}
                arraySize={formConstruct.length}
                onClick={handleOnClick}
            />
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
    overflow: 'auto',
    justifyContent: "start",
    alignItems: 'center',
    backgroundColor: Theme['white'],
    borderStyle: 'solid',
    borderColor: Theme['lightGray'],
    borderWidth: '3px',
});

const LabelCustom = styled(Typography)({
    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Tahoma, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginTop: '12px',
    marginBottom: '12px',
    color: Theme['darkGray'],
})