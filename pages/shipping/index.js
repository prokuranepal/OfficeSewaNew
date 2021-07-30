import React from 'react';
import { makeStyles } from '@material-ui/styles';

import HomeLayout from '../../components/layouts/HomeLayout';
import Breadcrumb from '../../components/elements/BreadCrumb';
import HeaderText from '../../components/elements/HeaderText';
import Shipping from '../../components/partials/Shipping';

const ShippingPage = (props) => {
    const classes = useStyles();
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/'
        },
        {
            text: 'Shipping'
        }
    ];
    return (
        <HomeLayout>
            <Breadcrumb breadcrumb={breadcrumb} />
            <div className={classes.container}>
                <HeaderText title={'Shipping and Billing Information'} />
            </div>
            <Shipping/>
            

        </HomeLayout>
    )
};

const useStyles = makeStyles({
    container: {
        marginLeft: '60px'
    },
    
});

export default ShippingPage;
