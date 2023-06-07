import React, { useEffect } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { auth, database } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { query, collection, getDocs, where, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const signup = require("../assets/btn.png")


export default function SignUp() {

    const [user, loading, error] = useAuthState(auth)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const googleSignIn = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider)
            const user = res.user
            console.log(user);

            const q = query(collection(database, "users"), where("uid", "==", user.uid))
            const docs = await getDocs(q)
            if (docs.docs.length === 0) {
                await addDoc(collection(database, "users"), {
                    uid: user.uid,
                    name: user.displayName,
                    authProvider: "google",
                    email: user.email
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/docs")
    }, [user, loading, navigate])
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
                <img src={signup} alt='signup' className='signUp-img' onClick={googleSignIn} />
            </Box>

        </Box>
    )
}
