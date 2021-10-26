import React from 'react'
import styles from './About.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {Button, BigButton} from '../../styles/Elements'




export default function About() {



    return (
        <div className="section" id="about-us">
           
            <div className={styles.content}>
                <div className={styles.ceo}>
                <img className={styles.img} src="/pp.jpg" alt=""/>
                <h2 className="h1d">Eligbue Felix</h2>
                </div>

                {/* <div className={styles.note}> */}
                <div >
                <h1 className="h2d">About Us</h1>
                <p className="g2">
                1Pharmily was founded by Eligbue Felix
                    on the 14th of December, 2020. This is a 
                    Writeups about company
                </p>
                   
                </div>
            </div>
           
        </div>
    )
}
