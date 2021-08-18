import React from 'react';
import { makeStyles } from "@material-ui/core/styles"

const NextArrow = (props) => {
    const {onClick, icon } = props;
    const classes = useStyles();

    return (
        <a className={classes.slickArrow} onClick={onClick}>
            {icon ? (
                <i className={icon}></i>
            ) : (
                <i className="icon-chevron-right"></i>
            )}
        </a>
    );
};

export default NextArrow;

const useStyles = makeStyles(theme => ({
slickArrow:{
    width: '40px',
    position:'absolute',
       top:'50%',
    height: '40px',
    border: 'none',
    'background-color':' transparent',
    display: 'flex',
    'justify-content': 'center',
   ' align-items': 'center',
   ' border-radius': 0,
    'z-index': 100,
    transition: 'all 0.5s ease',    
    // top:" 50%",
    right:0,
    '& >i': {
        position:'relative',
        'font-size': '16px',
        // transform:'translate(0,25%)'
        'top':'25%'

    },
    '&:hover' :{
        'background-color': '#1961a5',
        // opacity:0.7,
        cursor:'pointer'
    },
    '&:focus' :{
        'background-color': '#1961a5',
        // opacity:0.7,
        cursor:'pointer'
    },
   

}
}))