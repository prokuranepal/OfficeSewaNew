import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css'

const BreadCrumb = ({ breadcrumb }) => {
    return (
        <div className={styles.breadcrumbContainer}>
            <ul className={styles.breadCrumb}>
                {breadcrumb.map(item => {
                    if (!item.url) {
                        return <li key={item.text}>{item.text}</li>;
                    } else {
                        return (
                            <li key={item.text}>
                                <Link href={item.url}>
                                    <a>{item.text}</a>
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default BreadCrumb;
