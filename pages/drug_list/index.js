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
    
    const apiurlLocal = BASEURL + API_VERSION + 'drugs';

    const [drugList, setdrugList] =  useState([]);
    const [showModal, setShowModal] = useState(false);
    
    // !! Modal Form Params
    const [activeIngredients, setAI] = useState('');
    const [brandName, setBrandName] = useState('');
    const [genericName, setGenericName] = useState('');
    const [classOfDrug, setClassName] = useState('');
    const [indication, setIndication] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [deletInfo, setDeleteInfo] = useState('');
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        Axios.get(apiurlLocal).then((response) => {
            setdrugList(response.data.drug);
            console.log("Working");
            console.log(response.data.drug);
      }).catch(() => {
        console.log("Opps an error ocured - Local");
      });
    }, []);

    const listAI = activeIngredients.split(',');
    const params = {
            activeIngredients : listAI,
            brandName ,
            genericName,
            classOfDrug,
            indication,
            companyName,
            contactInfo,
            images,
          }
    const postArticle = () => {
        Axios.post(apiurlLocal, params).then((response) => {
            setdrugList(response.data.drug);
            console.log("Working");
            console.log(response.data.drug);
            //   setShowModal(false);
        }).catch(() => {
          console.log(params);
        console.log("Opps an error ocured - Local");
      });

        
    }
  
    return (
        <>
            <EduLanding />
        <div className="section">
            <Heading1>List of Drugs</Heading1>
            <AddToTable setShowModal={setShowModal} />
            {showModal && <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title="Add Blog Post"
                children={
                    <ModalContent
                        setAI={setAI}
                        setBrandName={setBrandName}
                        setClassName={setClassName}
                        setGenericName={setGenericName}
                        setIndication={setIndication}
                        setCompanyName={setCompanyName}
                        setContactInfo={setContactInfo}
                        showModal={showModal}
                        postArticle={postArticle}
                        setShowModal={setShowModal}
                        title="Add Blog Post"
                    />
                }
            />}
                <Basictable
                    searchPlaceholder="Search for an article"
                    tableDataList={drugList}
                    tableColumns={COLUMNS}
                />
           
            </div>
        </>    
    );
}

export default DrugList;
