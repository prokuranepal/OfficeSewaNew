import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../../theme/colors';
import Link from '@material-ui/core/Link';
import LinkButton from '../LinkButton';
const CustomButton = (props) => {
    const classes = useStyles(props);
    return (
        <Link href={props.url} className={classes.link}>
            <button className={classes.root} style={props.style} onClick={props.onClick}>
                {props.title}
            </button>
        </Link>
    )
};

const useStyles = makeStyles({
    root: props => ({
        
        display: 'block',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '20px',
        color: 'white',
        width: props.fullWidth ? props.fullWidth : null,
        border: 'none',
        fontWeight: 600,
        borderRadius: '4px',
        backgroundColor: props.primary ? colors.primary : colors.secondary,
        transition: 'all 0.4s ease',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: props.primary ? colors.secondary : colors.primary
        }
    }),
    link: {
        textDecoration: 'none',
    }

});

export default CustomButton;