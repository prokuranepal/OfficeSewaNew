import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import Menu from '../../../elements/Menu/Menu';
const MenuDropDown = (props) => {
    const classes = useStyles();
    const [showMenuContent, setShowMenuContent] = useState(false);

    const showMenuContentFunc = () => {
        setShowMenuContent(true);
    }

    const hideMenuContentFunc = () => {
        setShowMenuContent(false);
    }

    return (
        <div className={classes.root} onMouseOver={showMenuContentFunc} onMouseLeave={hideMenuContentFunc}>
            <div className={classes.menuToggle}>
                <i className="icon-menu"></i>
                <span>Shop by Department</span>
            </div>
            <div className={showMenuContent ? classes.showMenuContent : classes.hideMenuContent}>
                <div className={classes.menuContent}>
                    <Menu/>
                </div>
            </div>
        </div>
    )
    // return (
    //     <div className="menu--product-categories">
    //         <div className="menu__toggle">
    //             <i className="icon-menu"></i>
    //             <span>Shop by Department</span>
    //         </div>
    //         <div className="menu__content">
    //             <Menu className="menu--dropdown" />
    //         </div>
    //     </div>
    // );
};

const useStyles = makeStyles({
    root: {
        position: 'relative',
        height: '100%'
    },
    menuToggle: {
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        cursor: 'pointer'

    },
    menuContent: {
        position: 'absolute',
        top: '100%',
        left: 0,
        zIndex: 100,
        zIndex: 1000,
        minWidth: '100%',
        paddingTop: '2px',
        // @include hidden
        transition: 'all 0.3s ease'
        // @include transform(scale3d(1, 1, 0) translateY(30px))
    },
    showMenuContent: {
        visibility: 'visible',
        opacity: 1,
        // @include transform(scale3d(1, 1, 1) translateY(0));
    },
    hideMenuContent: {
        visibility: 'hidden',
        opacity: 0,
        // @include transform(scale3d(1, 1, 0) translateY(30px));
    }
}, { name: "MenuDropDown" });

export default MenuDropDown;