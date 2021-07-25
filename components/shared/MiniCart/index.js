import React from 'react';
import { makeStyles } from '@material-ui/styles';

const MiniCart = (props) => {
    const classes = useStyles();
    return (
        props.showMiniCart?<div className={classes.root}>
            <p>Mini Cart</p>
        </div>:null
    )
}

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        minWidth: '200px',
        right: '100px',
        bottom: '-40px',
        zIndex: 30,
        paddingTop: '10px',
        transform: 'translate(0 ,20px)',
        // @include transform(translate(0 20px));
        transition: 'all 0.4s ease',
        overflow: 'hidden'
       
    }
})

export default MiniCart;
