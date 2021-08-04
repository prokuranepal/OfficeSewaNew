import React, { useState } from 'react';
import PrimaryButton from '../../global/PrimaryButton'
import { Typography, Button, Grid } from '@material-ui/core';
import Link from 'next/link'
import UsernameInput from '../../elements/UsernameInput/UsernameInput'
import PasswordInput from '../../elements/PasswordInput/PasswordInput';
import { emailRegex } from '../../utils/regex';
import { passwordRegex } from '../../utils/regex';
import { HeaderText } from '../../HeaderText';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../utils/colors';
import { FaGooglePlusG } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { SiFacebook } from 'react-icons/si'


const useStyles = makeStyles(theme => ({
    mainContainer: {
        height: "60vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#F1F1F1",
        paddingTop: "0px"
    },
    register: {
        width: "500px",
        minHeight: "400px",
        padding: "4rem",
        backgroundColor: "#fff",
        maxWidth: "100%"
    },
    secondaryText: {
        paddingTop: "5px",
        fontSize: "18px",
        lineHeight: "21px",
        fontWeight: "400",
        color: '#000000',
        paddingBottom: "10px"
    },
    link: {
        fontSize: "14px",
        color: colors.primaryColor,
        textDecoration: "underline",
        margin: "0.6rem 0",
        display: "inline-block",
    },
    line: {
        margin: "2.4rem 0",
        height: "1px",
        backgroundColor: "#A1A1A1",

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
    options: {
        fontSize: "16px",
        lineHeight: "18px",
        color: "#000000",
        margin: "1rem 0",

    },


    primaryButton: {
        background: "#fff"

    },
    secondaryButton: {
        background: "#fff"

    },
    member: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "18px",
        color: "#000000",
        paddingTop: "2rem"
    },
    loginLink: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "18px",
        color: colors.primaryColor
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

    },
    optionsText: {
        fontSize: "18px",
        lineHeight: "21px",
        fontWeight: "500",
        color: "#000000",
        textTransform: "capitalize"

    },

}))

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
                        <HeaderText>Welcome to Office Sewa</HeaderText>
                        <Typography variant="h4" className={classes.secondaryText}>Register an account here</Typography>

                        <UsernameInput name="email" blurHandler={blurHandler} focusHandler={focusHandler} changeHandler={changeHandler} userData={userData} focus={emailFocus} />
                        <PasswordInput name="password" changeHandler={changeHandler} clickHandler={clickHandler} userData={userData} focusHandler={focusHandler} blurHandler={blurHandler} focus={passwordFocus} />


                        {/* <Button fullWidth className={styles["primary_button"]} variant="contained" >
                Login
            </Button> */}
                        <PrimaryButton >Register</PrimaryButton>
                        <Typography variant="h6" className={classes.member}>Already a member?
                            <Link href="/login">
                                <a className={classes.loginLink}  > Login here.</a>
                            </Link>
                        </Typography>
                        <div className={classes.line}></div>

                        <Typography className={classes.options} variant="h5">Or, register with:</Typography>
                        <Grid container spacing={6} className={classes.socialContainer}>
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
export default Register;