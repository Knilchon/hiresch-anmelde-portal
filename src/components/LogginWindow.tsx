import { Box } from "@mui/material"
import React from "react"
import { styled } from '@mui/system';
import LogginBanner from "./units/LogginBanner";
import LogginBody from "./units/LogginBody";

const LogginWindow: React.FC = () => {
    return(
    <LogginBox>
        <LogginBanner/>
        <LogginBody/>
    </LogginBox>
    )
}
export default LogginWindow

const LogginBox = styled(Box)({
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: 'orange',
    height: 'auto',
    width: '70%',
});