import React from 'react'
import styles from './Landing.module.css'

export const HomeLanding = () => {

    return (
      <div className={styles.container}>      
        <main className={styles.main}>
                <h1 className="h3w">Welcome to 1Pharmily</h1>
              <div className={styles.subtitle}>
              <p className="p1w"> For all Nigerian Pharmacists </p> 
              </div>                          
        </main>
        <div>
          
        </div>
      </div>
    )
}

export const ContactLanding = () => {

    return (
        <div className={styles.contactContainer}>      
        <main className={styles.main}>
                <h1 className="h3w">Contact Us</h1>
              <div className={styles.subtitle}>
              <p className="p1w"> You can reach us via a simple mail </p> 
              </div>                          
        </main>
      </div>
    )
}

export const EduLanding = () => {

    return (
        <div className={styles.eduContainer}>      
        <main className={styles.main}>
                <h1 className="h3w">1Pharmily Educational Guide</h1>
              <div className={styles.subtitle}>
              <p className="p1w"> Includes PEP Students & Pharmacy Students </p> 
              </div>                          
        </main>
      </div>
    )
}
export const BlogLanding = () => {

    return (
        <div className={styles.blogContainer}>      
        <main className={styles.main}>
                <h1 className="h3w">1Pharmily's Blogs</h1>
              <div className={styles.subtitle}>
              <p className="p1w"> Articles on clinical topics and pharmaceutical activities in the country</p> 
              </div>                          
        </main>
      </div>
    )
}


