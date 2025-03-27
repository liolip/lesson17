import React from 'react'
import Nav from '../../app/navigation/Nav.js'
import styles from './style.module.scss'
import '../app/index.css'

export default function HeaderWidget() {
return (
    <header>
        <div className="container">
            <div className={style.head}>
            <NavLink to='/' className={styles.logo}>
						<img src='/logo.png' alt='logo' />
				</NavLink>
                <label className={styles.searchLabel} htmlFor='search'>
                    
                </label>
            </div>
        </div>   
    </header>
)
}
