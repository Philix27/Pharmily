import React, {useState, useEffect}  from 'react'
import styles from './cart.module.css'
import {Button, BigButton, ProductDesc, SubTitle1} from '../../styles/Elements'
import Axios from 'axios'


export default function index({products}) {

  const apiurlLocal = 'http://localhost:3007/api/v1/products';
  Axios.get(apiurlLocal);
    const [listOfProducts, setlistOfProducts] =  useState([]);
  
  
    useEffect(() => {
      Axios.get(apiurlLocal).then((response) => {
        setlistOfProducts(response.data.product);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });
    }, []);
  



   const listic = listOfProducts.map((product) => {
     return (
        <div key={product.id} className={styles.card}>
         <div  className={styles.card_image}>
            <img className={styles.img} src={product.images[0]} alt={product.name}/>
          </div>
         <div className={styles.card_text}>
           <SubTitle1>{product.name}</SubTitle1>
           <SubTitle1>{product.price}</SubTitle1>
           <ProductDesc>{product.desc}</ProductDesc>  
            <Button>Add to cart</Button>
          </div>
        </div>
       );
   });
  
    return (
        <div>
        <div className="section" id="gallery">
          <div className={styles.home_cards}>
            <h3>Shopping</h3>
                {/* {listic}                */}
              </div>
            <div className="section">
           
            </div>
        </div>
        </div>
        
    )
}
