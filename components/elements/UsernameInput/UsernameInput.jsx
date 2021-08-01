import React from 'react'
import { TextField, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
const useStyles = makeStyles({
    inputContainer: {
        margin: "1.6rem 0",
        borderRadius: "6px",
    },
    input: {
        '& .MuiInputBase-input': {

            fontSize: "18px"
        }
    },
    warning: {
        display: "block",
        color: "rgba(240, 18 , 10 , 0.883)",
        fontSize: "12px",
        marginTop: "-10px",
    }


})

export const UsernameInput = ({ userData, changeHandler, focusHandler, ref, focus, blurHandler, name }) => {
    const classes = useStyles()
    return (
        <>
            <TextField
                ref={ref}
                className={`${classes.inputContainer} ${classes.input} `}
                value={userData.formData[name].value}
                name={name}
                onFocus={() => focusHandler(name)}
                onBlur={() => blurHandler(name)}
                onChange={changeHandler}
                fullWidth
                placeholder={userData.formData[name].elementConfig.placeholder}
                type={userData.formData[name].elementConfig.type}
                variant="outlined" />
            {(!focus && userData.formData[name].touched && !userData.formData[name].valid) && <Typography className={classes.warning} variant="span">{userData.formData[name].value.length > 0 ? "Email Address is invalid" : "Email Address Cannot be empty"}</Typography>}

        </>
    )
}
export default UsernameInput;
