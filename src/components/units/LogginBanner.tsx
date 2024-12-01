import { Box, Typography } from "@mui/material"
import React from "react"
import { styled } from '@mui/system';
import SchoolLogo from '../../schoolLogo.png'
import { Theme } from "../../utils";

const LogginBanner: React.FC = () => {
    return(
    <CustomBox>
        <Box sx={{
            display: 'flex',
            flexFlow: 'column',
            height: 'inherit',
            alignItems: "center",
            justifyContent: "center",
            width: '100px'
        }}>
            <CustomImg src={SchoolLogo}></CustomImg>
            <TypographyCustom>OBERSTUFENZENTRUM</TypographyCustom>
            <TypographyCustom>GESUNDHEIT/MEDIZIN</TypographyCustom>
        </Box>
        <Typography sx={{
        color: 'white',
        fontFamily: 'Lucida Grande,Lucida Sans Unicode, Tahoma, sans-serif',
        fontWeight: 'bold',
        paddingRight: '50px',
        paddingLeft: '50px',
        fontSize: '1rem'
        }}
        >Anmeldung zur Ausbildung als MFA / ZFA an der Rahel-Hirsch-Schule</Typography>
    </CustomBox>
    )
}
export default LogginBanner

const CustomBox = styled(Box)({
    display: "flex",
    flexFlow: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: '10px',
    backgroundColor: Theme['gray'],
    height: '100px',
    width: 'auto',
});

const CustomImg = styled('img')({
    // display: 'inline',
    height: '70%',
    width: 'auto',
    marginBottom: '2px'
});

const TypographyCustom = styled(Typography)({
    color: 'white',
    fontSize: '0.5rem',
    fontFamily: 'Helvetica',
    display: 'flex',
});