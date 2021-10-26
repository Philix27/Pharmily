import React from 'react'
import styles from './OurGoal.module.css'
import {FaGithub, FaHourglassEnd } from 'react-icons/fa'



export default function OurGoal() {
    return (
        <div className={styles.container}>
            <h1 className="h3d">Our Goal</h1>
            <hr/>
            <p className="g2">
            1Pharmily is a fast growing African brand with the intent of putting Africa in the world fashion map. 
            Our mission is to deliver top notch clothing and accessories to men of all ages.
            Our designs cut across African traditional wears and smart English outfits. 
            We produce and sell our own fabric, and we’ve got you covered when it comes to shoes, bags, brooches and bracelets. 
            </p>
            <h1 className="h3d">Services</h1>
            <p className="g2">
                1Pharmily serves men with taste who want to look the part.
                We serve men who are ready to step into a building and allow their style do the talking. 
                </p>
            
            <div className={styles.cards}>
                <div className={styles.card}>
                <FaHourglassEnd className={styles.icon} />
                <h1 className={styles.title}>Fast Delivery</h1>
                    <p className={styles.subtitle}>
            At 1Pharmily, we understand that each man is unique in his own appearance. 
            We carefully select patterns and designs that best suit you.
            
            
                </p>
                </div>

                <div className={styles.card}>
                <FaGithub className={styles.icon} />
                     <h1 className={styles.title}>Why 1Pharmily?</h1>
                    <p className={styles.subtitle}>
                       1Pharmily gives the best judgement when it comes to clothing wears and accessories. 
                        With us, being 1Pharmily is a kulture.
            
                </p>
                </div>

                <div className={styles.card}>
                <FaGithub className={styles.icon} />
                  <h1 className={styles.title}>Why 1Pharmily?</h1>
                    <p className={styles.subtitle}>
                    We work on your African and English clothing to create a final look that is high-class, elegant, and exudes grace. 
                    You don’t have to worry about how to style yourself ; you can leave the entire hassle of styling to us. 
                   
                </p>
                </div>

                <div className={styles.card}>
                <FaGithub className={styles.icon} />
                  <h1 className={styles.title}>Why 1Pharmily?</h1>
                    <p className={styles.subtitle}>
                   From classy clothing to matching accessories, we’ve got you. 
                    In a world of boring male fashion, join hands with the brand that offers you snazzy creative pieces that reflect your unique personality. 
                    Be 1Pharmily, Choose 1Pharmily. 
                </p>
                </div>
            </div>

        

        </div>
    )
}
