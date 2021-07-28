import React from 'react'
import styles from '../../../../styles/login.module.css'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { TextField, Typography, FormControl, OutlinedInput, InputAdornment, IconButton } from '@material-ui/core';
export const PasswordInput = ({ userData, changeHandler, focusHandler, focus, blurHandler, clickHandler, name }) => {
    return (
        <>
            <FormControl fullWidth className={styles.input_container} variant="outlined">
                {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                <OutlinedInput
                    placeholder="Password"
                    // id="outlined-adornment-password"
                    type={userData.formData.password.showPassword ? 'text' : 'password'}
                    value={userData.formData.password.value}
                    onChange={changeHandler}
                    onFocus={() => focusHandler(name)}
                    onBlur={() => blurHandler(name)}
                    name={name}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                                onClick={clickHandler}
                            >
                                {userData.formData.password.showPassword ? <Visibility /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
            </FormControl>
            {(!focus && userData.formData.password.touched && !userData.formData.password.valid && userData.formData.password.value.length > 0) && <Typography className={styles.warning} variant="span">Password should have minimum six characters, at least one letter and one number</Typography>}
        </>
    )
}
export default PasswordInput;
