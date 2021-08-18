import React from 'react';
import { makeStyles, Typography } from '@material-ui/styles';
import { colors } from '../../../theme/colors';
import { fontSize } from '../../../theme/font';


const ProductHeader = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.containerStyle}>
            <div className={classes.text}>
                {props.children}
            </div>
        </div>
    )
};

const useStyles = makeStyles({
    containerStyle: {
        padding: '2px 0px',
        margin: '5px 0px'
    },
    text: {
        color: colors.black,
        fontSize: "24px",
        fontWeight: 'bold',
        lineHeight: '28px'
    }
});

export default ProductHeader