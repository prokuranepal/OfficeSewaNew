import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Popper from '@material-ui/core/Popper';
import ProductOnCart from '../../../elements/Product/ProductOnCart';
import CustomButton from '../../../elements/CustomButton';
import { colors } from '../../../../theme/colors';
const MiniCart = (props) => {
    const classes = useStyles();
    return (
        <div className={props.showMiniCart?classes.visible: classes.invisible}>
            <div className={classes.root}>
                <div className={classes.cartContainer}>
                    <div className={classes.itemContainer}>
                        {[1, 2, 3].map((item, index) => {
                            return <ProductOnCart key={index}/>
                        })}
                    </div>
                    <div className={classes.list}>
                        <span className={classes.subTotalText}>Sub Total</span>
                        <span className={classes.subTotalPrice}>NRs 100000</span>
                    </div>
                    <div className={classes.buttonContainer}>

                        <CustomButton title={'View Cart'} url={'/shoppingcart'}/>
                        <CustomButton title={'Checout'} url={'/shipping'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        minWidth: '300px',
        right: '0px',
        top: '23px',
        zIndex: 30,
        // padding: '10px',
        transform: 'translate(0 ,20px)',
        // @include transform(translate(0 20px));
        backgroundColor: 'white',
        overflow: 'hidden',
        border: '1px solid #aaa',
        borderRadius: '5px'

    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px'
    },
    itemContainer: {
        position: 'relative',
        padding: '10px 20px',
        
        maxHeight: '300px',
        // height: '100px',
        overflow: 'auto',
        marginBottom: '20px'
    },
    cartContainer: {
        // maxHeight: '400px'
    },
    invisible: {

        // display: 'block'
        visibility: 'hidden',
        opacity: 0,
        // transition: 'all 0.4s ease',
    },
    visible: {
        visibility: 'visible',
        opacity: 1,
        transition: 'all 0.4s ease',
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 20px'
    },
    subTotalText: {
        color: colors.primary,
        fontSize: '20px',
        fontWeight:'bold'
    },
    subTotalPrice: {
        color: colors.secondary,
        fontSize: '20px',
        fontWeight:'bold'
    }
})

export default MiniCart;
