import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../styles/Main.css';
import MainSwiperImage from '../../../images/mainSwipe.png';
import MainSwiperImage2 from '../../../images/mainSwipe2.png';
import { Pagination } from 'swiper/modules';

export default function MainSwiper() {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="MainSwiper"
        >
            <SwiperSlide>
                <img src={MainSwiperImage} alt="Main swiper" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MainSwiperImage2} alt="Main swiper" />
            </SwiperSlide>
        </Swiper>
    );
}
