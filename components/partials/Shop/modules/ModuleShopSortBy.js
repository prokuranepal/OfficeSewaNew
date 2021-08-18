import React from 'react';
import {makeStyles} from "@material-ui/core/styles";


const ModuleShopSortBy = () => {
    const classes = useStyles();

    return (
        <select
            // className={classes.selectOption}
            data-placeholder="Sort Items">
            <option>Sort by latest</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
        </select>
    );
};

const useStyles = makeStyles(theme => ({
    selectOption:{
        zIndex:100
    }
}))
export default ModuleShopSortBy;
