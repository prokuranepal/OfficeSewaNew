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
    
    return (
        <HomeLayout>
            <Breadcrumb breadcrumb={breadcrumb}/>
            <User/>
        </HomeLayout>
    )
};

const useStyles = makeStyles({

});

export default UserPage;