import React from 'react';
import Slider from 'react-slick';
// import { carouselFullwidth, carouselStandard } from '~/utilities/carousel-helpers';
import Product from '../../elements/Product/Product';
import NextArrow from '../../elements/Carousel/NextArrow';
import PrevArrow from '../../elements/Carousel/PrevArrow';


 const ProductGroupWithCarousel = ({ products, type = 'normal' }) => {
    console.log(products, 'productsss')

 const carouselStandard = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 750,
        slidesToShow: 5,
        slidesToScroll: 2,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    // if (type === 'fullwidth') {
        return (
            <Slider
               {...carouselStandard}
               >
                {products.map((item) => (
                    <div  key={item.id}>
                        <Product product={item}/>
                    </div>
                ))}
            </Slider>
        );
    // } 
    // else {
    //     return (
    //         <Slider
    //             {...carouselStandard}
    //             infinite={products.length > 5 ? true : false}
    //             className='ps-carousel outside'>
    //             {products.map((item) => (
    //                 <div className='ps-carousel-item' key={item.id}>
    //                     <Product product={item} />
    //                 </div>
    //             ))}
    //         </Slider>
    //     );
    // }
};


export default ProductGroupWithCarousel;
