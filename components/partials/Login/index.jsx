import React, { useState } from 'react';
import PrimaryButton from '../../global/PrimaryButton'
import { Typography, Button, Box, Grid } from '@material-ui/core';
import Link from 'next/link'
import { emailRegex } from '../../utils/regex';
import { makeStyles } from "@material-ui/core/styles"
import { HeaderText } from '../../../components/HeaderText/index';
import { colors } from '../../utils/colors';
import UsernameInput from '../../elements/UsernameInput/UsernameInput'
import PasswordInput from '../../elements/PasswordInput/PasswordInput';
import { FaGooglePlusG } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { SiFacebook } from 'react-icons/si'
import { SubHeaderText } from '../../../components/HeaderText/index';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        // height: "60vh",
        // width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#F1F1F1",
    },
    login: {
        width: "500px",
        minHeight: "400px",
        padding: "4rem",
        backgroundColor: "#fff",
        maxWidth: "100%"
    },

    linkContainer: {
        display: "block",
        display: "flex",
        justifyContent: "flex-end"
    },
    forgotLink: {
        fontSize: "16px",
        color: colors.primaryColor,
        // textDecoration: "underline",
        margin: "0.6rem 0",
        display: "inline-block",
        fontWeight: "500",
    },
    memberLink: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "18px",
        color: colors.primaryColor
    },
    line: {
        margin: "2.4rem 0",
        height: "1px",
        backgroundColor: "#A1A1A1",

    },
    member: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "18px",
        color: "#000000",
        paddingTop: "2rem"
    },
    socialContainer: {
        margin: "0 auto",
        width: "100%"
    },
    socialButton: {
        width: "100%",
        height: "100%",
        padding: "2rem 0",
        color: "#fff",
        borderRadius: '0',
        boxShadow: "none",
    },
    options: {
        fontSize: "16px",
        lineHeight: "18px",
        color: "#000000",
        margin: "1rem 0",

    },
    primaryButtonContainer: {
        width: "40%",
        height: "60px",
        border: "1px solid #C4C4C4",
        [theme.breakpoints.up('md')]: {
            // paddingRight: "1rem"
            maxWidth: "46%",
            marginRight: "10px"
        }
    },
    secondaryButtonContainer: {
        border: "1px solid #C4C4C4",
        height: "60px",
        [theme.breakpoints.up('md')]: {
            // paddingLeft: "1rem"
            maxWidth: "46%",
            marginLeft: "10px"
        }
    },
    primaryButton: {
        background: "#fff"

        // backgroundColor: "#3B5999",
        // '&:hover': {
        //     backgroundColor: "#1966d1"
        // }
    },
    optionsText: {
        fontSize: "18px",
        lineHeight: "21px",
        fontWeight: "500",
        color: "#000000",
        textTransform: "capitalize"

    },
    secondaryText: {
        paddingTop: "5px",
        fontSize: "18px",
        lineHeight: "21px",
        fontWeight: "400",
        color: '#000000',
        paddingBottom: "10px"
    },
    secondaryButton: {
        background: "#fff"
        // background: colors.secondaryColor,
        // paddingLeft: "1rem",
        // '&:hover': {
        //     backgroundColor: "#ba0921"
        // }
    },
    facebook: {
        display: "inline-block",
        fontSize: "24px",
        color: colors.primaryColor,
        marginRight: "10px"
    },
    google: {
        fontSize: "24px",
        marginRight: "10px"

    }
}))
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
                        <HeaderText>Welcome to Office Sewa</HeaderText>
                        <Typography variant="h4" className={classes.secondaryText}>Please Login.</Typography>
                        {/* <SubHeaderText>Please Login</SubHeaderText> */}
                        <UsernameInput name="email" blurHandler={blurHandler} focusHandler={focusHandler} changeHandler={changeHandler} userData={userData} focus={emailFocus} />
                        <PasswordInput name="password" changeHandler={changeHandler} clickHandler={clickHandler} userData={userData} focusHandler={focusHandler} blurHandler={blurHandler} focus={passwordFocus} />

                        {/* <Button fullWidth className={classes["primary_button"]} variant="contained" >
                        Login
                    </Button> */}
                        <div className={classes.linkContainer}>
                            <Link href="/ForgotPassword">
                                <a className={classes.forgotLink}  >Forgot Password?</a>
                            </Link>
                        </div>
                        <PrimaryButton >Login</PrimaryButton>
                        <Typography variant="h6" className={classes.member}>New Member?
                            <Link href="/Register">
                                <a className={classes.memberLink}  > Create an account</a>
                            </Link>
                        </Typography>
                        <div className={classes.line}></div>
                        <Typography className={classes.options} variant="h5">Or, login with:</Typography>
                        <Grid container className={classes.socialContainer}>
                            <Grid items xs={12} md={6} className={classes.primaryButtonContainer} >
                                <Button variant="contained" className={`${classes.socialButton}  ${classes.primaryButton}`}  >
                                    <SiFacebook className={`${classes.icon} ${classes.facebook}`} />
                                    <Typography variant="span" className={classes.optionsText}>Facebook</Typography>
                                </Button>
                            </Grid>
                            <Grid items xs={12} md={6} className={classes.secondaryButtonContainer}>
                                <Button variant="contained" className={`${classes.socialButton}  ${classes.secondaryButton}`}  >
                                    <FcGoogle className={`${classes.icon} ${classes.google}`} />
                                    <Typography variant="span" className={classes.optionsText}>Google</Typography>
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