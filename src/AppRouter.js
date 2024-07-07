import React from 'react';
import "./index.css";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Box, Typography } from '@mui/material';

function Copyright() {
    return(
        <Typography variant="body2" color="textSecondary" align="center">
            
            20200841 유예원 {new Date().getFullYear}
        </Typography>
    );
}

function AppRouter() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
    );
};

export default AppRouter;