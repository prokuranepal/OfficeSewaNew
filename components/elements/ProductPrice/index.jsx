import React from 'react';
import { makeStyles, Typography } from '@material-ui/styles';
import { colors } from '../../../theme/colors';
import { fontSize } from '../../../theme/font';


const ProductPrice = (props) => {
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
        color: "#F79E3B",
        fontSize: "20px",
        fontWeight: '700',
        lineHeight: '23px'
    }
});

export default ProductPrice