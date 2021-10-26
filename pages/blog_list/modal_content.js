import styles from './DrugList.module.css'
import { Heading1 } from '../../styles/Elements';


export const ModalContent = (
     {
        title,
        setShowModal,
        setTitle,
        setSubtitle,
        setStory,
        setAuthor,
        postArticle
    }
) => {
    return (
        <div className={styles.wrapper}>
            <form action="#">
                <div className={styles.input_box}>
            <Heading1>{title}</Heading1>
                    <input type="text"
                                    placeholder="Title"
                                    onChange={e => setTitle(e.target.value)}
                                />
                </div>
                <div className={styles.input_box}>
                    <input type="text"
                                    placeholder="Story"
                                    onChange={e => setStory(e.target.value)}
                                />
                </div>
                <div className={styles.input_box}>
                    <input type="text"
                                    placeholder="Subtitle"
                         onChange={e => setSubtitle(e.target.value) }        />
                </div>
                <div className={styles.input_box}>
                    <input type="text"
                                    placeholder="Author"
                                    onChange={e => setAuthor(e.target.value)}
                                />
                </div>
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
              </form> 
        </div>
    );
}