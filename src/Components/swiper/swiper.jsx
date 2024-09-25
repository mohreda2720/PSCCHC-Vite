import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './swiper.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Swiper1() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="first"
      >
        <SwiperSlide>
          <img src="./images/a1.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/a2.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/a3.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/a4.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/b1.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/b2.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/b3.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/c1.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/c2.jpg" alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
