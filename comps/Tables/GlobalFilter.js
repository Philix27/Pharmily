import React from 'react'
import styles from '../../pages/drug_list/DrugList.module.css';


export const GlobalFilter = ({filter, setFilter, placeholder}) => {
    return (
          <div className={styles.form_box}>
             <form action="#">
                <div className={styles.input_box}>
                    <input type="text"
                        placeholder={placeholder}
                        value={filter || ''}
                        onChange={e => setFilter(e.target.value) }
                    />
                </div>
              </form> 
            </div>
    )
}
