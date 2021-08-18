import React from 'react';
import { makeStyles } from "@material-ui/core/styles"

const PrevArrow = (props) => {
    const classes = useStyles();

    const { onClick, icon } = props;
    return (
        <a className={classes.slickArrow} onClick={onClick}>
            {icon ? (
                <i className={icon}></i>
            ) : (
                <i className="icon-chevron-left"></i>
            )}
        </a>
    );
};

export default PrevArrow;

const useStyles = makeStyles(theme => ({
    slickArrow:{
        width: '40px',
        height: '40px',
        position:'absolute',
       top:'50%',
        border: 'none',
        'background-color':' transparent',
        display: 'flex',
        'justify-content': 'center',
       ' align-items': 'center',
       ' border-radius': 0,
        'z-index': 100,
        transition: 'all 0.5s ease',   

        left:0,
        '& >i': {
            'font-size': '16px',
            // position:'absolute',
            // transform:'translate(0,50%)' ,
            // top:'50%',
            position:'relative',
            // transform:'translate(0,25%)'
            'top':'25%'
        
        },
        '&:hover' :{
            'background-color': '#1961a5',
            // opacity:0.7,
            cursor:'pointer'
        }
        // &.slick-prev {
        //     left: 0;
        // }
    
        // &.slick-next {
        //     right: 0;
        // }
    }
    }))