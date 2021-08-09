

import React from 'react';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';


export function formatCurrency(num) {
    if (num !== undefined) {
        return parseFloat(num)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
    }
}
export function ProductThumbnail(product) {
    let view;

    if (product.thumbnail) {
        view = (
            <Link href={`/product/${product.title}`} >
                <a>
                    <LazyLoad>
                        <img
                            src={product.thumbnail.url}
                            alt={product.title}
                        />
                    </LazyLoad>
                </a>
            </Link>
        );
    } else {
        view = (
            <Link href={`/product/${product.title}`}>
                <a>
                    <LazyLoad>
                        <img src="/static/img/not-found.jpg" alt={product.title} />
                    </LazyLoad>
                </a>
            </Link>
        );
    }

    return view;
}


export function ProductPrice(product) {
    let view;
    // if (product.is_sale === true) {
        view = (
            <p style={{color:'orange', 'font-size':15, fontWeight:'bold', marginBottom:5}}>
                ${formatCurrency(product.sale_price)}
                <del style={{color:'#666', 'font-size':12, fontWeight:'bold', paddingLeft:20}}>
                    ${formatCurrency(product.price)}
                </del>
                <span style={{color:'red', 'font-size':12, fontWeight:'bold', paddingLeft:20}}> 18% off</span>
            </p>
        );
    // } else {
    //     view = (
    //         <p className="ps-product__price">
    //             ${formatCurrency(product.price)}
    //         </p>
    //     );
    // }
    return view;
}
