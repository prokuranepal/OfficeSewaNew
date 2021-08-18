import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import AccountMenuSidebar from '../modules/AccountMenuSidebar';
import UserInfo from '../modules/UserInfo';
import HeaderText from '../../../elements/HeaderText';
import UserInformationForm from '../modules/UserInformationForm';
const User = (props) => {
    const classes = useStyles();
    const [edit, setEdit] = useState(false);
    const accountLinks = [
        {
            text: 'Account Information',
            url: '/account/user-information',
            icon: 'icon-user',
            active: true,
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
        },
        // {
        //     text: 'Orders',
        //     url: '/account/orders',
        //     icon: 'icon-heart',
        // },
    ];

    const close =() => {
        setEdit(false)
    }

    const editInformation = () => {
        setEdit(true)
    };

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
                        {edit?<UserInformationForm close={close}/>:<UserInfo user={props.user} editInformation={editInformation}/>}
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

export default User;