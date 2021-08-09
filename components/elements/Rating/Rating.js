import React from 'react';
import { makeStyles } from "@material-ui/core/styles"

const Rating = (props) => {
    const classes = useStyles()
    
    const floorRating=Math.floor(props.rating);
    const starArray= new Array(floorRating).fill(0);
    const emptyArray = new Array(floorRating!=props.rating?4-floorRating:5-floorRating).fill(0)
    return (
    <span className={classes.container}>
       { starArray.map(()=> <i className="fa fa-star"/>)}
        {floorRating!=props.rating && <i className="fa fa-star-half-o"/>}
        {emptyArray.map(()=> <i className="fa fa-star-o"/>)}
    </span>
)}

export default Rating;

const useStyles = makeStyles(theme => ({
container:{
'& >i' :{
    ' font-size':' 10px',
    paddingRight:8,
    paddingTop:5,
     color: 'orange',
 }
}
    
}))
