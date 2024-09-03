import React, {useEffect, useState} from 'react';
import Layout from "../../Components/Layout/Layout";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {handleGenerateApi, originalPath, smallPath} from "../../Components/services";
import './style.css'
import Loader from "../../Components/Loader/Loader";
import {findAllByDisplayValue} from "@testing-library/react";
import Avatar from '../../Components/Assets/unknown.jpg'

const MoviePage = () => {
    const {id}= useParams();

    const [movie, setMovie] = useState({});
    const[videos, setVideos] = useState([]);
    const [cast,setCast] = useState([]);




    useEffect(() => {
        axios(handleGenerateApi(`movie/${id}`))
            .then(({data}) => setMovie(data))
        axios(handleGenerateApi(`movie/${id}/videos`))
            .then(({data}) => setVideos(data.results))
        axios(handleGenerateApi(`movie/${id}/casts`))
            .then(({data}) => setCast(data.cast))
    }, [id]);

    console.log('videos', videos)

    if(!movie.id){
        return (
            <div
                style={{height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
            }}>
                <Loader/>
            </div>
        )
    } else {

        return (
            <Layout>
                <div className={'movie-wrapper'}>
                <div className={'left-side'}>
                        <img src={originalPath + movie.poster_path} alt=""/>
                    </div>
                    <div className={'right-side'}>
                        <h2 className={'title'}>{movie.title}</h2>
                        <h3 className={'sub-title'}>{movie.release_date}</h3>
                        <p className={'description'}>{movie.overview}</p>
                        <div className={'cast-wrapper'}>

                                {
                                    cast.map(person => (
                                        <Link to={`/person-page/${person.id}`} key={person.id} >
                                        <div className={'cast'}>
                                            <img src={person.profile_path ? smallPath + person.profile_path : Avatar} alt=""/>
                                            <h2>{person.name}</h2>
                                        </div>
                                        </Link>
                                    ))
                                }


                        </div>
                        <div>
                            {
                                videos.slice(0,2).map(video => (
                                         <iframe src={`https://www.youtube.com/embed/${video.key}`} key={video.id} frameborder="0"></iframe>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
};

export default MoviePage;