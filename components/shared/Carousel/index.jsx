import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
const useStyles = makeStyles(theme => ({
    smallImageContainer: {
        position: "relative",
        width: "100%",
        marginTop: "5% ",
        height: "25%",
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        userSelect: "none",
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
    },
    smallImage: {
        "&:not(:first-of-type)": {
            paddingTop: "10 10px",
            // margin: "10px",
            // marginLeft: "0"
        },
        width: "25%",
        // flex: "1 1 115px",
        // height: "100%",
        height: "100px",
        objectFit: "cover",
        paddingRight: "0px",
        // margin: "10px"

        cursor: "pointer"
    },
    rightIcon: {
        position: "absolute",
        top: "35%",
        right: "10px",
        fontSize: "24px",
        color: "#000",
        cursor: "pointer"
    },
    leftIcon: {
        position: "absolute",
        top: "40%",
        left: "0px",
        fontSize: "24px",
        color: "#000",
        cursor: "pointer"
    }

}))

export const Carousel = (props) => {
    const classes = useStyles()
    console.log(props.data, "immggg")

    return (
        <div className={classes.smallImageContainer}>
            <AiOutlineLeft onClick={props.carouselDecreaseHandler} className={classes.leftIcon} />
            <AiOutlineRight onClick={props.carouselIncreaseHandler} className={classes.rightIcon} />
            {props.data.map((src, index) => {
                console.log(src, "src")
                return (<>

                    <img onClick={() => props.handleClick(src.imgSrc)} className={classes.smallImage} src={src.imgSrc} alt="" />

                </>
                )
            })}


        </div>
    )
}
