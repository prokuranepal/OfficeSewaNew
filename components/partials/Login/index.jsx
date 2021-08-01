import React, { useState } from 'react';
import PrimaryButton from '../../global/PrimaryButton'
import { Typography, Button, Box, Grid } from '@material-ui/core';
import Link from 'next/link'
import { emailRegex } from '../../utils/regex';
import { makeStyles } from "@material-ui/styles"
import { HeaderText } from '../../../components/HeaderText';
import { colors } from '../../utils/colors';
import UsernameInput from '../../elements/UsernameInput/UsernameInput'
import PasswordInput from '../../elements/PasswordInput/PasswordInput';
import { FaGooglePlusG } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'

const useStyles = makeStyles({
    mainContainer: {
        height: "90vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1F1F1",
    },
    login: {
        width: "500px",
        minHeight: "400px",
        padding: "4rem",
        backgroundColor: "#fff",
    },
    link: {
        fontSize: "14px",
        color: colors.primaryColor,
        textDecoration: "underline",
        margin: "0.6rem 0",
        display: "inline-block",
    },
    socialContainer: {
        margin: "0 auto"
    },
    socialButton: {
        width: "90%",
        padding: "2rem 0",
        color: "#fff",
        borderRadius: '0'
    },
    primary: {
        background: "#3B5999"
    },
    secondary: {
        background: colors.secondaryColor
    },
    connectText: {
        margin: "3rem 0",
        color: "gray"
    },
    facebook: {
        fontSize: "20px"
    },
    google: {
        fontSize: "24px"
    }
})
// const passwordRegex = new RegExp('^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$');
const passwordRegex = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

const Login = () => {
    const classes = useStyles()
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [userData, setUserData] = React.useState({
        formData: {
            email: {
                elementConfig: {
                    type: "email",
                    placeholder: "Username or email address",
                    name: "email"
                },
                value: '',
                valid: false,
                touched: false,
                validity: {
                    required: true,
                    regex: emailRegex
                }
            },
            password: {
                elementConfig: {
                    type: "password",
                    placeholder: "Password...",
                    name: "password"
                },
                value: '',
                valid: false,
                touched: false,
                showPassword: false,
                validity: {
                    required: true,
                    // regex: passwordRegex
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
    const clickHandler = (name) => {
        // const newState = { ...userData, formData: { ...userData.formData, password: { ...userData.formData.password, showPassword: userData.formData.password.showPassword } } }
        // setUserData(newState)
        setUserData(pre => {
            return { ...pre, formData: { ...pre.formData, [name]: { ...pre.formData[name], showPassword: !pre.formData[name].showPassword } } }
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
        if (name === "email")
            setEmailFocus(true)
        else
            setPasswordFocus(true)
    }
    const blurHandler = (name) => {
        if (name === "email")
            setEmailFocus(false)
        else
            setPasswordFocus(false)
    }
    const submitHandler = (e) => {
        // setEmailFocus(false);
        // setPasswordFocus(false);
        setUserData(pre => {
            return { ...pre, formData: { ...pre.formData, email: { ...pre.formData.email, touched: true }, password: { ...pre.formData.password, touched: true } } }
        })
        console.log(userData, "submitState")
        console.log("hello")
        e.preventDefault()
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
            <form onSubmit={submitHandler}>
                <div className={classes.mainContainer}>
                    <div className={classes.login}>
                        <HeaderText>Log In Your Account</HeaderText>
                        <UsernameInput name="email" blurHandler={blurHandler} focusHandler={focusHandler} changeHandler={changeHandler} userData={userData} focus={emailFocus} />
                        <PasswordInput name="password" changeHandler={changeHandler} clickHandler={clickHandler} userData={userData} focusHandler={focusHandler} blurHandler={blurHandler} focus={passwordFocus} />

                        {/* <Button fullWidth className={classes["primary_button"]} variant="contained" >
                        Login
                    </Button> */}
                        <Link href="#">
                            <a className={classes.link}  >Forgot Password?</a>

                        </Link>
                        <PrimaryButton >Login</PrimaryButton>
                        <Link href="#">
                            <a className={classes.link}  >New Member? Sign_up_Here</a>

                        </Link>
                        <Typography className={classes.connectText} variant="h5">Connect With:</Typography>
                        <Grid container spacing={6} className={classes.socialContainer}>
                            <Grid items xs={12} md={6} >
                                <Button variant="contained" className={`${classes.socialButton}  ${classes.primary}`}  >
                                    <FaFacebookF className={`${classes.icon} ${classes.facebook}`} />
                                </Button>
                            </Grid>
                            <Grid items xs={12} md={6}>
                                <Button variant="contained" className={`${classes.socialButton}  ${classes.secondary}`} color="primary" >
                                    <FaGooglePlusG className={`${classes.icon} ${classes.google}`} />
                                </Button>
                            </Grid>
                        </Grid>



                    </div>

                </div>
            </form>
        </>

    )
}

export default Login;