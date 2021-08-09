import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { Table, Space, Popconfirm, Tag } from 'antd';
import Link from 'next/link';

import ProductCart from '../../elements/Product/ProductCart';
import CustomButton from '../../elements/CustomButton';
import { cart } from '../../../data/data';
import { colors } from '../../../theme/colors';

const ShoppingCart = (props) => {
    const classes = useStyles();
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let cartTotal = 0;
        for(let i=0; i< cartItems.length;i++) {
            cartTotal = cartTotal + parseFloat(cartItems[i].total)
        }
        // console.log(cartTotal)
        setTotal(cartTotal)
    },[cartItems]);

    useEffect(() => {
        const cartItemsArray = [];
        cart.items.map((item, index) => cartItemsArray.push({
            id: item.id,
            product: item,
            price: item.price.toFixed(2),
            quantity: item.quantity,
            name: item.name,
            total: (item.quantity *
                item.price).toFixed(0),
        }));
        setCartItems(cartItemsArray)
    }, [])

    const handleIncreaseItemQty = (product, index) => {

        let selectedItem = cartItems.find(
            (item) => item.id === product.id
        );
        let selectedItemIndex = cartItems.findIndex(
            (item) => item.id === product.id
        );
        if (selectedItem) {
            selectedItem.quantity = selectedItem.quantity + 1
            selectedItem.total = selectedItem.quantity * selectedItem.price
        }
        // console.log(product, selectedItemIndex, selectedItem)

        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(selectedItemIndex, 1, selectedItem);
        // console.log(updatedCartItems)
        setCartItems(updatedCartItems)
    }

    const handleDecreaseItemQty = (product, index) => {
        let selectedItem = cartItems.find(
            (item) => item.id === product.id
        );
        let selectedItemIndex = cartItems.findIndex(
            (item) => item.id === product.id
        );
        if (selectedItem) {
            const quantity = selectedItem.quantity - 1
            if (quantity <= 0) {
                selectedItem.quantity = 1
                selectedItem.total = selectedItem.quantity * selectedItem.price
            } else {
                selectedItem.quantity = quantity
                selectedItem.total = selectedItem.quantity * selectedItem.price
            }
        }
        // console.log(product, selectedItemIndex, selectedItem)

        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(selectedItemIndex, 1, selectedItem);
        // console.log(updatedCartItems)
        setCartItems(updatedCartItems)
    }

    const handleRemoveCartItem = (product) => {
        let selectedItem = cartItems.find(
            (item) => item.id === product.id
        );
        let selectedItemIndex = cartItems.findIndex(
            (item) => item.id === product.id
        );
        if (selectedItem) {
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(selectedItemIndex, 1);
            // console.log(updatedCartItems)
            setCartItems(updatedCartItems)
        }
    }



    const columns = [
        {
            title: 'PRODUCT',
            dataIndex: 'product',
            key: 'product',
            // className: {classes.tableHeader},
            render: product => <ProductCart
                product={product}
            />,
        },
        {
            title: 'PRICE',
            dataIndex: 'price',
            key: 'price',
            align: 'center'
        },
        {
            title: 'QUANTITY',
            dataIndex: 'quantity',
            key: 'quantity',
            align: 'center',
            className: classes.tableHeader,
            render: (quantity, record) => <div className={classes.quantity}>
                <button
                    className={classes.quantityButton}
                    // style={{ color: color_val }}
                    onClick={() => handleDecreaseItemQty(

                        record.product,
                        record.index
                    )}>
                    -
                </button>
                <input
                    className={classes.quantityInput}
                    // style={{ color: color_val }}
                    type="text"
                    placeholder="1"
                    value={quantity}
                    readOnly={true}
                />
                <button
                    className={classes.quantityButton}
                    // style={{ color: color_val }}
                    onClick={() => handleIncreaseItemQty(

                        record.product,
                        record.index
                    )}>
                    +
                </button>


            </div>
        },
        {
            title: 'TOTAL',
            dataIndex: 'total',
            key: 'total',
        }, {
            title: 'ACTION',
            key: 'action',
            render: (_, record) =>
                3 >= 1 ? (
                    <Space size="middle">
                        <Popconfirm title="Sure to delete?" onConfirm={() => handleRemoveCartItem(record)}>
                            <a style={{ color: '#dd2400' }}>Delete</a>
                        </Popconfirm>
                    </Space>
                ) : null,
        }]

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <div>
                        <Table
                            columns={columns}
                            dataSource={cartItems}
                            pagination={false}
                            size="small"

                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={classes.summaryContainer}>
                        <div className={classes.summary}>
                            <div className={classes.list}>
                                <p>Total</p>
                                <p>NRs {total}</p>

                            </div>
                            <Divider />
                            <div className={classes.items}>
                                {cartItems.map(item => {
                                    return <div className={classes.list}>
                                        <span>{item.name}</span>
                                        <span>x {item.quantity}</span>
                                    </div>
                                })}
                            </div>
                            <div className={classes.list}>
                                <p>Total Items</p>
                                <p>{cartItems.length}</p>
                            </div>
                            <Divider />
                            <div className={[classes.list, classes.marginTop].join(" ")}>
                                <p className={classes.totalText}>Total</p>
                                <p className={classes.totalAmount}>NRs {total}</p>

                            </div>
                        </div>
                        <div className={classes.buttonContainer}>
                            <CustomButton title={'Proceed To Checkout'} style={{ width: '100%' }} url={'/shipping'} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

const useStyles = makeStyles({
    buttonContainer: {
        marginBottom: '20px'
    },
    container: {
        marginLeft: '60px'
    },
    items: {
        margin: '15px 0px'
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    summaryContainer: {
        marginRight: '60px',
        marginLeft: '60px'
    },
    summary: {
        padding: '10px'
    },
    totalText: {
        color: colors.dark,
        fontSize: '18px',
        fontWeight: 'bold'
    },
    totalAmount: {
        color: colors.secondary,
        fontSize: '18px',
        fontWeight: 'bold'
    },
    marginTop: {
        marginTop: '10px'
    },
    quantity: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        border: 'solid 1px #999',
        borderRadius: '2px',
        // flex: 'wrap',
        width: '100px',
        alignSelf: 'center',
        display: 'flex',
        padding: '0px 10px',
        margin: 'auto'
    },
    quantityInput: {
        width: '40px',
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: 'none'
    },
    quantityButton: {
        backgroundColor: 'transparent',
        border: 'none',
        color: colors.primary,
        fontSize: '20px',
        lineHeight: '28px',
        cursor: 'pointer'
    },
    tableHeader: {
        // color: colors.primary,
        // backgroundColor: '#12344a'
    }

});

export default ShoppingCart;