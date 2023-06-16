import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form";
import "./login-form.css";

const LoginForm = () => {
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();
    const login = () => {
        navigate('/overview')
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
                <button className="button"> Log in </button>
            </form>
            <p className="blue">Forgot your password?</p>
            <p className="privacy">Privacy Policy and Terms of services</p>
        </div>
    )
}

export default LoginForm;