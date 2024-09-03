import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import {handleGenerateApi} from "../../Components/services";
import MovieList from "../../Components/MovieList/MovieList";
import Carousel from "../../Components/Carousel/Carousel";
import {Button} from "@mui/material";
import {useParams, useSearchParams} from "react-router-dom";




const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [moviesCarousel, setMoviesCarousel] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(searchParams.get('page' || ''));
    const btnArr = new Array(18).fill(0).map((_, i) => i + 1)

    useEffect(() => {
        axios(handleGenerateApi('movie/popular',page))
            .then(({data}) => setMovies(data.results))
    }, [page]);

    useEffect(() => {
        axios(handleGenerateApi('movie/popular'))
            .then(({data}) => setMoviesCarousel(data.results))
    }, []);

    const handleChangePage = (e) => {
        const data = {
            page:e.target.innerText
        }
        setSearchParams(data)
        setPage(e.target.innerText)

    }

    return (
        <Layout>
            <div style={{marginBottom: '50px'}}>
                <Carousel  movies={moviesCarousel}/>
            </div>
            <div style={{marginBottom: '50px'}}>
                {
                    btnArr.map((btn, i) =>
                        <Button key={i} onClick={handleChangePage} >{btn}</Button>
                    )
                }
            </div>
            <MovieList movies={movies}/>
        </Layout>
    );
};

export default HomePage;