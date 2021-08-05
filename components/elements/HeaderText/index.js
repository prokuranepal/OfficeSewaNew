import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../../theme/colors';
import { fontSize } from '../../../theme/font';

const HeaderText = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.containerStyle}>
            <div className={classes.text}>
                {props.title}
            </div>
        </div>
    )
};

const useStyles = makeStyles({
    containerStyle: {
        padding: '10px 0px',
        margin: '10px 0px'
    },
    text: {
        color: colors.primary,
        fontSize: fontSize.pageHeader,
        fontWeight: 'bold',
        lineHeight: '24px'
    }
});

export default HeaderText;