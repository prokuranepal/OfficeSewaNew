import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Button, Link, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import { FiGift } from 'react-icons/fi'
import { BiEnvelope } from 'react-icons/bi'
import { BiPhone } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { GrCircleQuestion } from 'react-icons/gr'
import { FiInstagram } from 'react-icons/fi'
import { RiFacebookCircleLine } from 'react-icons/ri'

const useStyles = makeStyles(theme => ({
    main: {
        width: "100vw",
        background: "#F5FFF7",
        paddingTop: "40px",
        paddingBottom: "40px"
    },
    mainContainer: {
        width: "90%",
        margin: "0 auto",
        minHeight: "40vh",

    },
    subscriptionContainer: {
        width: "80%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
    },
    subscriptionTextContainer: {
        display: "flex",
        alignItems: "center"
    },
    subscriptiontext: {
        color: "#0D0D0D",
        fontSize: "24px",
        fontWeight: "500",
        paddingRight: "40px",
        lineHeight: "28px"
    },
    giftIcon: {
        fontSize: "44px",
        paddingRight: "10px",
        marginBottom: "7px"

    },
    inputContainer: {
        width: "400px",
        paddingRight: "20px",
        color: "#4A4A4A",
        '& input': {
            fontSize: "16px",
            color: "#4A4A4A",
            padding: "15px"
            // background: "red",

        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            border: "3px solid #4A4A4A",
            borderRadius: "50px"
        },
        '& .MuiOutlinedInput-root': {
            background: "#fff",
            borderRadius: "50px"
        }
        // '&::placeholder':{

        // }
    },
    envolopIcon: {
        fontSize: "24px"
    },
    subscriptionButton: {

        background: "#137D27",
        color: "#fff",
        fontSize: "16px",
        textTransform: "capitalize",
        borderRadius: "50px",
        padding: "15px 50px",
        lineHeight: "18px",
        fontWeight: "500"
    },
    info: {
        width: "100%",
        margin: "30px 0",
        minHeight: "200px",
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '&>*': {
            flex: "1"
        }
    },
    infoBox: {
        textAlign: "center"
    },
    infoBoxContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "20px "
    },
    infoIcon: {
        display: "inline-block",
        fontSize: "24px",
        // marginTop: "2px",
        // paddingRight: "10px"
    },
    infoHeaderText: {
        fontSize: "24px",
        lineHeight: "27px",
        fontWeight: "700",
        color: "#0D0D0D",
        padding: "0 14px"
    },
    infoSubHeaderText: {
        fontSize: "16px",
        lineHeight: "22px",
        color: "#137D27"
    },
    footer: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridGap: "20px",
        paddingTop: "20px",
        paddingBottom: "30px",
        // padding: " 0 30px ",
        borderBottom: "2px solid #09651A"

    },
    footerMainText: {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "18px",
        color: "#0D0D0D",
    },
    // links: {
    //     display: "block",
    //     margin: "5px 0",
    //     // color: "4A4A4A",
    //     // fontSize: "16px",
    //     // fontWeight: "400",
    //     // lineHeight: "22px",
    //     // padding: "5px 0",
    //     '& .MuiLink-underlineHover:hover': {
    //         textDecoration: "none"
    //     }

    // },
    link: {
        display: "block",
        margin: "12px 0",
        color: "#4A4A4A",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "22px",
        '&:hover,&:active': {
            textDecoration: "auto",
            color: "#4A4A4A"
        },
        '& .MuiLink-underlineHover:hover': {
            textDecoration: "none"
        }
    },
    policiesContainer: {
        paddingTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    socials: {
        display: "flex",
        alignItems: "center"
    },
    socialText: {
        fontSize: "16px",
        lineHeight: "22px",
        color: "#000"
    },
    socialIcons: {
        margin: "0 10px",
        fontSize: "18px",
        display: "inline-block",
        '&:last-child': {
            margin: " 0px",
        }
    },
    policiesText: {
        fontSize: "16px",
        lineHeight: "22px",

    }

}))
export const FooterEye = () => {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <div className={classes.mainContainer}>
                <div className={classes.subscriptionContainer}>
                    <div className={classes.subscriptionTextContainer}>
                        <FiGift className={classes.giftIcon} />
                        <Typography variant="span" className={classes.subscriptiontext}>Subscribe For Exciting Deals And Offers</Typography>
                    </div>
                    <div className={classes.emailContainer}>
                        <FormControl variant="outlined" className={classes.inputContainer}>
                            <OutlinedInput
                                placeholder="Email"
                                type="email"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton

                                            edge="end"
                                        >
                                            <BiEnvelope className={classes.envolopIcon} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                    </div>
                    <div className={classes.subscriptionButtonContainer}>
                        <Button className={classes.subscriptionButton} variant="contained">Subscribe</Button>
                    </div>
                </div>
                <div className={classes.info}>
                    <div className={classes.infoBox}>
                        <div className={classes.infoBoxContainer}>
                            <BiPhone className={classes.infoIcon} />
                            <Typography className={classes.infoHeaderText} variant="span">Phone Number</Typography>
                        </div>
                        <Typography className={classes.infoSubHeaderText} variant="h5">980253697</Typography>

                    </div>
                    <div className={classes.infoBox}>
                        <div className={classes.infoBoxContainer}>
                            <BiEnvelope className={classes.infoIcon} />
                            <Typography className={classes.infoHeaderText} variant="span">Email</Typography>
                        </div>
                        <Typography className={classes.infoSubHeaderText} variant="h5">support@chasmaghar.com</Typography>

                    </div>

                    <div className={classes.infoBox}>
                        <div className={classes.infoBoxContainer}>
                            <GrLocation className={classes.infoIcon} />
                            <Typography className={classes.infoHeaderText} variant="span">Location</Typography>
                        </div>
                        <Typography className={classes.infoSubHeaderText} variant="h5">Kupandole, lalitpur</Typography>

                    </div>

                    <div className={classes.infoBox}>
                        <div className={classes.infoBoxContainer}>
                            <BiPhone className={classes.infoIcon} />
                            <Typography className={classes.infoHeaderText} variant="span">FAQ</Typography>
                        </div>
                        <Typography className={classes.infoSubHeaderText} variant="h5">Vist FQA</Typography>

                    </div>


                </div>
                <div className={classes.footer}>
                    <div className={classes.footerContent}>
                        <Typography className={classes.footerMainText} variant="h3">Categories</Typography>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Sunglass for mens</a>
                        </Link>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Sunglass for womens</a>
                        </Link>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Sunglass for kids</a>
                        </Link>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Eyeglass for mens</a>
                        </Link>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Eyeglass for womens</a>
                        </Link>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Eyeglass for kids</a>
                        </Link>
                    </div>
                    <div className={classes.footerContent}>
                        <Typography className={classes.footerMainText} variant="h3">Brand</Typography>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Ray-ban</a>
                        </Link>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Sunglass hut</a>
                        </Link>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Okaley</a>
                        </Link>

                    </div>
                    <div className={classes.footerContent}>
                        <Typography className={classes.footerMainText} variant="h3">Useful</Typography>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Cart</a>
                        </Link>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Profile</a>
                        </Link>

                    </div>
                    <div className={classes.footerContent}>
                        <Typography className={classes.footerMainText} variant="h3">Features</Typography>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Home try-on</a>
                        </Link>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Virtual try-on</a>
                        </Link>
                        <Link href="#" className={classes.links}>
                            <a className={classes.link}>Upload subscription</a>
                        </Link>

                    </div>
                </div>
                <div className={classes.policiesContainer}>
                    <div className={classes.socials}>
                        <Typography variant="span" className={classes.socialText}>@chasmaghar</Typography>
                        <FiInstagram className={classes.socialIcons} />
                        <RiFacebookCircleLine className={classes.socialIcons} />
                    </div>
                    <div >
                        <Typography variant="span" className={classes.policiesText}>Privacy Policy Terms and Conditions of Use</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}
