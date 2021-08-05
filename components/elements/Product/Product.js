
import React from 'react';
import Link from 'next/link';
import Rating from '../Rating/Rating';

import {
    ProductBadge,
    ProductPrice,
    ProductThumbnail,
} from '../../ProductThumbnail';
import { makeStyles } from "@material-ui/core/styles"

// import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';

const Product = ({ product }) => {
    // Views
    const priceView = ProductPrice(product);
    const thumbnailImage = ProductThumbnail(product);
    // const badgeView = ProductBadge(product);
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.thumbnail}>
                {thumbnailImage}
                {/* {badgeView} */}
                {/* <ModuleProductActions product={product} /> */}
            </div>
            <div className={classes.subcontainer}>
                <Link href="/shop">
                    <a className={classes.vendor}>YOUNG SHOP</a>
                </Link>
                <div className={classes.underline}/>
                <div className="ps-product__content">
                {priceView}

                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className={classes.title}>{product.title}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating rating={4}/>
                        {/* <span>02</span> */}
                    </div>
                </div>
                {/* <div className="ps-product__content hover">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Product;



const useStyles = makeStyles(theme => ({
    container:{
        margin:200,
        width:200,
        height:350,
        display:'block', 
        'align-items':'center', 
        justifyContent:'center',
        // backgroundColor:'green',
        overflow:'hidden'
    },
   thumbnail:{
    //    height:250,
    //    width:250,
       '& img':{
           width:'100%',
        //    height:'100%',
           'object-fit':'contain'
       },
      
   },
   vendor:{
       fontSize:12,
       color:'#666',
       fontWeight:'bold'
       
   },
   underline:{
    'border-bottom':'1px solid #aaa',
    width:'100%',
    paddingTop:5,
   },
   title:{
       fontSize:13,
        color:'#333',
        fontFamily:'Work Sans, sans-serif'
   }
    }))