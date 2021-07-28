import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from '../../../theme/colors';

const MegaMenu = (props) => {
    const classes = useStyles();
    const [showMegaMenu, setShowMegaMenu] = useState(false);

    const showMegaMenuFunc = () => {
        setShowMegaMenu(true);
    }

    const hideMegaMenuFunc = () => {
        setShowMegaMenu(false);
    }
    let megaContentView;
    // console.log("subitem",source)
    if (source) {
        megaContentView = source.children.edges.map((item) => (
            <div className={classes.megaMenuColumn} key={item.node.name}>
                <h4>{item.node.name}</h4>
                <ul className={classes.megaMenuList}>
                    {item.node.children.edges.map((subItem) => (
                        <li key={subItem.node.name}>
                            <Link href={{
                                pathname: `/shop/shop_products/${subItem.node.slug}`,
                                query: { slug: subItem.node.slug, cat: subItem.node.id },
                            }}>
                                <a className={classes.a}>{subItem.node.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ));
    }
    return (
        <li className="menu-item-has-children has-mega-menu">
            <Link href={{ pathname: `/shop/categories/${source.slug}`, query: { slug: source.slug, cat: source.level } }}>
                <a>
                    {source.icon && <i className={source.icon}></i>}
                    {source.name}
                </a>
            </Link>
            <div className={showMegaMenu?classes.visible:classes.invisible}>
                <div className="mega-menu">{megaContentView}</div>
            </div>
        </li>
    );
};

const useStyles = makeStyles({
    hasMegaMenu: {
        position: 'relative',
    },
    visible: {
        visibility: 'visible',
        opacity: 1,
        // @include transform(translateY(0));
    },
    invisible: {
        visibility: 'hidden',
        opacity: 0,
    },
    megaMenu: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        padding: '15px 30px 10px',
        backgroundColor: '#fff',
        // @include transition(all 0.4s ease);
        border: '1px solid #ccc',

        position: 'absolute',
        top: '100%',
        left: 0,
    },
    megaMenuColumn: {
        minWidth: '180px'
    },
    megaMenuList: {
        backgroundColor: 'transparent'
    },
    li: {

    },
    a: {
        display: 'block',
        color: 'blue',
        lineHeight: '20px',
        padding: '5px 0',
        fontSize: '14px',
        backgroundColor: 'transparent',

        '&.has-badge': {
            paddingRight: '20px',

            '&:after': {
                content: 'New',
                display: 'inline-block',
                position: 'absolute',
                top: '5px',
                right: 0,
                fontSize: '9px',
                color: '#ffffff',
                padding: '0px 8px',
                lineHeight: '2em',
                // @include border-radius(10px);
                backgroundColor: colors.primary
            },

            '&.sale': {
                color: 'red',

                '&:after': {
                    content: 'Sale',
                    backgroundColor: '#ffa800'
                }
            }
        },

        '&:hover': {
            color: colors.primary
        }
    }
});

export default MegaMenu;