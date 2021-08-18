import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HomeLayout from '../../../components/layouts/HomeLayout';
import Breadcrumb from '../../../components/elements/BreadCrumb';
import User from '../../../components/partials/Account/User';

const UserPage = (props) => {
    const classes = useStyles();
    const breadcrumb = [
        {
            text: 'Home',
        }
    ];

    const user = {
        name: 'Swain Shrestha',
        gender: 'Male',
        phone: '9842558818',
        email: 'swainstha@gmail.com',
        dob: '1995-06-24'
    }
    
    return (
        <HomeLayout>
            <Breadcrumb breadcrumb={breadcrumb}/>
            <User user={user}/>
        </HomeLayout>
    )
};

const useStyles = makeStyles({

});

export default UserPage;