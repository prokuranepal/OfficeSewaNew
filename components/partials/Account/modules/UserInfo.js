import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import CustomButton from '../../../elements/CustomButton'
const UserInfo = (props) => {
    const classes = useStyles();
    return (
            
            <div className={classes.container}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.marginBottom}>
                        <div className={classes.tag}>Full Name</div>
                        <div className={classes.value}>{props.user?props.user.name:null}</div>
                    </div>
                    <div className={classes.marginBottom}>
                        <div className={classes.tag}>Phone Number</div>
                        <div className={classes.value}>{props.user?props.user.phone:null}</div>
                    </div>
                    <div className={classes.marginBottom}>
                        <div className={classes.tag}>Date of Birth</div>
                        <div className={classes.value}>{props.user?props.user.dob:null}</div>
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <div className={classes.marginBottom}>
                        <div className={classes.tag}>Email Address</div>
                        <div className={classes.value}>{props.user?props.user.email:null}</div>
                    </div>
                    <div className={classes.marginBottom}>
                        <div className={classes.tag}>Gender</div>
                        <div className={classes.value}>{props.user?props.user.gender:null}</div>
                    </div>
                    </Grid>
                </Grid>
                <CustomButton title={'Edit Information'} primary={true} onClick={props.editInformation}/>
            </div>
    )
};

const useStyles = makeStyles({
   
    container: {
        backgroundColor: 'white',
        padding: '20px',
        marginTop: '20px'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: '20px'
    },
    marginBottom: {
        marginBottom: '30px'
    },
    tag: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#666',
    },
    value: {
        color: '#444',
        fontSize: '18px',
        fontWeight: 'bold',
    }
});

export default UserInfo;