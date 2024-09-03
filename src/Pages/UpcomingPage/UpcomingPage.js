import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import {handleGenerateApi} from "../../Components/services";
import MovieList from "../../Components/MovieList/MovieList";

const UpcomingPage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios(handleGenerateApi('movie/upcoming'))
            .then(({data}) => setMovies(data.results))
    }, []);
    return (
        <Layout>
            <MovieList movies={movies} />
        </Layout>
    );
};

export default UpcomingPage;