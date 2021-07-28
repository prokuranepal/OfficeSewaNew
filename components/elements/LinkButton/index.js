import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../../theme/colors';

const LinkButton = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root} onClick={props.onClick}>
            {props.title}
        </div>
    )
};

const useStyles = makeStyles({
    root: {
        display: 'inline-block',
        color: colors.secondary,
        fontSize: '14px',
        margin: '10px 0px',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: colors.primary
        }
    },

});

export default LinkButton;