import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import 'antd/dist/antd.css';
// import { Row, Grid, Image } from 'antd';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import MiniCart from '../MiniCart';
import MenuDropDown from '../MenuDropDown';
import { HeartOutlined, ShoppingCartOutlined, UserOutlined, BarChartOutlined } from '@ant-design/icons';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Grow from '@material-ui/core/Grow';
import { colors } from '../../../../theme/colors';
const Topbar = (props) => {
    const [showDepartments, setShowDepartments] = useState(false);
    const [showMiniCart, setShowMiniCart] = useState(false);

    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    const stickyHeader = () => {
        let number =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        if (number > 300) {
            setShowDepartments(true)
        } else {
            setShowDepartments(false);
        }

    };

    const showMiniCartFunc = () => {
        console.log("SHow Mini cart");
        setShowMiniCart(true)
    }

    const hideMiniCartFunc = () => {
        console.log("Hide Mini cart");
        setShowMiniCart(false)
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item className={classes.topItem} xs={12} sm={4} md={3}>
                    <div className={showDepartments ? classes.invisible : classes.visible}>
                        <img

                            alt="OfficeSewas"
                            width={150}
                            // height={50}
                            src={'images/logo.png'}
                        />
                    </div>
                    <div className={showDepartments ? classes.visible : classes.invisible}>
                        <MenuDropDown />
                    </div>
                </Grid>
                <Grid item className={classes.topItem} xs={12} sm={4} md={6}>Search</Grid>
                <Grid item className={classes.actionIcons} xs={12} sm={4} md={3}>
                    <Link href={'#'}>
                        <div className={classes.iconContainer}>
                            <BarChartOutlined className={classes.icons} />
                            <span className={classes.itemNumber}><i className={classes.itemNumberText}>0</i></span>
                        </div>
                    </Link>
                    <Link href={'#'}>
                        <div className={classes.iconContainer}>
                            <HeartOutlined className={classes.icons} />
                            <span className={classes.itemNumber}><i className={classes.itemNumberText}>0</i></span>
                        </div>
                    </Link>

                    <div className={classes.iconContainer} onMouseOver={showMiniCartFunc} onMouseLeave={hideMiniCartFunc}>
                        <Link href={'#'}>
                            <div >
                                <ShoppingCartOutlined className={classes.icons} />
                                <span className={classes.itemNumber}><i className={classes.itemNumberText}>0</i></span>
                            </div>
                        </Link>
                        <div className={showMiniCart ? classes.visible : classes.invisible}>
                            <MiniCart showMiniCart={showMiniCart} />
                        </div>

                    </div>


                    <div className={classes.account}>
                        <div className={classes.iconContainer}>
                            <Link href={'/login'}>
                                Login
                        </Link>
                            {/* <UserOutlined className={classes.icons} /> */}
                        </div>
                    </div>

                </Grid>
            </Grid>
        </div>

    )
};

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'block',
        position: 'relative',
        top: 0,
        zIndex: 100
        // flex: 1
    },
    topItem: {
        padding: '5px 20px',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        display: 'flex'
    },
    actionIcons: {
        padding: '5px 20px',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignSelf: 'center',
        display: 'flex'
    },
    account: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    accountLinks: {
        marginLeft: '1rem'
    },
    icons: {
        color: colors.secondary,
        fontSize: '30px',
        lineHeight: '42px',
        '&:hover': {
            color: colors.primary
        }
    },
    invisible: {

        // display: 'block'
        visibility: 'hidden',
        opacity: 0
    },
    visible: {
        visibility: 'visible',
        opacity: 1
    },
    itemNumber: {
        display: 'flex',
        position: 'absolute',
        width: '20px',
        height: '20px',
        bottom: 0,
        right: '-6px',
        borderRadius: '15px',
        backgroundColor: colors.primary,
        color: 'white',
        // zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        // marginLeft: '-15px'
    },
    itemNumberText: {
        fontSize: '12px',
        fontStyle: 'normal',
        lineHeight: '1em',
        fontWeight: 500
    },
    iconContainer: {
        display: 'inline-block',
        position: 'relative',
        width: '30px',
        height: '42px',
        transition: 'all 2s ease',
    },
    login: {

    }
}, { name: "MuiComponent" });


export default Topbar;