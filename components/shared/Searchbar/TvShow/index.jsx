import React from 'react';
const TvShow = (props) => {
    const { image, rating, title } = props;
    console.log(image, rating, title, "data")
    return (
        <div className="tv-show-container">
            <div className="image"><img src={image} /></div>
            <div className="title">{title}</div>
            <div className="rating">{rating || "N/A"}</div>
        </div>
    )
}
export default TvShow;