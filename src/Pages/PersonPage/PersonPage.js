import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout/Layout";
import {useParams} from "react-router-dom";
import {handleGenerateApi, smallPath} from "../../Components/services";
import axios from "axios";
import './style.css'

const PersonPage = () => {
    const {id} = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        axios(handleGenerateApi(`person/${id}`))
            .then(({data}) => setDetails(data))
    }, [id]);

    return (
            <Layout>
                <div className={'person-wrapper'}>
                    <img src={smallPath + details.profile_path} alt=""/>
                </div>
                <div>
                    <h2>Name: {details.name}</h2>
                    <p><b>Biography:</b> {details.biography} </p>
                </div>
            </Layout>
    );
};

export default PersonPage;