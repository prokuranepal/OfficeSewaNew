import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Shipping = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="#">
                    Home
                </Link>
                <Link color="inherit" href="#">
                    Shopping Cart
                </Link>
                <Typography color="textPrimary">Shipping</Typography>
            </Breadcrumbs>

        </div>
    )
};

const useStyles = makeStyles({
    root: {

    }
});

export default Shipping;
