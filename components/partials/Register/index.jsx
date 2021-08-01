import React, { useState } from 'react';
import PrimaryButton from '../../global/PrimaryButton'
import { Typography, Button, Grid } from '@material-ui/core';
import Link from 'next/link'
import UsernameInput from '../../elements/UsernameInput/UsernameInput'
import PasswordInput from '../../elements/PasswordInput/PasswordInput';
import { emailRegex } from '../../utils/regex';
import { passwordRegex } from '../../utils/regex';
import { HeaderText } from '../../HeaderText';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../utils/colors';
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
    register: {
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
        borderRadius: "0"
    },
    primary: {
        background: colors.primaryColor
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

export const Register = () => {
    const classes = useStyles()
    const [emailFocus, setEmailFocus] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [userData, setUserData] = React.useState({
        formData: {
            email: {
                elementConfig: {
                    type: "text",
                    placeholder: "Email Address",
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

        if (rules.regex) {
            isValid = rules.regex.test(values) && isValid
            console.log(isValid, "valid")

        }


        return isValid;
    }
    const clickHandler = (name) => {
        // const newState = { ...userData, formData: { ...userData.formData, password: { ...userData.formData.password, showPassword: userData.formData.password.showPassword } } }
        // setUserData(newState)
        setUserData(pre => {
            ["secondary"]
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
        setEmailFocus(false);
        setPasswordFocus(false);
        setUserData(pre => {
            return { ...pre, formData: { ...pre.formData, email: { ...pre.formData.email, touched: true }, password: { ...pre.formData.password, touched: true } } }
        })
        console.log(userData, "submitdata")

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
                    <div className={classes.register}>
                        <HeaderText>Register an Account</HeaderText>
                        <UsernameInput name="email" blurHandler={blurHandler} focusHandler={focusHandler} changeHandler={changeHandler} userData={userData} focus={emailFocus} />
                        <PasswordInput name="password" changeHandler={changeHandler} clickHandler={clickHandler} userData={userData} focusHandler={focusHandler} blurHandler={blurHandler} focus={passwordFocus} />


                        {/* <Button fullWidth className={styles["primary_button"]} variant="contained" >
                Login
            </Button> */}
                        <PrimaryButton >Register</PrimaryButton>
                        <Link href="#">
                            <a className={classes.link}  >Already a Member? Login Here</a>

                        </Link>
                        <Typography className={classes.connectText} variant="h5">Connect With:</Typography>
                        <Grid container spacing={6} className={classes.socialContainer}>
                            <Grid items xs={12} md={6} >
                                <Button variant="contained" className={`${classes.socialButton}  ${classes.primary}`}  >
                                    <FaFacebookF className={`${classes.icon} ${classes.facebook}`} />
                                </Button>
                            </Grid>
                            <Grid items xs={12} md={6}>
                                <Button variant="contained" className={`${classes.socialButton}  ${classes.secondary}`}  >
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
export default Register;