import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { colors } from '../utils/colors';
const useStyles = makeStyles({
    primaryButton: {
        padding: " 1.2rem 0 ",
        backgroundColor: colors.primaryColor,
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "21px",
        textTransform: "capitalize",
        margin: "1rem 0 ",
        color: "#fff",
        '&:hover': {
            backgroundColor: "#2821B5"
        }
    }
})
const PrimaryButton = (props) => {
    const classes = useStyles()
    const { submitHandler } = props
    return (
        <Button type="submit" fullWidth onSubmit={(e) => submitHandler(e)} className={classes.primaryButton} variant="contained" >
            {props.children}
        </Button>
    )
}
export default PrimaryButton
