import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../../theme/colors';

const LinkButton = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root} onClick={props.onClick}>
            {props.icon?props.icon:null}
            <div>{props.title}</div>
        </div>
    )
};

const useStyles = makeStyles({
    root: {
        maxWidth: '150px',
        display: 'flex',
        color: colors.primary,
        fontSize: '14px',
        margin: '10px 0px',
        fontWeight: 'bold',
        cursor: 'pointer',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '&:hover': {
            color: colors.secondary
        }
    },
    title: {

    }

});

export default LinkButton;