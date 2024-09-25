import React from "react";
import "./Vision.css";

import { BsBarChart, BsEye, BsBullseye } from "react-icons/bs";
import DOMPurify from "dompurify";
import { useLanguage } from "../LanguageContext";
const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};
const Vision = ({ vision }) => {

  const { language } = useLanguage();
  console.log(vision);

  const icons = [BsBarChart, BsEye, BsBullseye];
  return (
    <section id="about">
      <div className="container" data-aos="fade-up">
        <header className='section-header mb-5' data-aos="fade-up" data-aos-delay>
          <h3>{vision[0].htmTitle}</h3>
        </header>


        <div className={`row about-cols ${language === "ar" ? "flex-reverse" : ""}`}>
          {vision.map((item, index) => (
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100" key={index}>
              <div className="about-col">
                <div className="img">
                  <img src={item.image1} alt="" className="img-fluid" />
                  <div className="VisionIcon">
                    {React.createElement(icons[index], { size: 60 })}
                  </div>
                </div>
                <h2 className="title">
                  <div
                    dangerouslySetInnerHTML={sanitizeHTML(item.contentTitle)}
                  />
                </h2>
                <p className="Paragragh_about">
                  <div
                    dangerouslySetInnerHTML={sanitizeHTML(item.details)}
                  />
                </p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default Vision;
