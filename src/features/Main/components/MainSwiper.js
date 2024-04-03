import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../styles/Main.css';
import MainSwiperImage from '../../../images/mainSwipe.png';
import MainSwiperImage2 from '../../../images/mainSwipe2.png';
import { Pagination } from 'swiper/modules';

// 사용할 스타일 및 컴포넌트 임포트

export default function MainSwiper() {
    return (
        <div className="full-width-container">
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
                <SwiperSlide>
                    <img src={MainSwiperImage} alt="Main swiper" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MainSwiperImage2} alt="Main swiper" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
