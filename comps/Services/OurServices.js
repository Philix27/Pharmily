import React from 'react';
import CardTic from '../card_tic';
import styles from './Services.module.css'

const Ourservices = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgsection}></div>
            <div className={styles.content}>
                <CardTic
                    title="Hello World"
                    content="Somany Text and write ups"
                    
                />
            </div>
        </div>
    );
}

export default Ourservices;
