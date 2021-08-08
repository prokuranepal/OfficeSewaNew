import React from 'react'
import Image from 'next/image'
import { Modal, Typography, Grid, makeStyles } from "@material-ui/core"
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
        alignItems: "center",
        overflow: "auto",
        [theme.breakpoints.down("sm")]: {
            alignItems: "start"
        }
    },
    image: {
        width: "100%",
        height: "500px",       // background: "red"
        objectFit: "cover"
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
            justifyContent: "flex-start"
        }

    },
    imageContainer: {

        // background: "blue"
        // paddingRight: "20px"
    },
    contentContainer: {
        paddingLeft: " 60px",
        [theme.breakpoints.down('sm')]: {
            padding: "0",
            paddingTop: "20px"
        }
    },
    modalContainer: {
        width: "85%",
        minHeight: "85%",
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        padding: "4rem",
        background: "#fff",
        [theme.breakpoints.down("sm")]: {
            // marginTop: "50vw"
            minHeight: "140vh"
        }

    },
    containerStyle: {
        padding: '2px 24px',
        margin: '5px 0px'
    },
    quantity: {
        fontSize: "20px",
        lineHeight: "23px",
        color: "#3E4756",
        marginTop: "40px",
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
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        }
    }

}));
export const ProductOverview = (props) => {
    const classes = useStyles()
    const rootRef = React.useRef(null);
    const [open, setOpen] = useState(true)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(4)
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
    return (
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
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={12} md={5} className={`${classes.modalItem} ${classes.imageContainer}`}>
                        {/* <Image src={"/images/big.png"} width={1000} height={600} priority className={classes.image} /> */}
                        <img className={classes.image} src={imgSrc} alt="" />

                        <Carousel handleClick={handleClick} carouselDecreaseHandler={carouselDecreaseHandler} carouselIncreaseHandler={carouselIncreaseHandler} data={carousel} />
                    </Grid>
                    <Grid item xs={12} md={7} className={`${classes.modalItem} ${classes.contentContainer}`}>
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
                </Grid>
            </div>
        </Modal>


    );
}

export default ProductOverview