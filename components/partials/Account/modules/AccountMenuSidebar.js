import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../../../theme/colors';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import Image from 'next/image'
const AccountMenuSidebar = (props) => {
    const classes = useStyles();

    const myLoader = ({ src, width, quality }) => {
        return `https://scontent.fktm12-1.fna.fbcdn.net/v/t1.18169-9/19511462_1337493859638587_3362526149963183674_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=r25IQIRemrcAX-hcPlv&_nc_ht=scontent.fktm12-1.fna&oh=26a30a527d66d2857197bcbeebdbf1f0&oe=6143F92F`
    }

    return (
        <div className={classes.navContainer}>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <div style={{textAlign: 'center'}}>
                        <Image
                            className={classes.userImage}
                            alt="User"
                            width={50}
                            height={50}
                            loader={myLoader}
                            // src={"/images/epson.jpg"}
                            src={'https://scontent.fktm12-1.fna.fbcdn.net/v/t1.18169-9/19511462_1337493859638587_3362526149963183674_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=r25IQIRemrcAX-hcPlv&_nc_ht=scontent.fktm12-1.fna&oh=26a30a527d66d2857197bcbeebdbf1f0&oe=6143F92F'}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div className={classes.user}>
                        <div>Hello</div>
                        <div>Swainstha@gmail.com</div>
                    </div>
                </Grid>
            </Grid>
            <div>
                <ul className={classes.list}>
                    {props.data.map(link => (
                        <li key={link.text} className={classes.listItem}>
                            <Link href={link.url}>
                                <a className={[classes.listItemA, link.active ? classes.active : classes.inActive].join(" ")}>
                                    <i className={link.icon}></i>
                                    {link.text}
                                </a>
                            </Link>
                        </li>
                    ))}
                    <li className={classes.listItem}>
                        <Link href="/account/my-account">
                            <a className={classes.listItemA}>Logout</a>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
};

const useStyles = makeStyles({
    navContainer: {
        backgroundColor: 'white',
        marginLeft: '60px',
        marginRight: '40px',
        padding: '20px',
        color: colors.primary
    },
    listItem: {
        borderBottom: '1px solid #eaeaea'
    },
    active: {
        backgroundColor: colors.primary,
        color: 'white',
        textDecoration: 'none',
    },
    inActive: {
        backgroundColor: 'white',
        color: colors.primary,
        textDecoration: 'none',
    },
    list: {
        border: '1px solid #d1d1d1',
        listStyleType: 'none'
    },
    listItemA: {
        display: 'block',
        padding: '15px 20px',
        lineHeight: '20px',
        fontSize: '16px',
        fontWeight: 500,
        textTransform: 'capitalize',
        textDecoration: 'none',
        // backgroundColor: 'white',
        // color: colors.primary,
        '&:hover': {
            backgroundColor: colors.primary,
            color: 'white',
            textDecoration: 'none',
        }
    },
    user: {
        padding: '15px 10px'
    },
    userImage: {
        
        borderRadius: '50px',
        
    }
});

export default AccountMenuSidebar;