import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { colors } from '../utils/colors';
const useStyles = makeStyles({
    primaryButton: {
        padding: " 1.6rem 0 ",
        backgroundColor: colors.primary,
        fontWeight: "bold",
        fontSize: "1.6rem",
        textTransform: "capitalize",
        margin: "3rem 0 "
    }
})
const PrimaryButton = (props) => {
    const classes = useStyles()
    const { submitHandler } = props
    return (
        <Button type="submit" fullWidth onSubmit={(e) => submitHandler(e)} className={classes.primaryButton} variant="contained" color="primary">
            {props.children}
        </Button>
    )
}
export default PrimaryButton
