// import React, { useState } from 'react'
// import UsernameInput from '../../elements/UsernameInput/UsernameInput'
// import PasswordInput from '../../elements/PasswordInput/PasswordInput'
// import Link from 'next/link'
// import PrimaryButton from '../../global/PrimaryButton'
// import { passwordRegex } from '../../utils/regex'
// import { makeStyles } from '@material-ui/styles'
// import { colors } from '../../utils/colors'
// import { HeaderText } from '../../HeaderText'
// const useStyles = makeStyles({
//     changePassword: {
//         width: "100vw",
//         minHeight: "60vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "flex-start",
//         background: "#f1f1f1",
//         padding: "4rem"
//     },
//     container: {
//         width: "500px",
//         minHeight: "300px",
//         maxWidth: "100%",
//         background: "#fff",
//         padding: "4rem"
//     },
//     link: {
//         display: "inline-block",
//         fontSize: "18px",
//         color: colors.primaryColor,
//         margin: "1rem 0"
//     }
// })

// export const ChangePassword = () => {
//     const classes = useStyles()
//     const [password1Focus, setPassword1Focus] = useState(false)
//     const [password2Focus, setPassword2Focus] = useState(false)

//     const [userData, setUserData] = React.useState({
//         formData: {
//             password1: {
//                 elementConfig: {
//                     type: "text",
//                     placeholder: "New Password",
//                     name: "password1"
//                 },
//                 value: '',
//                 valid: false,
//                 touched: false,
//                 validity: {
//                     required: true,
//                     regex: passwordRegex,
//                     check: true,

//                 }
//             },
//             password2: {
//                 elementConfig: {
//                     type: "password",
//                     placeholder: "Confirm New Password",
//                     name: "password2"
//                 },
//                 value: '',
//                 valid: false,
//                 touched: false,
//                 showPassword: false,

//                 validity: {
//                     required: true,
//                     reEnterPassword: true,
//                     check: true,
//                 }
//             }
//         }
//     });
//     const checkValidity = (values, rules, name) => {
//         let isValid = true;
//         if (rules.required) {
//             isValid = values.trim() !== "" && isValid
//         }
//         if (rules.minLength) {
//             isValid = values.length >= 3 && isValid
//         }
//         if (rules.regex) {
//             isValid = rules.regex.test(values) && isValid

//         }
//         if (rules.reEnterPassword) {
//             if (name === "password2") {
//                 isValid = (values == userData.formData.password1.value) && isValid;
//                 // console.log(val, "check2")
//                 console.log(values, userData.formData.password1.value, "value")

//                 console.log(isValid, "valid")
//             }
//             // if (name === "password1") {
//             //     isValid = (values == userData.formData.password2.value) && isValid;
//             //     console.log(values, userData.formData.password2.value, "value")
//             //     console.log(isValid, "isValid")
//             // }
//         }

//         return isValid;
//     }
//     const clickHandler = (name) => {

//         setUserData(pre => {
//             return { ...pre, formData: { ...pre.formData, [name]: { ...pre.formData[name], showPassword: !pre.formData[name].showPassword } } }
//         })
//     }
//     const changeHandler = (e) => {
//         const { value, name } = e.target;
//         const newState = { ...userData }
//         const updatedFormData = { ...newState.formData }
//         const updatedFormElement = { ...updatedFormData[name] }
//         updatedFormElement.value = value;
//         updatedFormElement.touched = true;
//         updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormData[name].validity, updatedFormElement.elementConfig.name)
//         updatedFormData[name] = updatedFormElement

//         setUserData(() => {
//             return { formData: updatedFormData }
//         })
//         console.log(updatedFormElement, "element")
//     }
//     const focusHandler = (name) => {
//         if (name === "password1")
//             setPassword1Focus(true)
//         else
//             setPassword2Focus(true)
//     }
//     const blurHandler = (name) => {
//         if (name === "password1")
//             setPassword1Focus(false)
//         else
//             setPassword2Focus(false)
//     }
//     const submitHandler = (e) => {
//         setUserData(pre => {
//             return { ...pre, formData: { ...pre.formData, password1: { ...pre.formData.password1, touched: true }, password2: { ...pre.formData.password2, touched: true } } }
//         })
//         e.preventDefault()
//     }
//     const formDataArray = [];
//     for (let key in userData.formData) {
//         formDataArray.push({ id: key, formData: userData.formData[key] })
//     }
//     // console.log(formDataArray, "array")
//     let disable = false;
//     // let isDisable = Object.values(userData.formData).forEach(val => val.valid && (disable = false))
//     Object.values(userData.formData).forEach(val => val.valid === false && (disable = true))
//     console.log(disable, "disable")
//     return (
//         <form onSubmit={submitHandler}>
//             <div className={classes.changePassword} >
//                 <div className={classes.container}>
//                     <HeaderText>Set New Password</HeaderText>

//                     <PasswordInput name="password1" changeHandler={changeHandler} clickHandler={clickHandler} userData={userData} focusHandler={focusHandler} blurHandler={blurHandler} focus={password1Focus} />
//                     <PasswordInput name="password2" changeHandler={changeHandler} clickHandler={clickHandler} userData={userData} focusHandler={focusHandler} blurHandler={blurHandler} focus={password2Focus} />
//                     <PrimaryButton swubmitHandler={submitHandler}>Change Password</PrimaryButton>
//                 </div>
//             </div>
//         </form>
//     )
// }
// export default ChangePassword;
