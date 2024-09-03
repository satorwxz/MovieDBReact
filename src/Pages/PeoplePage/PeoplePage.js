import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import {handleGenerateApi} from "../../Components/services";
import People from "../../Components/People/People";
import MovieList from "../../Components/MovieList/MovieList";

const PeoplePage = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios(handleGenerateApi(`person/popular`))
            .then(({data}) => setPeople(data.results))
    }, []);
    return (
        <div>
            <Layout>
                <People people={people} />
            </Layout>
        </div>
    );
};

export default PeoplePage;