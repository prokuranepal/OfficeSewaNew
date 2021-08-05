import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../../theme/colors';
const CustomButton = (props) => {
    const useStyles = makeStyles(theme => ({
        root: {
            display: 'inline-block',
            padding: '14px 20px',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '20px',
            color: 'white',
            border: 'none',
            fontWeight: 600,
            borderRadius: '4px',
            // backgroundColor: colors.primary,
            backgroundColor: props.color ? props.color : colors.primary,
            transition: 'all 0.4s ease',
            cursor: 'pointer',

            '&:hover': {
                backgroundColor: colors.secondary
            },


        },

    }), { name: 'CustomButton' });

    const classes = useStyles();
    return (
        <button className={classes.root} style={props.style}>
            {props.title}
        </button>
    )
};


export default CustomButton;