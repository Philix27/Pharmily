import React, {useState, useEffect}  from 'react'
import styles from './blogs.module.css'
import Axios from 'axios'
import { BlogLanding } from "../../comps/Landing/Landing"


export default function index() {

  const apiurlLocal = 'http://localhost:3007/api/v1/blogs';
//   const apiurlLocal = 'http://localhost:3007/api/v1/blogs';
//   Axios.get(apiurlLocal);
    const [blogList, setblogList] =  useState([]);
  const [displayedBlog, setDisplayedBlog] = useState({
    title: "Click a blog post to view",
    subtitle: "",
    story: "You can selecte any blog post to read more about it"
    
    });
  
    useEffect(() => {
      Axios.get(apiurlLocal).then((response) => setblogList(response.data.blog)       
      ).catch(() => {
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
      <>
          <BlogLanding />
        <div className="section" id="blogs">    
          <div className={styles.form_box}>
             <form action="#">
                <div className={styles.input_box}>
                    <input type="text" placeholder="Search for an article" />
                </div>
              </form> 
          </div>
              <div className={styles.blogContent}>
                <h1 className={styles.blogTitle}>{displayedBlog.title}</h1>
                {/* <h3 className={styles.blogSubtitle}>By {displayedBlog.subtitle}</h3> */}
                <p className={styles.blogStory}>{displayedBlog.story}</p>
              </div>              
              <div className={styles.cards}> {listic} </div>
            </div>
        </>
        
    )
}
