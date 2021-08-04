import React from 'react';
import { makeStyles } from '@material-ui/styles';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';
import { colors } from '../../../theme/colors';
const ProductOnCart = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <LazyLoad>
                    <img src={'images/epson.jpg'} alt={'product'} className={classes.image} />
                </LazyLoad>
            </div>
            <div className={classes.content}>
                <Link href="/product/[pid]" as={`/product/`}>
                    <a className={classes.title}>{'Epson Printer'}</a>
                </Link>
            </div>
        </div>
    )
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        // flexFlow: 'row nowrap',
        margin: '0px 0px 20px',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px 0px'
    },
    content: {
        position: 'relative',
        padding: '10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    image: {
        // height: '100px',
        width: '80px'
    },
    title: {
        margin: 0,
        display: 'block',
        padding: '0 0 5px',
        fontSize: '14px',
        lineHeight: '1.2em',
        color: colors.primary,
        // --max-lines: 2;
        // max-height: calc(1.2em * var(--max-lines));
        overflow: 'hidden',
        paddingRight: '1rem',

        '&:hover': {
            color: colors.primary
        }
    }
}, { name: "ProductOnCart" });

export default ProductOnCart;
