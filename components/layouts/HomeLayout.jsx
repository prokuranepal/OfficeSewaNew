import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Topbar from '../shared/Header/Topbar';
import Footer from '../shared/Footer';

const HomeLayout = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Topbar />
            {props.children}
            <Footer />
        </div>
    )
};

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

export default HomeLayout;