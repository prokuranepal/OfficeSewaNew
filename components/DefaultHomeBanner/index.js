import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import NextArrow from '../elements/Carousel/NextArrow';
import PrevArrow from '../elements/Carousel/PrevArrow';
import Link from 'next/link';
import {SliderData} from '../../public/static/data/category'
import Promotion from '../elements/Media/Promotion';

// import Link from 'next/link';
// import MediaRepository from '~/repositories/MediaRepository';
// import { baseUrl } from '~/repositories/Repository';
// import { getItemBySlug } from '~/utilities/product-helper';
// import Promotion from '~/components/elements/media/Promotion';

const DefaultHomeBanner = () => {
    const [current, setCurrent] = useState(0);
    const length =SliderData.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(SliderData) || length <= 0) {
      return null
    }
    const classes = useStyles();
   return ( 

    <div className={classes.container} >
    <div className={classes.slider}>
    <PrevArrow onClick={prevSlide}/>

<NextArrow onClick={nextSlide}/>
    {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} /> */}
    
    {SliderData.map((slide, index) => {
      return (
        <div 
          className={index === current ? classes.activeSlide :classes.slide}
          key={index}
        >
          {index === current && 
                <Link href='#'>
                <a>
            <img src={slide.image} alt='Ad' className={classes.image} />
            </a>
            </Link>
          }
              
        </div>
      );
    })}
  </div>
  <div style={{width:'35%', 'min-width':'400px', 'box-sizing': 'border-box', 'padding-left':'25px'}}>
                    <Promotion      
                        link="/shop"
                        image={'https://beta.apinouthemes.com/uploads/promotion_1_d6deb591f0.jpeg'}
                    />
                    <Promotion
                        link="/shop"
                        image={'https://beta.apinouthemes.com/uploads/promotion_2_d252453586.jpeg'}
                    />
  </div>
  </div>

    );
}

export default DefaultHomeBanner;
/*connect(state => state.media)();*/


const useStyles = makeStyles(theme => ({
    slider: {
        position: 'relative',
        width: '65%',
        // 'max-width':'100%',
        // 'padding-right':'25px',
        'height':'100%',
        // 'background-color':'green',
        'min-height': '100%'
      },
      container:{
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        padding:'35px',
      },
       image: {
        width: '100%',
        // height:'100%',
      // 'max-width':'1'
        'min-height': '420px',
       'max-height': '420px',
       objectFit:'cover'
  
      },
      
       rightArrow: {
        // position: 'absolute',
        top: '50%',
        right: '32px',
        'font-size': '3rem',
        color: '#000',
        'z-index': 10,
        cursor: 'pointer',
        'user-select': 'none',
      },
      
       leftArrow: {
        // position: 'absolute',
        top: '50%',
        left: '32px',
        'font-size': '3rem',
        color: '#000',
        'z-index': 10,
        cursor: 'pointer',
        'user-select': 'none',
      },
      
       slide: {
        opacity: 0,
        'transition-duration':'all 1s ease',
       },
        activeSlide:{
            opacity: 1,
            'transition-duration': '1.5s',
            // transform: 'scale(1.08)'
          }

      
      
        
}))

