import React from 'react';
import { makeStyles } from '@material-ui/styles';

import HomeLayout from '../../components/layouts/HomeLayout';
import Breadcrumb from '../../components/elements/BreadCrumb';
import HeaderText from '../../components/elements/HeaderText';
import ShoppingCart from '../../components/partials/ShoppingCart';

const ShoppingCartPage = (props) => {
    const classes = useStyles();
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
        },
    ];
    return (
        <HomeLayout>
            <Breadcrumb breadcrumb={breadcrumb} />
            <div className={classes.container}>
                <HeaderText title={'ShoppingCart'} />
            </div>
            <ShoppingCart/>
            

        </HomeLayout>
    )
};

const useStyles = makeStyles({
    container: {
        marginLeft: '60px'
    },
});

export default ShoppingCartPage;