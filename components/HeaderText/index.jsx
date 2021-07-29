import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { colors } from '../utils/colors';
const useStyles = makeStyles({
    headerText: {
        fontSize: "18px",
        color: colors.primaryColor,
        padding: "1rem 0",
    }

})
export const HeaderText = (props) => {
    const classes = useStyles()
    return (
        <Typography variant="span" className={classes.headerText}>{props.children}</Typography>
    )
}
