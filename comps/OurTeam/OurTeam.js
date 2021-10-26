import React from 'react'
import Link from 'next/link'
import styles from './OurTeam.module.css'
import Image from 'next/image'

export default function OurTeam() {
    return (
        <div className={styles.container}>
            <h1 className="h3d">Our Team</h1>
            <hr/>
            <p className="g2">
                This is a high-end fashion brand 
                dedicated to providing you with
                indegenious designs and luxurious pieces, 
                tailored to fix your style.
            </p>

        </div>
    )
}
