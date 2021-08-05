import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { fontSize } from '../../../theme/font';
import { colors } from '../../../theme/colors';

const LoginPage = (props) => {
    const classes = useStyles();


    return (
        <div className={classes.breadcrumbs}>
            <Breadcrumbs aria-label="breadcrumb">
                {props.breadcrumb ? props.breadcrumb.map(crumb => {
                    return crumb.url ? <Link color="inherit" href={crumb.url} key={crumb.text}>
                        <div className={classes.linkText}>{crumb.text}</div>
                    </Link> : <div className={classes.text} key={crumb.text}>{crumb.text}</div>
                })

                    : null}
            </Breadcrumbs>
        </div>
    )
};

const useStyles = makeStyles({
    breadcrumbs: {
        width: '100%',
        paddingLeft: '60px',
        paddingTop: '15px',
        paddingBottom: '15px',
        backgroundColor: colors.secondaryBackgroundColor
    },
    linkText: {
        fontSize: fontSize.breadcrumbText,
        '&:hover': {
            color: colors.primary
        }
    },
    text: {
        fontSize: fontSize.breadcrumbText,
        color: colors.primary
    }
});

export default LoginPage;