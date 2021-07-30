import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import MegaMenu from './MegaMenu';
import { colors } from '../../../theme/colors';

const Menu = ({className}) => {
    const classes = useStyles();
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    // const { categories } = useGlobalContext2()
    // const categories = props.categories;
    // const data ={data:null}
    let menuView = null;
    const categoriesData = null
    if (categoriesData) {
        menuView = categoriesData.categories.edges.map((item) => {
            // console.log("menu product name ", item)
            // if (item.node.children.edges) {
            //     return <MenuDropdown source={item.node} key={item.node.name} />;
            // } else 
            if (item.node.children.edges) {
                return <MegaMenu source={item.node} key={item.node.name} showMegaMenu={showMegaMenu}/>;
            } else {
                return (
                    <li key={item.text} className={classes.listItem}>
                        <Link href={{ pathname: `/shop/categories/${item.node.slug}`, query: { slug: item.node.slug, cat: item.node.level } }}>
                            <a className={classes.listItemA}>
                                {item.icon && <i className={item.icon}></i>}
                                {item.text}
                            </a>
                        </Link>
                    </li>
                );
            }
        });
    } else {
        menuView = (
            <li className={classes.listItem}>
                <a href="#" onClick={(e) => e.preventDefault()} className={classes.listItemA}>
                    No menu item.
                    </a>
            </li>
        );
    }
    return <div className={classes.root}><ul className={classes.list}>{menuView}</ul></div>;
    // let menuView = null;

    // // const {categories} = useGlobalContext2()
    // // const data ={data:null}
    // const categoriesData = null
    // if (categoriesData) {
    //     menuView = categoriesData.categories.edges.map((item) => {
    //         // console.log("menu product name ", item)
    //         // if (item.node.children.edges) {
    //         //     return <MenuDropdown source={item.node} key={item.node.name} />;
    //         // } else 
    //         if (item.node.children.edges) {
    //             return <MegaMenu source={item.node} key={item.node.name} />;
    //         } else {
    //             return (
    //                 <li key={item.text}>
    //                     <Link     href={{ pathname: `/shop/categories/${item.node.slug}`, query: { slug: item.node.slug, cat: item.node.level} }}>
    //                          <a>
    //                             {item.icon && <i className={item.icon}></i>}
    //                             {item.text}
    //                         </a>
    //                     </Link>
    //                 </li>
    //             );
    //         }
    //     });
    // } else {
    //     menuView = (
    //         <li>
    //             <a href="#" onClick={(e) => e.preventDefault()}>
    //                 No menu item.
    //             </a>
    //         </li>
    //     );
    // }
    // return <ul className={className}>{menuView}</ul>;
};

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff',
        border: '1px solid #d3d3d3',
        minWidth: '260px'
        // .menu-item-has-children {
        //     position: relative;
        // }
    },
    list: {
        margin: 0,
        padding: 0,
        listStyleType: 'none'
    },
    listItem: {
        padding: '0 20px',
        transition: 'all 0.4s ease',
        '&:hover': {
            backgroundColor: colors.primary,
            color: colors.secondary
        }
    },
    listItemA: {
        display: 'block',
        padding: '10px 0',
        color: 'black'
    }
    // listItemI: {
    //     marginRight: '10px',
    //     fontSize: '18px'
    // }
}, { name: "Menu" });

export default Menu;
