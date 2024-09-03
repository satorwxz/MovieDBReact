import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import {handleGenerateApi} from "../../Components/services";
import MovieList from "../../Components/MovieList/MovieList";

const TopPage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios(handleGenerateApi('movie/top_rated'))
            .then(({data}) => setMovies(data.results))
    }, []);
    return (
        <Layout>
            <MovieList movies={movies} />
        </Layout>
    );
};

export default TopPage;