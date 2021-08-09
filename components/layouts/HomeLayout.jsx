import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Topbar from '../shared/Header/Topbar';
import Footer from '../shared/Footer';
import MegaMenu from '../menu/MegaMenu';
import {menuCat} from '../../public/static/data/category';
import styles from '../../styles/Home.module.css'

const HomeLayout = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <Topbar />
            </div>
            <MegaMenu menuCat={menuCat}/>

            {/* <p>hello</p> */}
            <div className={classes.container}>
                {props.children}
            </div>
            <div className={classes.footer}>
            <Footer />
            </div>
        </div>
    )
};

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    container: {
        display: 'block',
        // marginTop: '60px'
    },
    footer: {
        marginTop: '40px'
    }
});

export default HomeLayout;