import React, {Component} from 'react'
import {Link} from "react-router-dom";
import Menu from 'components/Menu/Index'
import * as styles from "./index.module.scss";

const Header:React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerBox}>
                <Link to='/'>
                    <span className={styles.headerLogo}/>
                </Link>
                <Menu/>
            </div>
        </div>
    )
}

export default Header