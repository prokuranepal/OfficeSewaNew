import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../../theme/colors';
const CustomButton = (props) => {
    const classes = useStyles();
    return (
        <button className={classes.root}>
            {props.title}
        </button>
    )
};

const useStyles = makeStyles({
    root: {
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '20px',
        color: 'white',
        border: 'none',
        fontWeight: 600,
        borderRadius: '4px',
        backgroundColor: colors.primary,
        transition: 'all 0.4s ease',
        cursor: 'pointer',
        
        '&:hover': {
            backgroundColor: colors.secondary
        }
    },

}, { name: 'CustomButton' });

export default CustomButton;