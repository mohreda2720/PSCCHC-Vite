import React, { useEffect, useState } from "react";
import MainHeader from "../MainHeader/MainHeader";
import Resource1 from "./social component/Resource1";
import Resource2 from "./social component/Resource2";
import Resource3 from "./social component/Resource3";
import { Col, Container } from "react-bootstrap";
import "aos/dist/aos.css";
import DiscoverHeader from "../DiscoverMorePage/DiscoverHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchsocialResponse } from "../Store/Reducers/socialresponse";
import { useLanguage } from "../LanguageContext";
import Loader from "../Loader/Loader";
import RotratingCard from "../RoteratingCard/RotratingCard";
import DOMPurify from "dompurify";
import AOS from 'aos'; // Import AOS at the top of the file

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

const SocialResponse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchsocialResponse());
  }, [dispatch]);

  const { Social, loading, error } = useSelector((state) => state.Social);
  const [socialResponsible, setSocialResponsible] = useState([]);
  const [socialResponsible2, setSocialResponsible2] = useState([]);
  const [socialResponsible3, setSocialResponsible3] = useState([]);

  const { language } = useLanguage();

  useEffect(() => {
    if (Social.length > 0) {
      const filteredSocial = Social.filter((item) =>
        item.pageId.toString().includes("150")
      );

      const filteredSocialByLanguage =
        language === "en"
          ? filteredSocial.filter((item) => item.pageLang === "en")
          : filteredSocial.filter((item) => item.pageLang === "ar");

      if (filteredSocialByLanguage.length > 0) {
        const resource = filteredSocialByLanguage.filter((item) =>
          item.pageId.toString().includes("15001")
        );

        setSocialResponsible(resource);
        console.log(socialResponsible);
      }
      if (filteredSocialByLanguage.length > 0) {
        const resource = filteredSocialByLanguage.filter((item) =>
          item.pageId.toString().includes("15002")
        );

        setSocialResponsible2(resource);
        console.log(socialResponsible2);
      }
      if (filteredSocialByLanguage.length > 0) {
        const resource = filteredSocialByLanguage.filter((item) =>
          item.pageId.toString().includes("15003")
        );

        setSocialResponsible3(resource);
        console.log(socialResponsible3);
      }
    }
  }, [Social, language]);

  useEffect(() => {
    // const AOS = require("aos");
    AOS.init();
  }, []);
  return (
    <Col>
      {loading && <Loader />}

      <DiscoverHeader
        title={language === "en" ? "Human Resources" : "المسؤولية الاجتماعية"}
        img="/images/container.jpg"
        current="Social Responsibility"
      />
      {/* {filteredFAQ.length > 0 && <FAQ filteredFAQ={filteredFAQ} />} */}

      {/* <MainHeader text ="Human Resources" /> */}
      {/* <header className="section-header mt-5" data-aos="fade-up" data-aos-delay>
        <h3>Resources</h3>
      </header> */}

      <section id="about">
        {socialResponsible.length > 0 && (
          <RotratingCard
            socialResponsible={socialResponsible}
            socialResponsible2={socialResponsible2}
            socialResponsible3={socialResponsible3}
          />
        )}
      </section>

      <div id="Responsibility">
        {socialResponsible.length > 0 && (
          <Resource1 socialResponsible={socialResponsible} />
        )}
      </div>
      <div id="Training">
        {socialResponsible2.length > 0 && (
          <Resource2 socialResponsible2={socialResponsible2} />
        )}
      </div>
      <div id="MedicalCare">
        {socialResponsible3.length > 0 && (
          <Resource3 socialResponsible3={socialResponsible3} />
        )}
      </div>
    </Col>
  );
};
export default SocialResponse;
