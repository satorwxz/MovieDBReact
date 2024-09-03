import React, {useEffect, useState} from 'react';
import axios from "axios";
import {handleGenerateApiSearch, handleSearchApi} from "../../Components/services";
import Search from "../../Components/Search/Search";
import Layout from "../../Components/Layout/Layout";
import MovieSearch from "../../Components/MovieSearch/MovieSearch";
import './style.css'
import {useSearchParams} from "react-router-dom";

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams()
    const[search, setSearch] = useState(searchParams.get('query') || '')


    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
                axios(handleSearchApi(`search/movie`,search))
                    .then(({data}) => setMovies(data.results))
    }, []);

    const handleSubmit = () => {
        axios(handleSearchApi(`search/movie`,search))
            .then(({data}) => setMovies(data.results))
        const searchQuery = {
            query: search
        }
        setSearchParams(searchQuery)
    }



    return (
        <div>
            <Layout>
                <div className="search">
                    <Search
                        handleSubmit={handleSubmit}
                        search={search}
                        setSearch={setSearch}
                        handleSearch={handleSearch}
                    />
                    <MovieSearch movies={movies} />
                </div>
            </Layout>

        </div>
    );
};

export default SearchPage;