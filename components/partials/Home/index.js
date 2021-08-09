import React from 'react';
import { makeStyles } from '@material-ui/styles';

const Home = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            HOME
        </div>
    )
};

const useStyles = makeStyles({
    container: {
        width: '100%'
    }
});

export default Home;