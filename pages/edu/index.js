import React from 'react'
import { EduLanding } from "../../comps/Landing/Landing"
import styles from './Edu.module.css'
import {FaGithub, FaHourglassEnd } from 'react-icons/fa'
import Link from 'next/link'


export default function index() {
    return (
        <div>
            <EduLanding />
          
            <div className="section">
                <div className={styles.cards}>
                <Link  href="/pep">
                    <div className={styles.card}>
                        <h1 className={styles.title}>PEP Exam</h1>
                        <p className={styles.subtitle}>
                            At 1Pharmily, we understand that
                            each man is unique in his own appearance.
                        </p>
                    </div>
                </Link>
                <Link  href="/blog_list">
                    <div className={styles.card}>
                        <h1 className={styles.title}>Blogs</h1>
                        <p className={styles.subtitle}>
                            List of blog posts and articles
                        </p>
                    </div>
                </Link>
                <Link  href="/blog_list">
                    <div className={styles.card}>
                        <h1 className={styles.title}>PEP Exam Centers</h1>
                        <p className={styles.subtitle}>
                            List of accredited centers for PEP Exam
                        </p>
                    </div>
                </Link>
                <Link  href="/drug_list">
                    <div className={styles.card}>
                            <h1 className={styles.title}>Drugs & Brands</h1>
                            <p className={styles.subtitle}>
                                Find drugs and brands associated with them.
                            </p>
                    </div>
                </Link>
                <Link  href="/pep">
                    <div className={styles.card}>
                            <h1 className={styles.title}>Internship Accredited Centers</h1>
                            
                            <p className={styles.subtitle}>
                                All accredited centers for Pharmacy Internship Programme
                            </p>
                    </div>
                </Link>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Undergraduates Lecture Materials</h1>
                        <p className={styles.subtitle}>
                            At 1Pharmily, we understand
                            that each man is unique in his own appearance.
                        </p>
                    </div>

                <div className={styles.card}>
                    <h1 className={styles.title}>Free Clinical pdfs and slides</h1>
                    <p className={styles.subtitle}>
                          Download Free pdf materials
                    </p>
                   
                </div>
               
            </div>
            </div>
        </div>
    )
}
