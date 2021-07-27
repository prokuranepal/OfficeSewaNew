import React, { useState } from 'react';
import { Typography, Button, Box, Grid } from '@material-ui/core';
import Link from 'next/link'
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from '../../styles/login.module.css'
import UsernameInput from './UsernameInput'
import PasswordInput from './PasswordInput';
// const passwordRegex = new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$');
const passwordRegex = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

const Login = () => {
    const [usernameFocus, setUsernameFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [userData, setUserData] = React.useState({
        formData: {
            username: {
                elementConfig: {
                    type: "text",
                    placeholder: "Username or email address",
                    name: "username"
                },
                value: '',
                valid: false,
                touched: false,
                validity: {
                    required: true,
                    minLength: 3
                }
            },
            password: {
                elementConfig: {
                    type: "password",
                    placeholder: "Password",
                    name: "password"
                },
                value: '',
                valid: false,
                touched: false,
                showPassword: false,
                validity: {
                    required: true,
                    regex: passwordRegex
                }
            }
        }
    });

    const checkValidity = (values, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = values.trim() !== "" && isValid
        }
        if (rules.minLength) {
            isValid = values.length >= 3 && isValid
        }
        if (rules.regex) {
            isValid = rules.regex.test(values) && isValid

        }

        return isValid;
    }
    const clickHandler = () => {
        // const newState = { ...userData, formData: { ...userData.formData, password: { ...userData.formData.password, showPassword: userData.formData.password.showPassword } } }
        // setUserData(newState)
        setUserData(pre => {
            return { ...pre, formData: { ...pre.formData, password: { ...pre.formData.password, showPassword: !pre.formData.password.showPassword } } }
        })
    }
    const changeHandler = (e) => {
        const { value, name } = e.target;
        console.log(value, name)
        const newState = { ...userData }
        const updatedFormData = { ...newState.formData }
        const updatedFormElement = { ...updatedFormData[name] }
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormData[name].validity)
        updatedFormData[name] = updatedFormElement
        // userData = updatedFormData;
        // setUserData(newStated)
        setUserData(() => {
            return { formData: updatedFormData }
        })
        console.log(updatedFormElement, "element")
    }
    const focusHandler = (name) => {
        if (name === "username")
            setUsernameFocus(true)
        else
            setPasswordFocus(true)
    }
    const blurHandler = (name) => {
        if (name === "username")
            setUsernameFocus(false)
        else
            setPasswordFocus(false)
    }

    const formDataArray = [];
    for (let key in userData.formData) {
        formDataArray.push({ id: key, formData: userData.formData[key] })
    }
    // console.log(formDataArray, "array")
    let disable = false;
    // let isDisable = Object.values(userData.formData).forEach(val => val.valid && (disable = false))
    Object.values(userData.formData).forEach(val => val.valid === false && (disable = true))

    console.log(disable, "isDisable")
    console.log(userData, "newState")

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.login_container}>
                    <Link href="#">
                        <a className={styles.link} > Log In Your Account</a>

                    </Link>
                    <UsernameInput name="username" blurHandler={blurHandler} focusHandler={focusHandler} changeHandler={changeHandler} userData={userData} focus={usernameFocus} />
                    <PasswordInput name="password" changeHandler={changeHandler} clickHandler={clickHandler} userData={userData} focusHandler={focusHandler} blurHandler={blurHandler} focus={passwordFocus} />

                    <Link href="#">
                        <a className={styles.sm_link}  >Forgot password?</a>

                    </Link>
                    <Button fullWidth className={styles["primary_button"]} variant="contained" color="primary">
                        Login
                    </Button>
                    <Link href="#">
                        <a className={styles.sm_link}  >New Member? Sign_up_Here</a>

                    </Link>
                    <Typography className={styles.connect_text} variant="h5">Connect With:</Typography>
                    <Grid container spacing={6} className={styles.social_container}>
                        <Grid items xs={12} md={6} >
                            <Button variant="contained" className={`${styles["social_button"]}  ${styles["primary"]}`} color="primary" >
                                <FacebookIcon />

                            </Button>
                        </Grid>
                        <Grid items xs={12} md={6}>
                            <Button variant="contained" className={`${styles["social_button"]}  ${styles["secondary"]}`} color="primary" >
                                <FacebookIcon />

                            </Button>
                        </Grid>

                    </Grid>
                </div>
            </div>
        </>

    )
}

export default Login;