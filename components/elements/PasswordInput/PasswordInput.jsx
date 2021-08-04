import React from 'react'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { TextField, Typography, FormControl, OutlinedInput, InputAdornment, IconButton, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles({
    inputContainer: {
        margin: "1rem 0",
        borderRadius: "6px"
    },
    input: {
        fontSize: "16px",
        '&::placeholder': {
            fontSize: "18px"
        }
    },
    warning: {
        display: "block",
        color: "rgba(240, 18, 10, 0.883)",
        fontSize: "12px",
        marginTop: "-10px",
    }
})
export const PasswordInput = ({ userData, changeHandler, focusHandler, focus, blurHandler, clickHandler, name, }) => {
    const classes = useStyles()
    return (
        <>
            <FormControl fullWidth className={classes.inputContainer} variant="outlined">
                {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                <OutlinedInput className={classes.input}
                    placeholder={userData.formData[name].elementConfig.placeholder}
                    // id="outlined-adornment-password"
                    type={userData.formData[name].showPassword ? 'text' : 'password'}
                    value={userData.formData[name].value}
                    onChange={changeHandler}
                    onFocus={() => focusHandler(name)}
                    onBlur={() => blurHandler(name)}
                    name={name}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                                onClick={() => clickHandler(name)}
                            >
                                {userData.formData[name].showPassword ? <Visibility /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
            </FormControl>
            {(!focus && userData.formData[name].touched && !userData.formData[name].valid && userData.formData[name].value.length > 0) && <Typography className={classes.warning} variant="span">{userData.formData[name].validity.reEnterPassword ? "Password Didn't Match" : "Password should have minimum six characters, at least one letter and one number"}</Typography>}
            {(!focus && userData.formData[name].touched && userData.formData[name].value.length <= 0) && <Typography className={classes.warning} variant="span">Password cannot be empty</Typography>}

        </>
    )
}
export default PasswordInput;
