import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Popper from '@material-ui/core/Popper';
import ProductOnCart from '../../../elements/Product/ProductOnCart';
import CustomButton from '../../../elements/CustomButton';
const MiniCart = (props) => {
    const classes = useStyles();
    return (
        <div className={props.showMiniCart?classes.visible: classes.invisible}>
            <div className={[classes.root]}>
                <div className={classes.cartContainer}>
                    <div className={classes.itemContainer}>
                        {[1, 2, 3, 4, 5, 6].map(item => {
                            return <ProductOnCart />
                        })}
                    </div>
                    <div className={classes.buttonContainer}>

                        <CustomButton title={'View Cart'} />
                        <CustomButton title={'Checout'} />
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
        right: '-20px',
        top: '22px',
        // zIndex: 30,
        // padding: '10px',
        transform: 'translate(0 ,20px)',
        // @include transform(translate(0 20px));
        
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
        padding: '10px',
        maxHeight: '300px',
        overflow: 'auto'
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
}, { name: 'MiniCart' })

export default MiniCart;
