import React from "react";
import { Navigate } from "react-router-dom";
import { useForm} from "react-hook-form";
import { Button } from "@mui/material";
import "./login-form.css";

const LoginForm = () => {
    const { handleSubmit, register } = useForm();
    const login = () => {
        Navigate('/overview')
    }
    return(
        <div className="login-form">
            <h1>Login</h1>
            <p>Kindly enter your details to log in</p>
            <form onSubmit={handleSubmit(login)}>
                <label>Email Address</label>
                <input type="email" {...register("email", {required: true})} />
                <label>Password</label>
                <input type="password" {...register("password", { pattern: /[0-9a-zA-Z]{6,}/ },{required: true})} />
                <Button size="medium" sx={{border: 1, borderRadius: '5px', mt:3, height: 7, p: 2, color: '#ffffff', backgroundColor: '#0a74dc', width: 300}}>
                            Log in
                </Button>
            </form>
            <p className="blue">Forgot your password?</p>
            <p className="privacy">Privacy Policy and Terms of services</p>
        </div>
    )
}

export default LoginForm;