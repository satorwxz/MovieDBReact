import React from 'react';
import {handleShortDescription, originalPath} from "../services";
import './style.css'
import {Link} from "react-router-dom";

const MovieList = ({movies}) => {
    return (
        <div className="row">
            {
                movies.map(movie => (
                    <div className={'col-3'} key={movie.id}>
                        <Link to={`/movie/${movie.id}`} >
                            <div className={'movie-box'}>
                                <img className={'movie-img'} src={originalPath + movie.poster_path} alt=""/>
                                <h4>{movie.vote_average}</h4>
                                <h1>{movie.title}</h1>
                                <p>{handleShortDescription(movie.overview)}</p>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default MovieList;