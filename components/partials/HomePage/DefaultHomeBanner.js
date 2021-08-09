import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import NextArrow from '../../elements/Carousel/NextArrow';
import PrevArrow from '../../elements/Carousel/PrevArrow';
import Link from 'next/link';
import {SliderData} from '../../../public/static/data/category'
import Promotion from '../../elements/Media/Promotion';
import LazyLoad from 'react-lazyload';


const DefaultHomeBanner = () => {
    const [current,
        setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1
            ? 0
            : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0
            ? length - 1
            : current - 1);
    };

    if (!Array.isArray(SliderData) || length <= 0) {
        return null
    }
    const classes = useStyles();
    return (

        <div className={classes.container}>
            <div className={classes.slider}>
                <PrevArrow onClick={prevSlide}/>
                <NextArrow onClick={nextSlide}/> 
                {SliderData.map((slide, index) => {
                    return (
                        <div
                            className={index === current
                            ? classes.activeSlide
                            : classes.slide}
                            key={index}>
                            {index === current && <Link href='#'>
                                <a>
                                    <LazyLoad>

                                        <img src={slide.image} alt='Ad' className={classes.image}/>
                                    </LazyLoad>
                                </a>
                            </Link>
}

                        </div>
                    );
                })}
            </div>
            <div
                className={classes.promotionContainer}>
                <Promotion
                    link="/shop"
                    image={'https://beta.apinouthemes.com/uploads/promotion_1_d6deb591f0.jpeg'}/>
                <Promotion
                    link="/shop"
                    image={'https://beta.apinouthemes.com/uploads/promotion_2_d252453586.jpeg'}/>
            </div>
        </div>

    );
}

export default DefaultHomeBanner;

const useStyles = makeStyles(theme => ({
    slider: {
        position: 'relative',
        width: '65%',
        'height': '100%',
        'min-height': '100%'
    },
    container: {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        padding: '35px'
    },
    image: {
        width: '100%',
        'min-height': '420px',
        'max-height': '420px',
        objectFit: 'cover'

    },

    rightArrow: {
        top: '50%',
        right: '32px',
        'font-size': '3rem',
        color: '#000',
        'z-index': 10,
        cursor: 'pointer',
        'user-select': 'none'
    },

    leftArrow: {
        top: '50%',
        left: '32px',
        'font-size': '3rem',
        color: '#000',
        'z-index': 10,
        cursor: 'pointer',
        'user-select': 'none'
    },

    slide: {
        opacity: 0,
        'transition-duration': 'all 1s ease'
    },
    activeSlide: {
        opacity: 1,
        'transition-duration': '1.5s',
    },
    promotionContainer:{
        width: '35%',
        'min-width': '400px',
        'box-sizing': 'border-box',
        'padding-left': '25px'
    }

}))
