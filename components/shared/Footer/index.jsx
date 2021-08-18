import React from 'react'
// import Link from "next/link"
import { HeaderText } from '../../HeaderText'
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Link } from '@material-ui/core'
import { FaFacebookF } from 'react-icons/fa'
import { TiSocialTwitter } from "react-icons/ti"
import { FaGooglePlusG } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { colors } from '../../utils/colors'
const useStyles = makeStyles(theme => ({
    mainContainer: {
        width: "100vw",
        background: "#fff",
        // position: 'fixed',
        // bottom: '0',

    },
    footerContainer: {
        width: '90vw',
        margin: "0 auto",
        minHeight: "30vh",
        display: "grid",
        gridTemplateColumns: "2fr 2fr 1fr 1fr",
        gridGap: "20px",
        padding: " 0 30px ",
        paddingTop: "40px",
        paddingBottom: "20px",
        background: "#fff",

        // [theme.breakpoints.up('sm')]: {
        //     gridTemplateColumns: "1fr",
        // }
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
        },
    },
    business: {
        marginLeft: "auto",
        [theme.breakpoints.down('xs')]: {
            margin: "0"
        }
    },
    footerTitle: {
        color: colors.primaryColor,
        fontSize: "16px",
        fontWeight: "600",
        margin: "10px 0",
        lineHeight: "18px"

    },
    findText: {
        color: colors.primaryColor,
        display: "block",
        fontSize: "16px",
        fontWeight: "600",
        margin: "20px 0",
        lineHeight: "18px",
        // margin: "10px 0"
    },
    bodyText: {
        color: colors.textColor,
        margin: "10px 0",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "16px"
    },
    number: {
        color: colors.primaryColor,
        margin: "10px 0",
        fontSize: "24px",
        fontWeight: "bold",
        padding: "10px 0"
    },
    link: {
        color: "gray ",
        '& a': {
            margin: "5px 0",
            display: 'inline-block',
            color: colors.textColor,
            fontSize: "14px",
            lineHeight: "16px"
        },
        // color: colors.textColor,
    },
    links: {
        color: "red"
    },
    icons: {
        marginTop: "10px"
    },
    facebookIcon: {
        fontSize: "24px",
        marginRight: "10px",
        color: colors.primaryColor
    },
    twitterIcon: {
        fontSize: "24px",
        margin: "0 10px",
        color: "#3D85B4"
    },
    instagramIcon: {
        fontSize: "24px",
        margin: "0 10px",
        color: "#CE37A3"
    },
    googleIcon: {
        fontSize: "24px",
        margin: "0 10px",
        color: "#E6260E"
    }
}))
const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.mainContainer}>
            <div className={classes.footerContainer}>
                <div className={classes.contactContainer}>

                    <Typography variant="h6" className={classes.footerTitle}>Contact us</Typography>
                    <Typography variant="h6" className={classes.bodyText}>+9779807841563</Typography>
                    <Typography variant="h6" className={classes.bodyText}>contact@officesewa.com</Typography>
                    {/* <Typography variant="h3" className={classes.number}>01 456789</Typography> */}
                    <Typography variant="body1" className={classes.bodyText}>Kandevatasthan, Kupondole, Lalitpur</Typography>

                    <div className={classes.icons}>
                        <Typography variant="h6" className={classes.findText}>Find Us At</Typography>

                        <FaFacebookF className={classes.facebookIcon} />
                        <TiSocialTwitter className={classes.twitterIcon} />
                        <FaGooglePlusG className={classes.googleIcon} />
                        <AiOutlineInstagram className={classes.instagramIcon} />
                    </div>
                    {/* <Typography variant="body1" className={classes.bodyText}>contact@officesewa.com</Typography> */}

                </div>

                <div className={classes.quickLinks}>
                    <Typography variant="h6" className={classes.footerTitle}>Quick Links</Typography>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a className={classes.link}>Policy</a>
                        </Link>
                    </div>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a className={classes.link}>Terms &amp; Condition</a>
                        </Link>
                    </div>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a className={classes.link}>Shipping</a>
                        </Link>
                    </div>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a className={classes.link}>Return</a>
                        </Link>
                    </div>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a className={classes.link}>FAQs</a>
                        </Link>
                    </div>

                </div>
                <div className={classes.company}>
                    <Typography variant="h6" className={classes.footerTitle}>Company</Typography>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a className={classes.link}>About Us</a>
                        </Link>
                    </div>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a className={classes.link}>Affillate</a>
                        </Link>
                    </div>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a classname={classes.link}>Career</a>
                        </Link>
                    </div>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a className={classes.link}>Contact</a>
                        </Link>
                    </div>

                </div>
                <div className={classes.business}>
                    <Typography variant="h6" className={classes.footerTitle}>Business</Typography>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a className={classes.link}>Checkout</a>
                        </Link>
                    </div>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a className={classes.link}>My account</a>
                        </Link>
                    </div>
                    <div className={classes.links}>
                        <Link href="#" className={classes.link}>
                            <a className={classes.link}>Shop</a>
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Footer;