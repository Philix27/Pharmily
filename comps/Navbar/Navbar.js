import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Image from 'next/image'
import {FaRegUser, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa'


export default function Navbar() {
    return (
        <>    
        <div className={styles.nav}>

           <input type="checkbox" id="check" className={styles.check} />
            <div className={styles.bars}>
                <label htmlFor="check" >
                <FaBars />
                </label>
            </div>

           <div className={styles.nav_start}>
           <Image className={styles.logo} src="/logo.png" width={110} height={45}/>
               <div className={styles.nav_bg} >
                
                <ul className={styles.nav_start_list}>       
                        <li className={styles.nav_start_list_item}>
                            <div className={styles.bars_close}>
                                <label htmlFor="check" >
                                <FaTimes />
                                </label>
                            </div>
                        </li>
                        <li className={styles.nav_start_list_item}><Link href="/"><a className={styles.link}>Home</a></Link></li>
                        <li className={styles.nav_start_list_item}><Link href="/blogs"><a className={styles.link}>Blogs</a></Link></li>
                        <li className={styles.nav_start_list_item}><Link href="/products"><a className={styles.link}>Services</a></Link></li>
                        <li className={styles.nav_start_list_item}><Link href="/edu"><a className={styles.link}>Education</a></Link></li>
                        <li className={styles.nav_start_list_item}> <Link href="/contact_us"><a className={styles.link}>Contact Us</a></Link></li>
                        
                    </ul>
               </div>

           </div>
            <div className={styles.nav_end}>
                <ul className={styles.nav_end_list}>       
                    <li><Link href="/cart"><a className={styles.link}><FaShoppingBag /></a></Link></li>
                    <li><Link href="/shop"><a className={styles.link}><FaRegUser /></a></Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}
