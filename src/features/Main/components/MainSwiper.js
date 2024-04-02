import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../styles/Main.css';
import MainSwiperImage from '../../../images/mainSwipe.png';
// import required modules
import { Pagination } from 'swiper/modules';
import { Container } from '@mui/material';

export default function MainSwiper() {
    return (
        <Container maxWidth="xl">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="MainSwiper"
            >
                <SwiperSlide>
                    <img src={MainSwiperImage} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}
