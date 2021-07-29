import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import LinkButton from '../../elements/LinkButton';
import ShippingInfo from './modules/ShippingInfo';
import { colors } from '../../../theme/colors';
import { fontSize } from '../../../theme/font';
import CustomButton from '../../elements/CustomButton';


const Shipping = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <div className={classes.shippingContainer}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <div className={classes.header}>Shipping Address</div>
                                <p className={classes.address}>No Shipping Address Found</p>
                                <ShippingInfo />
                                <LinkButton title={'Add Address'} />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classes.header}>Billing Address</div>
                                <p className={classes.address}>No Shipping Address Found</p>
                                <ShippingInfo />
                                <LinkButton title={'Add Address'} />
                            </Grid>

                        </Grid>
                    </div>
                    <div className={classes.feeContainer}>
                        <span>Shipping Fee</span>
                        <span className={classes.shippingFee}>NRs 50</span>
                    </div>

                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={classes.summaryContainer}>
                        <div className={classes.summary}>
                            <div className={classes.summaryHeader}>Checout Summary</div>
                            <Divider />
                            <div className={classes.cost}>
                                <div className={classes.list}>
                                    <p>Sub Total</p>
                                    <p>NRs 1000</p>
                                </div>
                                <div className={classes.list}>
                                    <p>Delivery Fee</p>
                                    <p>NRs 50</p>
                                </div>
                            </div>
                            <Divider />
                            <div className={classes.totalContainer}>
                                <p className={classes.totalText}>Total</p>
                                <p className={classes.totalAmount}>NRs 1050</p>
                            </div>
                        </div>
                        <div className={classes.buttonContainer}>
                            <CustomButton title={'Proceed To Checkout'} style={{width: '100%'}} url={'/checkout'}/>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

const useStyles = makeStyles(theme => ({
    shippingContainer: {
        marginLeft: '60px',
        border: 'solid 1px #aaa',
        padding: '20px 30px',
        // [theme.breakpoints.down('md')]: {
        //     marginRight: '60px',
        //   },
    },
    feeContainer: {
        marginTop: '30px',
        marginLeft: '60px',
        border: 'solid 1px #aaa',
        padding: '15px 30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Work-Sans'
    },
    header: {
        color: colors.dark,
        fontSize: fontSize.secondaryHeader,
        fontWeight: 'bold',
        fontFamily: 'Work-Sans',
        padding: '20px 0px'
    },
    address: {
        fontSize: '14px'
    },
    shippingFee: {
        color: colors.dark,
        fontSize: fontSize.secondaryHeader,
        fontWeight: 'bold',
        fontFamily: 'Work-Sans'
    },
    summaryContainer: {
        marginRight: '60px',
        marginLeft: '60px'
    },
    summaryHeader: {
        color: colors.dark,
        fontSize: fontSize.secondaryHeader,
        fontWeight: 'bold',
        fontFamily: 'Work-Sans',
        padding: '20px 10px'
    },
    summary: {
        padding: '10px'
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cost: {
        padding: '20px 10px 10px'
    },
    totalContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 10px 10px'
    },
    totalText: {
        color: colors.dark,
        fontSize: '18px',
        fontWeight: 'bold'
    },
    totalAmount: {
        color: colors.secondary,
        fontSize: '18px',
        fontWeight: 'bold'
    },
    buttonContainer: {
        marginBottom: '20px'
    }
}));

export default Shipping;