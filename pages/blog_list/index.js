import React,  {useState, useEffect, useMemo} from 'react';
import Basictable from '../../comps/Tables/BasicTable';
import { EduLanding } from "../../comps/Landing/Landing"
import Axios from 'axios';
import {BASEURL, API_VERSION} from '../../comps/Essentials/baseurl'
import { AddToTable } from './AddToTable';
import { Heading1 } from '../../styles/Elements';
import { Modal } from '../../comps/Modal/Modal';
import {ModalContent} from './modal_content'
import {COLUMNS} from './columns'

const DrugList = () => {
    
      const apiurlLocal = BASEURL + API_VERSION + 'blogs';

    const [blogList, setblogList] =  useState([]);
    const [showModal, setShowModal] = useState(false);
    
    // !! Modal Form Params
    const [title, setTitle] = useState(null);
    const [subtitle, setSubtitle] = useState(null);
    const [story, setStory] = useState(null);
    const [author, setAuthor] = useState(null);
    
    useEffect(() => {
        Axios.get(apiurlLocal).then((response) => {
            setblogList(response.data.blog);
            console.log("Working");
            console.log(response.data.blog);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });
    }, []);

    const postArticle = () => {
        Axios.post(apiurlLocal, {
              title, subtitle, story, author
          }).then((response) => {
            setblogList(response.data.blog);
            console.log("Working");
              console.log(response.data.blog);
              setShowModal(false);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });

        
    }
  
    return (
        <>
            <EduLanding />
        <div className="section">
            <Heading1>List of ....</Heading1>
            <AddToTable setShowModal={setShowModal} />
            {showModal && <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title="Add Blog Post"
                children={
                    <ModalContent
                        setTitle={setTitle}
                        setSubtitle={setSubtitle}
                        setStory={setStory}
                        setAuthor={setAuthor}
                        showModal={showModal}
                        postArticle={postArticle}
                        setShowModal={setShowModal}
                        title="Add Blog Post"
                    />
                }
            />}
                <Basictable
                    searchPlaceholder="Search for an article"
                    tableDataList={blogList}
                    tableColumns={COLUMNS}
                />
           
            </div>
        </>    
    );
}

export default DrugList;
