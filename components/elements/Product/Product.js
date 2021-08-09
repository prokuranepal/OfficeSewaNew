
import React from 'react';
import Link from 'next/link';
import Rating from '../Rating/Rating';

import {
    ProductBadge,
    ProductPrice,
    ProductThumbnail,
} from '../../helpers/ProductThumbnail';
import { makeStyles } from "@material-ui/core/styles"

import ModuleProductActions from './ModuleProductActions';

const Product = ({ product }) => {
    console.log(product,'product')
    const priceView = ProductPrice(product);
    const thumbnailImage = ProductThumbnail(product);
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.thumbnail}>
                {thumbnailImage}
                {/* {badgeView} */}
                <ModuleProductActions product={product} />
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
                        <Rating rating={product.rating}/>
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
        marginLeft:0,
        minWidth:100,
        maxWidth:250,
        display:'block', 
        'align-items':'center', 
        justifyContent:'center',
        padding:10,
        overflow:'hidden',
         '&  > $thumbnail':{
                 position: 'relative',
            '& > ul':{
                  position: 'absolute',
                  bottom: 0,
                  transform:'translate(0, 100%)',
            }
            },
        '&:hover':{
            border: '1px solid #aaa',
             '&  > $thumbnail':{
        
            '& > ul':{
                  position: 'absolute',
            bottom: 0,
                transform:'translate(0, 0)',
            }
            }
           
        }
    },
   thumbnail:{
            overflow: 'hidden',

    marginBottom:5,
       '& img':{
           width:'100%',
           'object-fit':'contain'
       },
      
   },
   vendor:{
       fontSize:12,
       color:'#666',
       fontWeight:'bold',
       
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