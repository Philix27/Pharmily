import React from 'react'
import styles from './ContactUs.module.css'
import {FaLocationArrow , FaMap, FaPhone, FaSms, } from 'react-icons/fa'
import {AiOutlineMail } from 'react-icons/ai'
import {GoLocation } from 'react-icons/go'
import {ContactLanding} from "../Landing/Landing"

export default function ContactUs() {
    return (
          <div>
             <ContactLanding />
          
        <div className="section" id="contact-us">
            
            <div className={styles.content}>
                <div className={styles.left_side}>
                    <div className={styles.details}>
                        <GoLocation className={styles.icon}/>
                        <div className={styles.topic}>Address</div>
                        <div className={styles.text}>N0 15 Ring Road Benin City</div>
                        <div className={styles.text}>Edo State</div>
                    </div>

                    <div className={styles.details}>
                        <FaPhone className={styles.icon}/>
                        <div className={styles.topic}>Phone</div>
                        <div className={styles.text}>+234-81-0000-0000</div>
                        <div className={styles.text}>+234-81-0000-0000</div>
                    </div>

                    <div className={styles.details}>
                        <AiOutlineMail className={styles.icon}/>
                        <div className={styles.topic}>Email</div>
                        <div className={styles.text}>savvykulture@gmail.com</div>
                        <div className={styles.text}>enomatefejiro@gmail.com</div>
                    </div>
                </div>

                <div className={styles.right_side}>
                    <div className="p2d">Leave us a message</div>
                    <p className={styles.text}>
                    One salient thing you might notice after creating
                     a Next.js app is the lean folder structure. You 
                     grows is up to you more than
                      it is to the framework.
                    </p>

                    <form action="#">
                    <div className={styles.input_box}>
                        <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className={styles.input_box}>
                        <input type="text" placeholder="Enter your email" />
                    </div>
                    {/* <div className={styles.textarea_box}>
                        <textarea> </textarea>
                    </div> */}
                    <div className={styles.send_btn}>
                        <input className={styles.btn} type="button" value="Send" />
                    </div>
                </form>


                </div>

              
            </div>
            </div>
            </div>
    )
}
