import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

const MenuCat = ({ item }) => {
    return (
<div className={styles.divcontainer}>
<li className={styles.heading} key={item.menu}>
         <a>{item.menu}</a>
        { item.subMenu &&
         <ul className={styles.submenu}>
           {item.subMenu.map(subitem=><MenuCat  key= {subitem.menu} item={subitem}/>)}
           </ul>
        }
           </li>
     </div>   
    )}

export default MenuCat;