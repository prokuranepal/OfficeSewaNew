import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HomeLayout from '../../components/layouts/HomeLayout';
import Breadcrumb from '../../components/elements/BreadCrumb';
import ForgotPassword from '../../components/partials/ForgotPassword/index';
const RegisterPage = (props) => {
    const classes = useStyles();
    const breadcrumb = [
        {
            text: 'Home',
            url: '/ForgotPassword',
        },
        {
            text: 'ForgotPassword',
        },
    ];
    return (
        <HomeLayout>
            <Breadcrumb breadcrumb={breadcrumb} />
            <ForgotPassword />
        </HomeLayout>
    )
};

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

export default ForgotPassword;