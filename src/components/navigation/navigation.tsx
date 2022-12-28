import React from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    return (isMobile ? <div>Mobile Nav</div> : <div>Desktop Nav</div>)
}