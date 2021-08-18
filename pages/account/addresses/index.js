import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HomeLayout from '../../../components/layouts/HomeLayout';
import Breadcrumb from '../../../components/elements/BreadCrumb';
import Addresses from '../../../components/partials/Account/Addresses'
const AddressesPage = (props) => {
    const classes = useStyles();
    const breadcrumb = [
        {
            text: 'Home',
        }
    ];
    
    return (
        <HomeLayout>
            <Breadcrumb breadcrumb={breadcrumb}/>
            <Addresses/>
        </HomeLayout>
    )
};

const useStyles = makeStyles({

});

export default AddressesPage;