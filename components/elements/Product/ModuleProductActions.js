import React, { useState } from 'react';
import { Modal } from 'antd';
// import { addItem } from '~/store/cart/action';
// import { addItemToCompare } from '~/store/compare/action';
// import { addItemToWishlist } from '~/store/wishlist/action';
// import { useDispatch } from 'react-redux';
// import ProductDetailQuickView from '~/components/elements/detail/ProductDetailQuickView';
import { makeStyles } from "@material-ui/core/styles"

const ModuleProductActions = ({ product }) => {
    const classes = useStyles();

    // const dispatch = useDispatch();
    const [isQuickView, setIsQuickView] = useState(false);

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        // dispatch(addItem(product));
    };

    const handleAddItemToCompare = (e) => {
        e.preventDefault();
        // dispatch(addItemToCompare(product));
    };

    const handleAddItemToWishlist = (e) => {
        // dispatch(addItemToWishlist(product));
    };

    const handleShowQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(true);
    };

    const handleHideQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(false);
    };
    return (
        <ul className={classes.subContent}>
            <li>
                <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add To Cart"
                    onClick={handleAddItemToCart}>
                    <i className="icon-bag2"></i>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                    onClick={handleShowQuickView}>
                    <i className="icon-eye"></i>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add to wishlist"
                    onClick={handleAddItemToWishlist}>
                    <i className="icon-heart"></i>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Compare"
                    onClick={handleAddItemToCompare}>
                    <i className="icon-chart-bars"></i>
                </a>
            </li>
            <Modal
                centered
                footer={null}
                width={1024}
                onCancel={(e) => handleHideQuickView(e)}
                visible={isQuickView}
                closeIcon={<i className="icon icon-cross2"></i>}>
                <h3>Quickview</h3>
                {/* <ProductDetailQuickView product={product} /> */}
            </Modal>
        </ul>
    );
};


const useStyles = makeStyles(theme => ({
    subContent:{
        display:'flex',
        bottom: 0,
        // left: '50%',
        // transform: 'translate(0, 100%)',
        justifyContent: 'space-around',
        // top:'100%',
        zIndex:100,
         padding: '10px 0',
        'list-style-type': 'none',
        'background-color': '#fff',
        'flex-flow': 'row nowrap',
        
        color:'#888',
        transition: 'all 0.5s cubic-bezier(0.7, 0, 0.3, 1) 0s',
        width:'100%',
        '& >li':{
             
                //  'border-radius': '50%',
                
            '& >a':{
                display:'flex',
                 'justify-content': 'center',
                'align-items': 'center',
                    // padding:8,
                fontSize:14,
                        color:'#666',

                width: '34px',
                height: '34px',
                'border-radius': '50%',
                '& > i':{
             
                },
            ' &:hover':{
                   ' background-color': '#1961a5',
                    color: '#ffffff',
                    //  width: '100px',
                // height: '100px',
                }
            }
        }

    }
}))


export default ModuleProductActions;
