import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const signup = require("../assets/btn.png")


export default function SignUp() {
    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            paddingTop='6rem'
        >
            <Typography variant="h2" gutterBottom textAlign='center' component="div">Welcome to Redocs</Typography>

            <Typography variant="h4" gutterBottom textAlign='center' component="div">Redocs is a simple Google Docs clone </Typography>

            <Typography variant="h6" gutterBottom textAlign='center' component="div">To get started, sign up with your Google Account</Typography>

            <Box marginTop='6rem'>
                <img src={signup} alt='signup' className='signUp-img' />
            </Box>

        </Box>
    )
}
