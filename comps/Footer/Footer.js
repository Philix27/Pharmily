import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div>
                <ul >
                    <li className={styles.list_headers}>Navigators</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>           
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <ul >
                    <li className={styles.list_headers}>Social Media</li>
                    <li>Faceook</li>
                    <li>Instagram </li>
                    <li>Twitter</li>
                    <li>WhatsApp</li>
                </ul>
            </div>
            <div>
                <ul >
                    <li className={styles.list_headers}>Apps</li>
                    <li>Google Play</li>
                    <li>App Store </li>
                </ul>
            </div>
        </div>
    )
}
