import React from 'react';
import { makeStyles } from '@material-ui/styles';

const ShippingInfo = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <span><strong>Email: </strong></span>
                <span>swainstha@gmail.com</span>
            </div>
            <div>
                <span><strong>Phone: </strong></span>
                <span>9842558818</span>
            </div>
            <div>
                <span><strong>Address: </strong></span>
                <span>Dharan-1, Sunsari</span>
            </div>
        </div>
    )
};

const useStyles = makeStyles({
    root: {
        margin: '10px 0px'
    }
});

export default ShippingInfo;