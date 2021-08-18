import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../../../theme/colors';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
const AccountMenuSidebar = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.navContainer}>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <img

                        alt="User"
                        width={30}
                        // height={50}
                        src={'images/logo.png'}
                    />
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
                                <a className={[classes.listItemA, link.active?classes.active:classes.inActive].join(' ')}>
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
        backgroundColor: 'white',
        color: colors.primary,
        '&:hover': {
            backgroundColor: colors.primary,
            color: 'white',
            textDecoration: 'none',
        }
    },
    user: {
        padding: '15px 10px'
    }
});

export default AccountMenuSidebar;