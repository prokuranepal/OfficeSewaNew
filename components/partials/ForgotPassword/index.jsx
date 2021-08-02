import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import UsernameInput from '../../elements/UsernameInput/UsernameInput'
import { HeaderText } from '../../HeaderText'
import { emailRegex } from '../../utils/regex';
import PrimaryButton from '../../global/PrimaryButton';
const useStyles = makeStyles({
    mainContainer: {
        height: "90vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#F1F1F1",
        paddingTop: "40px"
    },
    forgotPassword: {
        width: "500px",
        minHeight: "400px",
        padding: "4rem",
        backgroundColor: "#fff",
        maxWidth: "100%"
    }
})
const ForgotPassword = () => {
    const classes = useStyles()
    const [emailFocus, setEmailFocus] = useState(false)
    const [userData, setUserData] = useState({
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
        }
    })
    const checkValidity = (values, rules, name) => {
        let isValid = true;
        if (rules.required) {
            isValid = values.trim() !== "" && isValid
        }
        if (rules.regex) {
            isValid = rules.regex.test(values) && isValid

        }
        return isValid

    }
    const changeHandler = (e) => {
        const { value, name } = e.target;
        const newState = { ...userData }
        const updatedFormData = { ...newState.formData }
        const updatedFormElement = { ...updatedFormData[name] }
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormData[name].validity, updatedFormElement.elementConfig.name)
        updatedFormData[name] = updatedFormElement

        setUserData(() => {
            return { formData: updatedFormData }
        })
    }
    const focusHandler = (name) => {
        if (name === "email")
            setEmailFocus(true)

    }
    const blurHandler = (name) => {
        if (name === "email")
            setEmailFocus(false)

    }
    const submitHandler = (e) => {
        setUserData(pre => {
            return { ...pre, formData: { ...pre.formData, email: { ...pre.formData.email, touched: true } } }
        })
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
    console.log(disable, "disable")

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.mainContainer}>
                <div className={classes.forgotPassword}>
                    <HeaderText>Please enter the account that you want to reset the password</HeaderText>
                    <UsernameInput name="email" blurHandler={blurHandler} focusHandler={focusHandler} changeHandler={changeHandler} userData={userData} focus={emailFocus} />
                    <PrimaryButton >Click to Continue</PrimaryButton>
                </div>
            </div>
        </form>
    )
}
export default ForgotPassword;