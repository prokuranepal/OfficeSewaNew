import React from 'react';
import { makeStyles, Typography } from '@material-ui/styles';
import { colors } from '../../../theme/colors';
import { fontSize } from '../../../theme/font';

const useStyles = makeStyles({
    containerStyle: {
        padding: '2px 0px',
        margin: '5px 0px'
    },
    text: {
        color: colors.black,
        fontSize: "136px",
        fontWeight: '400',
        lineHeight: '25px'
    }
});

const ProductDescription = (props) => {
    const classes = useStyles();
    return (
        <ul className={classes.containerStyle}>
            <li className={classes.text}>Unrestrained and portable active stereo speaker</li>
        </ul>
    )
};


export default ProductDescription