import React from 'react'
import { TextField, Typography } from '@material-ui/core'
import styles from '../../styles/login.module.css'

export const UsernameInput = ({ userData, changeHandler, focusHandler, ref, focus, blurHandler, name }) => {
    console.log(focus, "usernameFocus")
    return (
        <>
            <TextField
                ref={ref}
                className={styles.input_container}
                value={userData.formData[name].value}
                name={name}
                onFocus={() => focusHandler(name)}
                onBlur={() => blurHandler(name)}
                onChange={changeHandler}
                fullWidth
                placeholder={userData.formData[name].elementConfig.placeholder}
                type={userData.formData[name].elementConfig.type}
                variant="outlined" />
            {(!focus && userData.formData[name].touched && !userData.formData[name].valid) && <Typography className={styles.warning} variant="span">{userData.formData[name].value.length > 0 ? "Email Address is invalid" : "Email Address Cannot be empty"}</Typography>}

        </>
    )
}
export default UsernameInput;
