import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input/input.component";
import "./login-form.css";

const LoginForm = () => {
    const {handleChange, handleSubmit, register } = useForm();
    return(
        <div className="login-form">
            <h1>Login</h1>
            <p>Kindly enter your details to log in</p>
            <form onSubmit={handleSubmit()}>
                <Input label='Email Address' onChange={handleChange} required/>
            </form>
        </div>
    )
}

export default LoginForm;