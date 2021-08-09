import React, { useEffect, useState } from 'react';
// import ContainerShop from '~/components/layouts/ContainerShop';
import BreadCrumb from '../../../components/elements/BreadCrumb';
// import WidgetShopCategories from '../../../components/shared/Widgets/WidgetShopCategories';
import WidgetShopBrands from '../../../components/shared/Widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '../../../components/shared/Widgets/WidgetShopFilterByPriceRange';
// import ProductRepository from '~/repositories/ProductRepository';
import { useRouter } from 'next/router';
import HomeLayout from '../../../components/layouts/HomeLayout';
import MegaMenu from '../../../components/menu/MegaMenu';
import {menuCat} from '../../../public/static/data/category';
import {makeStyles} from "@material-ui/core/styles";
import SimpleProduct from '../../../components/elements/Product/SimpleProduct';
import Grid from '@material-ui/core/Grid';
import Head from '../../../components/layouts/modules/Head';
import ModuleShopSortBy from '../../../components/partials/Shop/modules/ModuleShopSortBy';


// import ProductItems from '~/components/partials/product/ProductItems';
const product=[
    {id:1,thumbnail:{url:"https://shovan.prokurainnovations.com/media/category-backgrounds/mini-electric-iron-500x500.jpg"},title:'300 Watt Steam Featured Electric Iron', price:3000,sale_price:2000,rating:4.5},
    {id:2,thumbnail:{url:"http://206.189.141.84:8002/media/category-backgrounds/kangaroo-paper-punching-machine-500x500_twxXbwB.jpg"},title:'Punching Machine', price:1000,sale_price:800,rating:3.0},
    {id:3,thumbnail:{url:"https://shovan.prokurainnovations.com/media/category-backgrounds/notebook-diary-any-year-diary-500x500.jpg"},title:'Notebook diary', price:300,sale_price:200,rating:4.0},
    {id:4,thumbnail:{url:"https://shovan.prokurainnovations.com/media/category-backgrounds/mini-electric-iron-500x500.jpg"},title:'300 Watt Steam Featured Electric Iron', price:3000,sale_price:2000,rating:3.5},
    {id:5,thumbnail:{url:"https://shovan.prokurainnovations.com/media/category-backgrounds/1x-lab-thermal-pos-receipt-printer-wifi.jpg"},title:'Lab Thermal Printer w Wifi', price:7000,sale_price:6000,rating:4.5},
    {id:6,thumbnail:{url:"https://shovan.prokurainnovations.com/media/category-backgrounds/samsung-air-conditioner-500x500.jpg"},title:'Samsung Air 5 Star Split Conditioner', price:55000,sale_price:50000,rating:4.0}
    ]
const ProductCategoryScreen = () => {
    const Router = useRouter();
    const {productId}= Router.query;
    const classes = useStyles();

    const [category, setCategory] = useState(productId);
    const [loading, setLoading] = useState(false);

    // async function getCategry() {
    //     setLoading(true);
    //     if (slug) {
    //         const responseData = await ProductRepository.getProductsByCategory(
    //             slug
    //         );
    //         if (responseData) {
    //             setCategory(responseData);
    //             setTimeout(
    //                 function () {
    //                     setLoading(false);
    //                 }.bind(this),
    //                 250
    //             );
    //         }
    //     } else {
    //         await Router.push('/shop');
    //     }
    // }

    useEffect(() => {
        setCategory(productId);
    }, [productId]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/',
        },
        {
            text: category ? category : 'Product category',
        },
    ];

    //Views
    let productItemsViews;

    if (!loading) {
        if (category ) {
            productItemsViews = (
                // <ProductItems columns={4} products={category.products} />
                <></>
            );
        } else {
            productItemsViews = <p>No Product found</p>;
        }
    } else {
        productItemsViews = <p>Loading...</p>;
    }

    return (
        // <ContainerShop
        //     title={category ? category.name : 'Category'}
        //     boxed={true}>
           <>
           <Head/>
           <HomeLayout>
            {/* <MegaMenu menuCat={menuCat}/>  */}
            <BreadCrumb breadcrumb={breadCrumb} />
                            {/* <WidgetShopFilterByPriceRange /> */}

                <div className={classes.container}>
                    <div className={classes.divider}>
                        <div className={classes.left}>
                            {/* <WidgetShopCategories /> */}
                            {/* <WidgetShopBrands /> */}
                            <WidgetShopFilterByPriceRange />
                        </div>
                        <div className={classes.right}>
                            <h3 className={classes.categoryTitle}>
                                {category?category.toUpperCase():null}
                            </h3>
                            <div className={classes.productOptions}>
                            <div>
                              <p style={{fontSize:13,paddingLeft:10,
                                             color:'#888',
                                             fontFamily:'Work Sans, sans-serif'}}>
                             <strong style={{fontSize:13,
                                             color:'#1961a5',
                                             fontFamily:'Work Sans, sans-serif'}}>{2} </strong>
                                Products found
                            </p>
                            </div>
                            <ModuleShopSortBy/>
                            </div>

                            <Grid container justifyContent="flex-start" spacing={3}>
            
                                {
                                    product.map((item) => 
                                    (    <Grid key={item.id} item>
                                                <SimpleProduct product={item} />
                                     </Grid>)
                                    )}
         
                             </Grid>
                            {/* {productItemsViews} */}
                        </div>
                    </div>
                </div>
                </HomeLayout>
            </>
    
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        width:'100%'
    },
    divider:{
        display:'flex',
        width:'100%',
        'flex-flow':'row nowrap'
    },
    left:{
        width:'590px'
    },
    right:{
        width:'calc(100%-590px)'
    },
    categoryTitle:{
        fontSize:20,
        color:'#1961a5',
        fontFamily:'Work Sans, sans-serif',
        padding:20,
        paddingLeft:0
    },
    productOptions:{
        width:'95%',
        backgroundColor:'#f5f5f5',
        padding:5,
        marginBottom:25,
        display:'flex',
        justifyContent:'space-between'
    }

    }))

export default ProductCategoryScreen;
