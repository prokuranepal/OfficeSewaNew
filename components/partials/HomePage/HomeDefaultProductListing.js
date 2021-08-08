import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
// import { getProductsByCollectionHelper } from '~/utilities/strapi-fetch-data-helpers';
// import { generateTempArray } from '~/utilities/common-helpers';
import ProductGroupWithCarousel from '../Product/ProductGroupWithCarousel';
import { makeStyles } from "@material-ui/core/styles"
const product=[
    {id:1,thumbnail:{url:"https://shovan.prokurainnovations.com/media/category-backgrounds/mini-electric-iron-500x500.jpg"},title:'300 Watt Steam Featured Electric Iron', price:3000,sale_price:2000,rating:4.5},
    {id:2,thumbnail:{url:"http://206.189.141.84:8002/media/category-backgrounds/kangaroo-paper-punching-machine-500x500_twxXbwB.jpg"},title:'Punching Machine', price:1000,sale_price:800,rating:3.0},
    {id:3,thumbnail:{url:"https://shovan.prokurainnovations.com/media/category-backgrounds/notebook-diary-any-year-diary-500x500.jpg"},title:'Notebook diary', price:300,sale_price:200,rating:4.0},
    {id:4,thumbnail:{url:"https://shovan.prokurainnovations.com/media/category-backgrounds/mini-electric-iron-500x500.jpg"},title:'300 Watt Steam Featured Electric Iron', price:3000,sale_price:2000,rating:3.5},
    {id:5,thumbnail:{url:"https://shovan.prokurainnovations.com/media/category-backgrounds/1x-lab-thermal-pos-receipt-printer-wifi.jpg"},title:'Lab Thermal Printer w Wifi', price:7000,sale_price:6000,rating:4.5},
    {id:6,thumbnail:{url:"https://shovan.prokurainnovations.com/media/category-backgrounds/samsung-air-conditioner-500x500.jpg"},title:'Samsung Air 5 Star Split Conditioner', price:55000,sale_price:50000,rating:4.0}
    ]
    

const HomeDefaultProductListing = ({ collectionSlug, title }) => {
    const classes = useStyles()

    const [productItems, setProductItems] = useState(null);
    const [currentCollection, setCurrentCollection] = useState('new-arrivals');
    const [loading, setLoading] = useState(false);

    const sectionLinks = [
        {
            title: 'New Arrivals',
            name: 'new-arrivals',
            slug: collectionSlug,
        },
        {
            title: 'Best seller',
            name: 'best-seller',
            slug: 'fullwidth-clothing-best-sellers',
        },
        {
            title: 'Most Popular',
            name: 'most-popular',
            slug: 'fullwidth-clothing-most-popular',
        },
    ];

    // async function getProducts(slug) {
    //     setLoading(true);
    //     const responseData = await getProductsByCollectionHelper(slug);
    //     if (responseData) {
    //         setProductItems(responseData.items);
    //         setTimeout(
    //             function () {
    //                 setLoading(false);
    //             }.bind(this),
    //             250
    //         );
    //     }
    // }

    function handleChangeTab(e, tab) {
        e.preventDefault();
        setCurrentCollection(tab.name);
        // getProducts(tab.slug);
    }

    useEffect(() => {
        // getProducts(collectionSlug);
    }, [collectionSlug]);
    const sectionLinksView = sectionLinks.map((link) => (
        <li
            className={currentCollection === link.name ? classes.activeLink : classes.inactiveLink}
            key={link.name}>
            <a href="#" onClick={(e) => handleChangeTab(e, link)}>
                {link.title}
            </a>
        </li>
    ));

    // views
    let productItemsView;
    if (!loading) {
        // if (productItems && productItems.length > 0) {
            productItemsView = (
                <ProductGroupWithCarousel
                    products={product}
                />
            );
        // } else {
        //     productItemsView = <p>No product(s) found.</p>;
        // }
    } else {
        const skeletons = [0,1,2,3,4,5].map((item) => (
            <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
                {/* <SkeletonProduct /> */}
            </div>
        ));
        productItemsView = <div className="row">{skeletons}</div>;
    }

    return (
        <div >
            <div>
                <div className={classes.container}>
                    <h3>{title}</h3>
                    <ul className={classes.links}>
                        {sectionLinksView}
                        <li>
                            <Link href={`/shop/categories/${title}`}>
                                <a>View All</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">{productItemsView}</div>
            </div>
        </div>
    );
};


const useStyles = makeStyles(theme => ({
    container:{
        width:'98%', 
        marginTop:35, 
        marginBottom:15,
        padding:10,
        'background-color':'#f4f4f4', 
        display:'flex', 
        justifyContent:'space-between', 
        alignItems:'center',
        '& > h3':{
            color:'#1961a5',
            fontSize:20,
            paddingLeft:15,
            padding:10
        },
        '& a':
        {   
        color:'#666',
            '&:hover':{
                color:'#1961a5'
            },
            
        }    

},
    links:{
        display:'flex',
        'list-style-type': 'none',
        justifyContent:'space-between', 
        fontSize:14,

    },
activeLink:{
   
    paddingRight:20,
    '& >a':{
        color:'#1961a5',
    }
    
}
,
inactiveLink:{
paddingRight:20,
'& a':{
    color:'#666',
}
}
}


))
export default HomeDefaultProductListing;
