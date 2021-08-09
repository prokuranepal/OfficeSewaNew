
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
                <ModuleProductActions product={product} />
            </div>
            <div className={classes.subcontainer}>
                           <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className={classes.title}>{product.title}</a>
                    </Link>
                    <div >
                        <Rating iconSize={20} rating={product.rating}/>
                        {/* <span>02</span> */}
                    </div>
                    <div style={{fontSize:15, color:'#1961a5',        fontFamily:'Work Sans, sans-serif'
}}>
                    Rs. {product.sale_price}
                    </div>
                   
                    
                </div>
                {/* <div className="ps-product__content hover">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                </div> */}
        </div>
    );
};

export default Product;



const useStyles = makeStyles(theme => ({
    container:{
        marginLeft:0,
        minWidth:100,
        maxWidth:280,
        // height:350,
        display:'block', 
        'align-items':'center', 
        justifyContent:'center',
        // backgroundColor:'green',
        padding:10,
        overflow:'hidden',
         '&  > $thumbnail':{
                 position: 'relative',
                 '& img':{
     
           
        //    height:'100%',
        
       },
            '& > ul':{
                  position: 'absolute',
            bottom: 0,
            // left: '50%',
                transform:'translate(0, 100%)',
        // 'background-color': 'red',

            }
            },
        '&:hover':{
            border: '1px solid #aaa',
             '&  > $thumbnail':{
        
            '& > ul':{
                  position: 'absolute',
            bottom: 0,
            // left: '50%',
                transform:'translate(0, 0)',
        // 'background-color': 'red',

            }
            }
           
        }
    },
    subcontainer:{
        '& > div':{
            paddingTop:5,
            paddingBottom:5,
            '& > span':{
                '& > i':{
                    fontSize:15
                }
            }
        }
    },
   thumbnail:{
    //    height:250,
    //    width:250,
            overflow: 'hidden',

    marginBottom:5,
       '& img':{
           width:'100%',
           
        //    height:'100%',
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
       fontSize:14,
        color:'#1961a5',
        fontFamily:'Work Sans, sans-serif'
   }
    }))