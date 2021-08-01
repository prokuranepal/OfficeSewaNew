import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

const MegaMenu = ({ item }) => {
    return (
        <div className={styles.divcontainer}>
        <li className={styles.catContainer}>
        <Link href={`/categories/${item.menu}`} >
            <a >
                {item.menu}
            </a>
        </Link>
        <div key={item.menu} className={styles.subMenuContainer}>
        {
            item.subMenu.map((subItem) => (
        
        <ul style={{"min-width":180}}>
        <h4 className={styles.subHeadStyle}>{subItem.menu}</h4>

            {
                subItem.subMenu.map(subMenuItem=>
                (
                <li key={subItem.text}
                 className={styles.subItemStyle}>
                    <Link href={`/products/${subMenuItem.menu}`}>
                        <a>{subMenuItem.menu}</a>
                    </Link>
                </li>
                ))
            }
        </ul>
       
            ))
        }
    </div>
    </li>
    </div>
       
    )}

export default MegaMenu;