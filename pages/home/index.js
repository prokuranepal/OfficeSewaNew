import React from 'react';
import { makeStyles } from '@material-ui/styles';
import HomeLayout from '../../components/layouts/HomeLayout';
import Breadcrumb from '../../components/elements/BreadCrumb';
import Home from '../../components/partials/Home';

const HomePage= (props) => {
    const classes = useStyles();
    const breadcrumb = [
        {
            text: 'Home',
        }
    ];
    
    return (
        <HomeLayout>
            <Breadcrumb breadcrumb={breadcrumb}/>
            <Home/>
        </HomeLayout>
    )
};

const useStyles = makeStyles({

});

export default HomePage;