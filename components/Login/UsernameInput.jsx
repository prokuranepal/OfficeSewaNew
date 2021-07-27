import React from 'react'
import { TextField, Typography } from '@material-ui/core'
import styles from '../../styles/login.module.css'

export const UsernameInput = ({ userData, changeHandler, focusHandler, ref, focus, blurHandler }) => {
    console.log(focus, "usernameFocus")
    return (
        <>
            <TextField
                ref={ref}
                className={styles.input_container}
                value={userData.formData.username.value}
                name="username"
                onFocus={() => focusHandler("username")}
                onBlur={() => blurHandler("username")}
                onChange={changeHandler}
                fullWidth placeholder="Username or email address"
                type="text"
                variant="outlined" />
            {(!focus && userData.formData.username.touched && !userData.formData.username.valid && userData.formData.username.value.length > 0) && <Typography className={styles.warning} variant="span">Username should be more than 3 characters</Typography>}

        </>
    )
}
export default UsernameInput;
