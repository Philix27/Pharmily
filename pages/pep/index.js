import React, {useState, useEffect}  from 'react';
import styles from './pep.module.css';
import Intro from './Intro/intro';
import Clinic from './clinic';
import Pharmacology from './pharmacology';
import OtherTopics from './other_topics';

const Index = () => {

    const [activeTab, setActiveTab] = useState({title: "Introduction", key: "0", comp: <Intro />});
    // const [activeContent, setActiveContent] = useState();
    // const [activeTabIndex, setActiveTabIndex] = useState("0");
    
    const topics = [
        {title: "Introduction", key: "0", comp: <Intro />},
        {title: "Pharmacology", key: "1", comp: <Pharmacology />},
        {title: "Clinical Pharmacy", key: "2", comp: <Clinic />},
        {title: "Others", key: "3", comp: <OtherTopics />}
    ];
    
    const topicsList = topics.map((t) => {
        if (activeTab.key === t.key) {
           return ( <li className={styles.activeTab}><a href="#" onClick={() => setActiveTab(t)}>{t.title}
                </a></li>)
       } else {
           return ( <li><a href="#" onClick={() => setActiveTab(t)}>{t.title}
                </a></li>)
    }
    }
       
     );

    return (
      
        <div className={styles.container}>
                <div className={styles.DropdownButton}>
                    <select>
                        <options>Home</options>
                        <options>Home</options>
                        <options>Home</options>
                    </select>
                </div>
            

                <div className={styles.main}>{activeTab.comp}</div>
                <div className={styles.sidebar}>
                    <h4 className={styles.sidebarTitle}>Contents</h4>
                <ul>{topicsList}</ul>
                </div>

            </div>
       
    );
}

export default Index;
