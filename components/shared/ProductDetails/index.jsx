import React from 'react'
import Image from 'next/image'
import { Modal, Typography, Grid, makeStyles, TextareaAutosize, TextField, Button } from "@material-ui/core"
import { useState } from 'react';
import ProductHeader from '../../elements/ProductHeader';
import { colors } from '../../../theme/colors'
import ProductPrice from '../../elements/ProductPrice';
import ProductDescription from '../../elements/ProductDescription';
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import CustomButton from '../../elements/CustomButton';
import { BsHeart } from 'react-icons/bs'
import { AiFillSignal } from 'react-icons/ai'
import { carouselData } from '../../../public/carauselData';
import { Carousel } from '../Carousel/index'
import { BsFillStarFill } from 'react-icons/bs'
import { RateReviewSharp } from '@material-ui/icons';
// const bigImage = '/../../../images/big.png'
// const bigImage = "/../images/big.png"
const useStyles = makeStyles((theme) => ({

    modal: {
        // margin: "0 auto",
        width: "100vw",
        // background: "red",
        minHeight: "100vh",
        padding: theme.spacing(1),
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        marginTop: "20px",
        overflow: "auto",
    },
    image: {
        width: "100%",
        height: "70%",       // background: "red"
        objectFit: "cover",
        height: "350px",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
    },
    gridContainer: {
        height: "100%",
    },
    modalItem: {
        // background: "red",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // alignItems: "center"
        [theme.breakpoints.down('sm')]: {
            padding: "0"
        },
        height: "100%",
        overFlow: "hidden",
        paddingRight: "2%"
    },
    imageContainer: {

        // background: "blue"
        // paddingRight: "20px"
    },
    contentContainer: {
        paddingLeft: " 30px",
        paddingRight: "30px",
        [theme.breakpoints.down('sm')]: {
            padding: "0",
            paddingTop: "20px"
        },
        height: "100%",
        overFlow: "hidden"
    },
    modalContainer: {
        width: "90%",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        padding: "4rem",
        background: "#fff",
        '&::-webkit-scrollbar ': {
            display: "none", /* for Chrome, Safari, and Opera */
        },

        overflow: "auto",
        overflowStyle: "none",
        scrollbarWidth: "none",
        overflowyY: "scroll",
        [theme.breakpoints.down("lg")]: {
            minHeight: "100vh",

        },

        [theme.breakpoints.down("sm")]: {
            minHeight: "200vh"
        },

    },
    first: {
        // height: "50vh",
        minHeight: "50vh",
        borderBottom: "1px solid #c4c4c4",
        paddingBottom: "40px"

    },
    containerStyle: {
        padding: '2px 24px',
        margin: '5px 0px'
    },
    quantity: {
        fontSize: "20px",
        lineHeight: "23px",
        color: "#3E4756",
        marginTop: "20px",
        marginBottom: "10px"
    },
    button: {
        width: "150px",
        // background: "red",
        display: "flex",
        alignItems: "center",
        padding: "10px 0",
        border: "1px solid #000",
    },
    buttonIcon: {
        display: "inline-block",
        width: "100px",
        color: "#1961A5",
        fontSize: "12px",
        cursor: "pointer"
    },
    amount: {
        display: "inline-block",
        // width: "50px"
        color: colors.black,
        fontSize: "16px",
        lineHeight: "18px"
    },
    text: {
        color: colors.black,
        padding: "3px 0",
        fontSize: "16px",
        fontWeight: '400',
        lineHeight: '25px'
    },
    quantityContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    wishIcon: {
        display: "inline-block",
        margin: "0 10px",
        fontSize: "24px"
    },

    buttonContainer: {
        margin: "30px 0",
        display: "flex",
        justifyContent: "space-between",
        "&>*": {
            flexBasis: "46%",
            [theme.breakpoints.down('sm')]: {
                margin: "5px 0"
            }
        },
        // [theme.breakpoints.down('sm')]: {
        //     flexDirection: "column",
        // }
    },
    sideImageContainer: {
        height: "100%"
    },
    sideImageTop: {
        width: "100%",
        paddingBottom: "10px",
        height: "50%",
        height: "235px",
        objectFit: "cover"

    },
    sideImageBottom: {
        width: "100%",
        paddingTop: "10px",
        height: "50%",
        height: "235px",
        objectFit: "cover"


    },
    productDetails: {
        minHeight: "50vh",
        background: "fff",
        padding: "40px 0"
    },
    productDetailsContainer: {
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        paddingBottom: "10px"

    },
    detailsText: {
        paddingRight: "10px",
        paddingLeft: "0",
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "23px",
        cursor: "pointer",
        userSelect: "none",

        "&:not(:first-of-type)": {
            padding: "0 10px",
            // margin: "10px",
            // marginLeft: "0"     
            fontSize: "20px",
            fontWeight: "600",
            lineHeight: "23px",
            cursor: "pointer",

            [theme.breakpoints.down('sm')]: {


                padding: "0 5px",
                // margin: "10px",
                // marginLeft: "0"     
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "23px"


            }
        },
        [theme.breakpoints.down('sm')]: {


            padding: "0 5px",
            // margin: "10px",
            // marginLeft: "0"     
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "23px"


        }
    },
    activeDetailsText: {
        color: colors.primary,
    },
    price: {
        color: "#F79A33",
        fontSize: "48px",
        lineHeight: "56.3px",
        fontWeight: "700",
        display: "block"
    },
    review: {
        // display: "block"

    },
    star: {
        color: "#F79E3B",
        width: "24px",
        margin: "7px 0",
        display: "block"
    },
    singleStar: {
        color: "#F79E3B",
        width: "24px",
        margin: "7px 0",

    },
    totalReviews: {
        fontSize: "16",
        lineHeight: "18px",
        color: colors.black
    },
    reviews: {
        paddingTop: "20px",

    },
    reviewContainer: {
        padding: "5px 0",
        display: "flex",
        alignItems: 'center'
    },
    reviewsText: {
        fontSize: "14px",
        lineHeight: "16px"
    },
    reviewBar: {
        margin: "0 20px",
        flex: "1",
        height: "8px",
        backgroundColor: "#C4C4C4"
    },
    emailContainer: {
        paddingLeft: " 60px",
        paddingRight: "30px",
        [theme.breakpoints.down("sm")]: {
            padding: "0",
            paddingTop: "40px"
        }
    },
    ratingText: {
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "18px",
        color: colors.black,
        padding: "10px 0",
        paddingRight: "10px"
    },
    emailText: {
        fontSize: "16px",
        lineHeight: "18px",
        color: "#3E4756"
    },
    ratingContainer: {
        display: "flex",
        alignItems: "center"
    },
    textArea: {
        display: "block",
        width: "100%",
        border: "none",
        padding: "10px",
        fontSize: "16px",
        lineHeight: "18px",
        color: "#595959",
        '&:focus': {
            // border: "10px solid #1961A5",
        },
        '&:focus::placeholder': {
            opacity: "0"
        },
        border: "1px solid #595959",
        borderRadius: "4px",
        '&::placeholder': {
            paddingLeft: "10px",
            paddingTop: "10px"

        }
    },
    inputFieldContainer: {
        marginTop: "20px",
        marginBottom: "15px",
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "1fr 1fr"
    },
    inputField: {
        fontSize: "16px",
        lineHeight: "18px",
        color: "#595959",

        '& .MuiOutlinedInput-notchedOutline': {
            border: "1px solid #595959"
        },

        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #1961A5"

        },
        '& input': {
            fontSize: "16px",
            lineHeight: "18px",
            color: "#595959",
        }
    },
    submitButton: {
        backgroundColor: colors.primary,
        fontSize: "18px",
        lineHeight: "21px",
        fontWeight: "500",
        color: "#fff",
        textTransform: "capitalize",
        // width: "25%",
        padding: "10px 20px"

    }




}));
export const ProductDetails = (props) => {
    const classes = useStyles()
    const rootRef = React.useRef(null);
    const [open, setOpen] = useState(true)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(4)
    const [description, setDescription] = useState(false)
    const [specifications, setSpecifiacations] = useState(false)
    const [vendor, setVendor] = useState(false)
    const [review, setReview] = useState(true)
    const [imgSrc, setImgSrc] = useState(carouselData[0].imgSrc)
    // const data = carouselData.length = index
    const [carousel, setCarouselData] = useState(carouselData.slice(startIndex, endIndex))
    // console.log(data, "data")
    const [amount, setAmount] = useState(1)
    const handleClick = (src) => {
        setImgSrc(src)
    }
    console.log(imgSrc, "imgsource")
    const increaseAmountHandler = () => {
        setAmount(amount + 1)

    }
    const decreaseAmountHandler = () => {
        setAmount(amount - 1)
        if (amount <= 1)
            setAmount(1)
    }
    const carouselIncreaseHandler = () => {
        setStartIndex(startIndex + 1)
        setEndIndex(endIndex + 1)
        if (endIndex >= carouselData.length) {
            setStartIndex(0)
            setEndIndex(4)
        }
        setCarouselData(carouselData.slice(startIndex, endIndex))
    }
    const carouselDecreaseHandler = () => {
        setStartIndex(startIndex - 1)
        setEndIndex(endIndex - 1)
        if (startIndex <= 0) {
            setStartIndex(carouselData.length - 4)
            setEndIndex(carouselData.length)
        }
        setCarouselData(carouselData.slice(startIndex, endIndex))

    }
    console.log(startIndex, endIndex, "index")
    console.log(carousel, "newCarousel")
    const handleClose = () => {
        setOpen(false)
    }
    const onClickHandler = (name) => {
        if (name === "descriptions") {
            setDescription(true)
            setReview(false)
            setVendor(false)
            setSpecifiacations(false)
        }
        if (name === "specifications") {
            setDescription(false)
            setReview(false)
            setVendor(false)
            setSpecifiacations(true)

        }
        if (name === "vendor") {
            setDescription(false)
            setReview(false)
            setVendor(true)
            setSpecifiacations(false)

        }
        if (name === "review") {
            setDescription(false)
            setReview(true)
            setVendor(false)
            setSpecifiacations(false)

        }
    }
    return (
        <>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                onClose={handleClose}
                open={open}
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
            // container={() => rootRef.current}
            >
                <div className={classes.modalContainer}>
                    <div className={classes.first}>
                        <Grid container className={classes.gridContainer}>
                            <Grid item xs={12} md={4} className={classes.modalItem}>
                                {/* <Image src={"/images/big.png"} width={1000} height={600} priority className={classes.image} /> */}
                                <img className={classes.image} src={imgSrc} alt="" />

                                <Carousel handleClick={handleClick} carouselDecreaseHandler={carouselDecreaseHandler} carouselIncreaseHandler={carouselIncreaseHandler} data={carousel} />
                            </Grid>
                            <Grid item xs={12} md={6} className={classes.contentContainer}>
                                <ProductHeader>Unero Military Classical Backpack</ProductHeader>
                                <ProductPrice>Rs 2400</ProductPrice>
                                <ul className={classes.containerStyle}>
                                    <li className={classes.text}>Unrestrained and portable active stereo speaker</li>
                                    <li className={classes.text}> Free from the confines of wires and chords</li>
                                    <li className={classes.text}> 20 hours of portable capabilities</li>
                                    <li className={classes.text}> Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
                                    <li className={classes.text}> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                                </ul>
                                <Typography variant="h3" className={classes.quantity}>Quantity</Typography>
                                <div className={classes.quantityContainer}>
                                    <div className={classes.button}>
                                        <AiOutlineMinus onClick={decreaseAmountHandler} className={classes.buttonIcon} />
                                        <Typography variant="span" className={classes.amount}>{amount}</Typography>
                                        <AiOutlinePlus onClick={increaseAmountHandler} className={classes.buttonIcon} />

                                    </div>
                                    <div className={classes.wishContainer}>
                                        <BsHeart className={classes.wishIcon} />
                                        <AiFillSignal className={classes.wishIcon} />
                                    </div>
                                </div>
                                <div className={classes.buttonContainer}>
                                    <CustomButton title="Add to Cart" fullWidth="100%" primary={colors.primary} />
                                    <CustomButton title="Buy now" fullWidth="100%" secondary={colors.secondary} />

                                </div>
                            </Grid>
                            <Grid xs={12} md={2} item className={classes.sideImageContainer}>
                                <img src={carouselData[0].imgSrc} className={classes.sideImageTop} />
                                <img src={carouselData[0].imgSrc} className={classes.sideImageBottom} />

                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.productDetails}>
                        <ul className={classes.productDetailsContainer}>
                            <li className={`${classes.detailsText}  ${description ? classes.activeDetailsText : "null"}`}
                                onClick={() => onClickHandler("descriptions")}>Descriptions
                            </li>
                            <li className={`${classes.detailsText}  ${specifications ? classes.activeDetailsText : "null"}`}
                                onClick={() => onClickHandler("specifications")}>Specifications
                            </li>
                            <li className={`${classes.detailsText}  ${vendor ? classes.activeDetailsText : "null"}`}
                                onClick={() => onClickHandler("vendor")}>Vendor
                            </li>
                            <li className={`${classes.detailsText}  ${review ? classes.activeDetailsText : "null"}`}
                                onClick={() => onClickHandler("review")}>Review
                            </li>

                        </ul>
                        {review ?
                            <Grid container>
                                <Grid item xs={12} md={3} className={classes.review}>
                                    <Typography variant="h4" className={classes.price}>4.00</Typography>
                                    <BsFillStarFill className={classes.star} />
                                    <Typography variant="span" className={classes.totalReviews}>1 Review</Typography>
                                    <div className={classes.reviews}>
                                        <div className={classes.reviewContainer}>
                                            <Typography variant="span" className={classes.reviewText}>5 star</Typography>
                                            <div className={classes.reviewBar}></div>
                                            <Typography variant="span" className={classes.reviewText}>100%</Typography>
                                        </div>
                                        <div className={classes.reviewContainer}>
                                            <Typography variant="span" className={classes.reviewText}>5 star</Typography>
                                            <div className={classes.reviewBar}></div>
                                            <Typography variant="span" className={classes.reviewText}>100%</Typography>
                                        </div>
                                        <div className={classes.reviewContainer}>
                                            <Typography variant="span" className={classes.reviewText}>5 star</Typography>
                                            <div className={classes.reviewBar}></div>
                                            <Typography variant="span" className={classes.reviewText}>100%</Typography>
                                        </div>
                                        <div className={classes.reviewContainer}>
                                            <Typography variant="span" className={classes.reviewText}>5 star</Typography>
                                            <div className={classes.reviewBar}></div>
                                            <Typography variant="span" className={classes.reviewText}>100%</Typography>
                                        </div>
                                        <div className={classes.reviewContainer}>
                                            <Typography variant="span" className={classes.reviewText}>5 star</Typography>
                                            <div className={classes.reviewBar}></div>
                                            <Typography variant="span" className={classes.reviewText}>100%</Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={7} className={classes.review}>
                                    <div className={classes.emailContainer}>
                                        <Typography variant="h4" className={classes.emailText}>Your email address will no be published.</Typography>
                                        <div className={classes.ratingContainer}>
                                            <Typography variant="h5" className={classes.ratingText}>Your rating of product</Typography>
                                            <BsFillStarFill className={classes.singleStar} />
                                            <BsFillStarFill className={classes.singleStar} />
                                            <BsFillStarFill className={classes.singleStar} />
                                            <BsFillStarFill className={classes.singleStar} />
                                            <BsFillStarFill className={classes.singleStar} />
                                        </div>
                                        <div className={classes.formContainer}>
                                            <TextareaAutosize className={classes.textArea} aria-label="minimum height" minRows={8} placeholder="Write your review" />
                                            <div className={classes.inputFieldContainer}>
                                                <TextField placeholder="Name" className={classes.inputField} variant="outlined" />
                                                <TextField placeholder="Name" className={classes.inputField} variant="outlined" />

                                            </div>
                                            <Button variant="contained" className={classes.submitButton}>Submit Review</Button>
                                        </div>
                                    </div>

                                </Grid>
                            </Grid>
                            : ""}
                    </div>

                </div>

            </Modal>

        </>
    );
}

export default ProductDetails