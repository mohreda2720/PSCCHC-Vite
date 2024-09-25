import React, { useState, useEffect } from "react";
import "./MediaCenter.css";
import { useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import ProductCategories from "./ScrollingImages/ScrolImages.jsx";
import All from "./NewsComponnet/All.jsx";
import DiscoverHeader from "../DiscoverMorePage/DiscoverHeader.jsx";
import { useLanguage } from "../LanguageContext.jsx";
import ImageModel from "./ImageModel.jsx";
function MediaCenter(probs) {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const location = useLocation();
  const [newsId, setNewsId] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("newsId");
    setNewsId(id);
  }, [location.search]);

  return (
    <>
      <DiscoverHeader
        title={language === "en" ? "Media Center" : "الوسائط المتعددة"}
        img="/images/about-plan2.jpg"
        current="Media Center"
      />
      {/* <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
        {carouselData.map((item, index) => (
          <Carousel.Item key={index} interval={1000}>
            <img className="mediaimage d-block w-100" src={item.src} alt={`Slide ${index}`} />
            <Carousel.Caption className="text-center"
              style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <h1 className="my-2 display-5 fw-bold ls-tight" data-aos="fade-up" data-aos-delay style={{ color: "hsl(218, 81%, 95%)" }}>
                {item.caption} <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}><Typewriter text={item.subCaption} delay={50} /></span>
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>  */}
      <header className="section-header mt-5" data-aos="fade-up" data-aos-delay>
        <h3>{language === "en" ? "News" : "اخبار الشركه"}</h3>
      </header>
      <All sentId={newsId} />
      <header className="section-header mt-5" data-aos="fade-up" data-aos-delay>
        <h3>{language === "en" ? "Gallery" : "معرض الصور"}</h3>
      </header>
      {/* <div id="PSCCHCGallery"> */}
      {/* <ProductCategories /> */}
      {/* </div> */}

      {/* <Swiper1/> */}
      {/* <FilterGallery/> */}
      <ImageModel />
    </>
  );
}

export default MediaCenter;
