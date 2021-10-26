import styles from './DrugList.module.css'
import { Heading1 } from '../../styles/Elements';


export const ModalContent = (
     {
        title,
        setShowModal,
        setAI,
        setBrandName,
        setClassName,
        setGenericName,
        setIndication,
        setCompanyName,
        setContactInfo,
        postArticle
    }
) => {
    return (
        <div >
                <div className={styles.header_box}>
                    <Heading1>{title}</Heading1>
                </div>
            <form action="#" className={styles.wrapper}>

                {/* Rumconazole Tablets 200mg */}
                <div className={styles.input_box}>
                    <input type="text"
                                    placeholder="Active Ingredients"
                                    onChange={e => setAI(e.target.value)}
                                />
                </div>
                <div className={styles.input_box}>
                    <input type="text"
                                    placeholder="Brand names"
                                    onChange={e => setBrandName(e.target.value)}
                                />
                </div>
                <div className={styles.input_box}>
                    <input type="text"
                                    placeholder="Generic names"
                                    onChange={e => setGenericName(e.target.value)}
                                />
                </div>
                <div className={styles.input_box}>
                    <input type="text"
                                    placeholder="Class of drugs"
                         onChange={e => setClassName(e.target.value) }        />
                </div>
                <div className={styles.input_box}>
                    <input type="text"
                                    placeholder="Indication"
                                    onChange={e => setIndication(e.target.value)}
                                />
                </div>
                <div className={styles.input_box}>
                    <input type="text"
                                    placeholder="Company name"
                                    onChange={e => setCompanyName(e.target.value)}
                                />
                </div>
                <div className={styles.input_box}>
                    <input type="text"
                                    placeholder="Contact Info"
                                    onChange={e => setContactInfo(e.target.value)}
                                />
                </div>
              </form> 
                <div className={styles.buttons}>
                    <input type="submit"
                            value="Close"
                             onClick={() => setShowModal(false)}
                            className="btnClose" />
                     <input type="submit"
                            value="Submit"
                             onClick={() => postArticle()}
                        className="btn" />
                </div>
        </div>
    );
}