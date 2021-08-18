import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import { colors } from '../utils/colors';
const useStyles = makeStyles({
    headerText: {
        fontSize: "24px",
        color: colors.primaryColor,
        padding: "1rem 0",
        fontWeight: "500",
        lineHeight: "28px"
    },
    secondaryText: {
        paddingTop: "5px",
        fontSize: "18px",
        lineHeight: "21px",
        fontWeight: "400",
        color: '#000000'
    },

})
// export const SubHeaderText = (props) => {
//     const classes = makeStyles()
//     return (
//         <Typography variant="h4" className={classes.secondaryText}>{props.children}</Typography>

//     )
// }
export const HeaderText = (props) => {
    const classes = useStyles()
    return (
        <Typography variant="span" className={classes.headerText}>{props.children}</Typography>
    )
}


