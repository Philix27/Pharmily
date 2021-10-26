import React, {useState, useEffect}  from 'react'
import styles from './blogs.module.css'
import {Button, BigButton, ProductDesc, SubTitle1} from '../../styles/Elements'
import Axios from 'axios'
import { FaGithub, FaHourglassEnd } from 'react-icons/fa'
import blogs from '../../../api/models/blogs'


export default function BlogIndex() {

  const apiurlLocal = 'http://localhost:3007/api/v1/blogs';
//   const apiurlLocal = 'http://localhost:3007/api/v1/blogs';
//   Axios.get(apiurlLocal);
    const [blogList, setblogList] =  useState([]);
    const [displayedBlog, setDisplayedBlog] =  useState({});
  
  
    useEffect(() => {
      Axios.get(apiurlLocal).then((response) => {
        setblogList(response.data.blog);
        // console.log("Blogs Under");
        // console.log(response.data);
        // console.log(response.data.blog);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });
    }, []);
  



   const listic = [...blogList, ...blogList, ...blogList].map((blog) => {
       return (
         <div className={styles.card} key={blog.id} onClick={()=> setDisplayedBlog(blog)}>
            <img className={styles.cardImg} src={blog.images[0]} alt={blog.title}/>
               {/* <FaHourglassEnd className={styles.icon} /> */}
            <div  className={styles.card_content}>
                 <h1 className={styles.title}>{blog.title}</h1>
                <p className={styles.subtitle}>{blog.subtitle}</p>
                <p className={styles.story}>{blog.story}</p>
                   
            </div>
        </div>
                   
       );
   });
  
    return (
        <div>
            <div className="section" id="blogs">
               
                {/* //! Main Content */}
                  <div >
                
            <h1 className={styles.blogTitle}>{disPlayedBlog.title}</h1>
            <p className={styles.blogStory}>
              {displayedBlog.story}
                    We work on your African and English clothing to create a final look that is high-class, elegant, and exudes grace. 
                    You don’t have to worry about how to style yourself ; you can leave the entire hassle of styling to us. 
                   
                </p>
                </div>              
                {/* //! List of other Content */}
                <div className={styles.cards}>
                        {listic}
                       
                    </div>
            </div>
        </div>
        
    )
}
