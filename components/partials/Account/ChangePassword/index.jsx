import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import AccountMenuSidebar from '../modules/AccountMenuSidebar';
import UserInfo from '../modules/UserInfo';
import HeaderText from '../../../elements/HeaderText';
import ChangePassword from './ChangePassword';

const ChangePasswordPage = (props) => {
    const classes = useStyles();
    const accountLinks = [
        {
            text: 'Account Information',
            url: '/account/user-information',
            icon: 'icon-user',
            
        },
        // {
        //     text: 'Notifications',
        //     url: '/account/notifications',
        //     icon: 'icon-alarm-ringing',
        // },
        // {
        //     text: 'Invoices',
        //     url: '/account/invoices',
        //     icon: 'icon-papers',
        // },
        {
            text: 'Address',
            url: '/account/addresses',
            icon: 'icon-map-marker',
        },
        {
            text: 'Change Password',
            url: '/account/change-password',
            icon: 'icon-store',
            active: true,
        },
        // {
        //     text: 'Orders',
        //     url: '/account/orders',
        //     icon: 'icon-heart',
        // },
    ];

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <AccountMenuSidebar data={accountLinks} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <div className={classes.right}>
                        <HeaderText title={'Account Information'} />
                        <Divider />
                        <ChangePassword/>
                    </div>
                    
                </Grid>
            </Grid>
        </div>
    )
};

const useStyles = makeStyles({
    root: {
        margin: '20px 0px'
    },
    right: {
        margin: '0px 20px'
    }
});

export default ChangePasswordPage;