// import React, { useEffect, useMemo, useState } from "react";
// import { Carousel, Row, Col } from "react-bootstrap";
// import "./NewsBS.css";
// import { useLanguage } from "../LanguageContext";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMiniCardData } from "../Store/Reducers/MiniCardReducer";
// import { Link } from 'react-router-dom';

// function NewsSlider() {
//   const dispatch = useDispatch();
//   const { language } = useLanguage();
//   const { miniCardsData, loading, error } = useSelector((state) => state.miniCardsData);
//   const [NewsCarousel, setNewMiniCardData] = useState([]);

//   useEffect(() => {
//     dispatch(fetchMiniCardData(49));
//   }, [dispatch]);

//   const filteredMiniCards = useMemo(() => {
//     if (!miniCardsData || miniCardsData.length === 0) return [];

//     return language === "en"
//       ? miniCardsData.filter((item) => item.pLang === "en")
//       : miniCardsData.filter((item) => item.pLang === "ar");
//   }, [miniCardsData, language]);

//   useEffect(() => {
//     setNewMiniCardData(filteredMiniCards);
//   }, [filteredMiniCards]);

//   return (
//     <div className="container news_slider my-5">
//       {/* <header className='section-header mt-5' data-aos="fade-up" data-aos-delay><h3>PSCCHC News</h3></header> */}
//       <Row data-aos="fade-down" data-aos-delay>
//         <Col xs={12} md={6}>
//           <Carousel className="mb-3">
//             {NewsCarousel.slice(0, 4).map((lastNews, index) => (

//               <Carousel.Item key={index} interval={2000} >
//                 <Link to={{
//                   pathname: '/media',
//                   search: `?newsId=${lastNews.newsId}&pageLang=${language}`,
//                 }}>
//                   <img
//                     src={lastNews.nimage}
//                     className="CarouselNewsImage"
//                     alt={lastNews.title}
//                   />
//                   <Carousel.Caption className="news-carousel-title">
//                     <h5>{lastNews.title}</h5>
//                   </Carousel.Caption>
//                   <div className="news-gradient-overlay"></div>

//                 </Link>
//               </Carousel.Item>

//             ))}
//           </Carousel>
//         </Col>
//         <Col xs={12} md={6}>
//           <Row>
//             {NewsCarousel.slice(0, 4).map((lastNews, index) => (
//               <Col key={index} xs={6} className="mb-4">
//                 <Link to={{
//                   pathname: '/media',
//                   search: `?newsId=${lastNews.newsId}&pageLang=${language}`,
//                 }}>
//                   <div className="image-with-title">
//                     <img
//                       className="sideImage"
//                       src={lastNews.nimage}
//                       alt={lastNews.title}
//                     />
//                     <h6 className="title-overlay">{lastNews.title}</h6>
//                     <div className="news-box-overlay"></div>
//                   </div>
//                 </Link>
//               </Col>
//             ))}
//           </Row>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default NewsSlider;

import { useEffect, useMemo, useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "./NewsBS.css";
import { useLanguage } from "../LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchMiniCardData } from "../Store/Reducers/MiniCardReducer";
import { Link } from 'react-router-dom';

function NewsSlider() {
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const { miniCardsData, loading, error } = useSelector((state) => state.miniCardsData);
  const [newsCarousel, setNewsCarousel] = useState([]);

  useEffect(() => {
    dispatch(fetchMiniCardData(49));
  }, [dispatch]);

  const filteredMiniCards = useMemo(() => {
    if (!miniCardsData || miniCardsData.length === 0) return [];

    return language === "en"
      ? miniCardsData.filter((item) => item.pLang === "en")
      : miniCardsData.filter((item) => item.pLang === "ar");
  }, [miniCardsData, language]);

  useEffect(() => {
    setNewsCarousel(filteredMiniCards);
  }, [filteredMiniCards]);

  return (
    <div className="container news_slider my-5">
      <header className='section-header mb-5' data-aos="fade-up" data-aos-delay>
          <h3>{language === 'en' ? "Latest news" : "آخر الأخبار"}</h3>
        </header>
      <Row >
        <Col xs={12} md={6}>
          <Carousel className="mb-3">
            {newsCarousel.slice(0, 4).map((lastNews, index) => (
              <Carousel.Item key={index} interval={2000}>
                <Link
                  to={{
                    pathname: '/media',
                    search: `?newsId=${lastNews.newsId}&pageLang=${language}`,
                  }}
                >
                  <img
                    src={lastNews.nimage}
                    className="CarouselNewsImage lazy-load"
                    data-src={lastNews.nimage} // Use data-src for lazy loading
                    alt={lastNews.title}
                  />
                  <Carousel.Caption className="news-carousel-title">
                    <h5>{lastNews.title}</h5>
                  </Carousel.Caption>
                  <div className="news-gradient-overlay"></div>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={12} md={6}>
          <Row>
            {newsCarousel.slice(0, 4).map((lastNews, index) => (
              <Col key={index} xs={6} className="mb-4">
                <Link
                  to={{
                    pathname: '/media',
                    search: `?newsId=${lastNews.newsId}&pageLang=${language}`,
                  }}
                >
                  <div className="image-with-title">
                    <img
                      className="sideImage lazy-load"
                      src={lastNews.nimage}
                      data-src={lastNews.nimage} // Use data-src for lazy loading
                      alt={lastNews.title}
                    />
                    <h6 className="title-overlay">{lastNews.title}</h6>
                    <div className="news-box-overlay"></div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default NewsSlider;

