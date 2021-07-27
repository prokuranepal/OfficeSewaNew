import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

const MenuDropDown = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <MenuIcon/>
            <div>
                Shop By Department
            </div>
        </div>

    )
};

const useStyles = makeStyles({
    root: {
        display: 'flex'
    }
});

export default MenuDropDown;