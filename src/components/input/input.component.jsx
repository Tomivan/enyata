import React from "react";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import "./input.css";

const Input = (props) => {
    const { control } = useFormContext();
    const {type = 'text', name='', label, placeholder= ''} = props;
    return(
        <div className="">
            <Controller control={control} name={name} render={({ field: {onChange, value}, fieldState: {error}}) =>(
                <TextField
                type={type}
                label={label}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                error = {error}
                 />
            )} />
        </div>
    )
}

export default Input;