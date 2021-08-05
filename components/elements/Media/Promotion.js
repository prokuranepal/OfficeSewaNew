import React from 'react';
import Link from 'next/link';
// import { baseUrl } from '~/repositories/Repository';
import { makeStyles } from "@material-ui/core/styles";

const Promotion = ({ link, image }) => {
    const classes = useStyles();

    if (image) {
        return (
            <Link href={link}>
                <a className={classes.collection}>
                    <img src={image} alt="martfury" />
                </a>
            </Link>
        );
    } else {
        return (
            <Link href={link ? link : '/shop'}>
                <a className={classes.collection}>
                    <img src="/static/img/not-found.jpg" alt="martfury" />
                </a>
            </Link>
        );
    }
};


const useStyles = makeStyles(theme => ({
       collection:
       {    
           'max-height':'400px',
           display: 'block',
            'margin-bottom': '30px',

            '&:last-child': {
                'margin-bottom': 0,
            }}}))
 
export default Promotion;
