import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import AccountMenuSidebar from '../modules/AccountMenuSidebar';
import AddressTable from '../../Shipping/modules/AddressTable';
import AddressTableContainer from '../modules/AddressTableContainer';
import HeaderText from '../../../elements/HeaderText';
import FormEditAddress from '../../Shipping/modules/FormEditAddress'

const Addresses = (props) => {
    const classes = useStyles();
    
    const [showtable, setShowTable] = useState(true);
    const [editableAddress, setEditableAddress] = useState(null)
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
            active: true,
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

    const editAddress = (address) => {
        setShowTable(false);
        setEditableAddress(address)
    }

    const addAddress = () => {
        setShowTable(false);
        setEditableAddress(null);
    }

    const close = () => {

        setShowTable(true)
        setEditableAddress(null)
    }

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <AccountMenuSidebar data={accountLinks} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <div className={classes.right}>
                        <HeaderText title={'Addresses'} />
                        <Divider />

                        <div className={classes.table}>
                            {showtable?<AddressTableContainer  editAddress={editAddress} close={close} addAddress={addAddress}/>:
                            <FormEditAddress close={close} data={editableAddress}/>}
                        </div>
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
    },
    table: {
        marginTop: '20px'
    }
});

export default Addresses;