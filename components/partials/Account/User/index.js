import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import AccountMenuSidebar from '../Modules/AccountMenuSidebar';

const User = (props) => {
    const classes = useStyles();
    const accountLinks = [
        {
            text: 'Account Information',
            url: '/account/user-information',
            icon: 'icon-user',
            active: true,
        },
        {
            text: 'Notifications',
            url: '/account/notifications',
            icon: 'icon-alarm-ringing',
        },
        {
            text: 'Invoices',
            url: '/account/invoices',
            icon: 'icon-papers',
        },
        {
            text: 'Address',
            url: '/account/addresses',
            icon: 'icon-map-marker',
        },
        {
            text: 'Recent Viewed Product',
            url: '/account/recent-viewed-product',
            icon: 'icon-store',
        },
        {
            text: 'Orders',
            url: '/account/orders',
            icon: 'icon-heart',
        },
    ];

    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <AccountMenuSidebar data={accountLinks} />
                </Grid>
                <Grid item xs={12} md={8}>

                </Grid>
            </Grid>
        </div>
    )
};

const useStyles = makeStyles({
    
});

export default User;