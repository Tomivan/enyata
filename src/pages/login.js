import React from "react";
import LoginForm from "../components/login-form/login-form.component";
import Starwars from "../components/starwars/starwars.component";

const Login = () => {
    return(
        <div className="page">
            <Starwars />
            <LoginForm />
        </div>
    )
}

export default Login;