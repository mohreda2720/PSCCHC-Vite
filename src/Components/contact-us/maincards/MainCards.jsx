import React, { Component, useEffect, useState, useRef } from "react";
import "./MainCard.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/components/pagination/pagination.min.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar'; // If you intend to use scrollbar

import  { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../LanguageContext";
import { fetchCardData } from "../../Store/Reducers/CardsReducer";
import SwiperCore from 'swiper';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
SwiperCore.use([Navigation, Pagination, Scrollbar]);




function MainCard() {

  const dispatch = useDispatch();
  const { CardData, loading, error } = useSelector((state) => state.CardData);
  const { language } = useLanguage()
  const [newCardData, setCardData] = useState([]);

  useEffect(() => {
    dispatch(fetchCardData(15000));
  }, [dispatch]);

  useEffect(() => {
    const filteredCardData =
      language === "en"
        ? CardData.filter((item) => item.pageLang === "en")
        : CardData.filter((item) => item.pageLang === "ar");
    setCardData(filteredCardData);

  }, [CardData, language]);

  return (

    <section id="trainers"  >
      <Swiper style={{ height: "350px", marginTop: "50px" }}
        slidesPerView={3}

        // scrollbar={{
        //   hide: false,
        //   draggable: true,
        // }}
        spaceBetween={50}
        // navigation={true}
        pagination={{ clickable: true }}      
          centeredSlides={false}
          breakpoints={{
            // Responsive breakpoints
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            960: {
              slidesPerView: 2,
            },
            1025: {
              slidesPerView: 3,
            },
          }}
        className="mySwiper"
      >
        {newCardData.map((trainer, index) => (
          <SwiperSlide >
            <div className="trainer-item">
              <div className="image-thumb">
                <img src={trainer.col7} alt="" />
              </div>
              <div className="down-content">
                <span className="fs-6 mb-4">{trainer.col1}</span>
                <h6>{trainer.col2}</h6>
                <p>
                  {trainer.col4}
                  <br />
                  {trainer.col5}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>


    </section>
  );
}
export default MainCard;
