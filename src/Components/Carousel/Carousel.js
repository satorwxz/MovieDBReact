import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'


// import required modules
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';
import {originalPath, smallPath} from "../services";
const Carousel = ({movies}) => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction:false
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination,Autoplay]}
                className="mySwiper"
            >
                {
                    movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className={'swiper'} style={{
                                background:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${originalPath + movie.backdrop_path}) no-repeat center/cover`,
                                padding:'45px'
                            }}>
                                <img src={smallPath + movie.poster_path} alt=""/>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Carousel;