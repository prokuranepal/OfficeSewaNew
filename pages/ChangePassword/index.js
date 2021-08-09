import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HomeLayout from '../../components/layouts/HomeLayout';
import Breadcrumb from '../../components/elements/BreadCrumb';
import ChangePassword from '../../components/partials/ChangePassword';
const ChangePasswordPage = (props) => {
    const classes = useStyles();
    const breadcrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'ChangePassword',
        },
    ];
    return (
        <HomeLayout>
            <Breadcrumb breadcrumb={breadcrumb} />
            <ChangePassword />
        </HomeLayout>
    )
};

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

export default ChangePasswordPage;