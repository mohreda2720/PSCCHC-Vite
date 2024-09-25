/* eslint-disable no-unused-vars */
import { Container, Row } from "react-bootstrap";
import { LuContainer } from "react-icons/lu";
import { GiCargoCrate } from "react-icons/gi";
import { TbBrandDatabricks } from "react-icons/tb";
import "./OurServices.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DiscoverHeader from "../../Components/DiscoverMorePage/DiscoverHeader";
import { useLanguage } from "../../Components/LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchOurLocation } from "../../Components/Store/Reducers/StaticPageByID";
import { fetchSecurity } from "../../Components/Store/Reducers/SecurityFetch";
import Loader from "../../Components/Loader/Loader";
import DOMPurify from "dompurify";
const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

const Services = () => {
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const { OurLocation, locationLoading, error } = useSelector(
    (state) => state.StaticPageByID
  );
  const { Security, SecurityLoading } = useSelector((state) => state.Security);
  const [LocationByLanguage, setLocationByLangauage] = useState([]);
  const [SecurityByLanguage, setSecurityByLangauage] = useState([]);

  useEffect(() => {
    dispatch(fetchOurLocation(12001));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchSecurity(12202));
  }, [dispatch]);

  useEffect(() => { });
  console.log(OurLocation);
  console.log(Security);

  useEffect(() => {
    if (OurLocation.length > 0) {
      const filteredByLanguage = OurLocation.filter(
        (item) => item.pageLang === language
      );
      setLocationByLangauage(filteredByLanguage);
    }
  }, [OurLocation, language]);

  useEffect(() => {
    if (Security.length > 0) {
      const filteredByLanguage = Security.filter(
        (item) => item.pageLang === language
      );
      setSecurityByLangauage(filteredByLanguage);
    }
  }, [Security, language]);

  console.log(LocationByLanguage);
  console.log("this is filtered security", SecurityByLanguage);

  const navigate = useNavigate();
  const handleContainerNavigate = () => {
    navigate("/services/container");
  };

  const handleCargoNavigate = () => {
    navigate("/services/cargo");
  };

  const handleInlandNavigate = () => {
    navigate("/services/inland");
  };
  return (
    <>
      {locationLoading && <Loader />}
      <DiscoverHeader
        title={language === "en" ? "Our Activities" : "أنشطة الشركة"}
        // img="/images/AboutBanner-min.jpg"
        img="/images/container-blue.jpg"
        current="Service "
      />

      {/* _______________________________________________________________________________________ */}

      <div className="MapBlock" id="OurLocation">
        <div className="MapBlockContent">
          <Container>
            {LocationByLanguage.map((item, index) => (
              <>
                <div className="DiscoverLocation my-3 mb-5">
                  <div className="LocationLoader"></div>
                  <div className="display-6">{item.contentTitle}</div>
                </div>
                <div className="DiscoverMap">
                  <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6822.209674843318!2d32.304883!3d31.245521000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99d791654be5d%3A0xbd8913ccd00af6ae!2sPort%20Said%20Container%20%26%20Cargo%20Handling%20CO.(PSCCHC)!5e0!3m2!1sen!2sus!4v1720260886047!5m2!1sen!2sus"
                    width="100%"
                    height="380px"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="locationSection my-5">
                  <p className=" IncreasedFontSize" dangerouslySetInnerHTML={sanitizeHTML(item.details)}></p>
                </div>
              </>
            ))}
          </Container>
        </div>
      </div>
      {/* _______________________________________________________________________________________ */}
      {/* <div className="MapBlock">
        <Container className="MapBlockContent">
          {SecurityByLanguage.map((item, index) => (
            <>
              <div className="DiscoverLocation my-3 mb-5">
                <div className="display-6">{item.htmTitle}</div>
              </div>
              <p dangerouslySetInnerHTML={sanitizeHTML(item.details)}></p>
            </>
          ))}
        </Container>
      </div> */}
      {/* _______________________________________________________________________________________ */}
      <Container>
        <header className="section-header">
          {/* <h3>PSCCHC SERVICES</h3> */}
          {/* <h3>{language === "en" ? "PSCCHC SERVICES" : "الخدمات"}</h3> */}
        </header>
        <div className="ServicesCardContainer ">
          <div className="row gap-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              className="ServiceCard d-flex justify-content-center align-items-center col-12 "
              onClick={handleContainerNavigate}
            >
              <div className="ServiceCardContent">
                <div className="ServiceIcon">
                  <LuContainer size={100} />
                </div>
                <div className="ServiceContent">
                  <div className="fs-1 fw-bold">
                    {language === "en" ? "Container Terminal" : "محطة الحاويات"}
                  </div>
                  <p>
                    {language === "en"
                      ? "Discover more about our Container Terminal."
                      : "إكتشف المزيد عن محطة الحاويات"}
                  </p>

                  {/* <div className="fs-1 fw-bold">Container Terminal</div>
                  <p>Discover more about our Container Terminal.</p> */}

                  {/* <motion.button whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }} className="btn btn-dark buttonColor" onClick={handleContainerNavigate}>
                                        click here
                                    </motion.button> */}
                  <div
                    className="ServiceCardBackground"
                    style={{
                      backgroundImage: `url(${"/images/services/containerterminal.jpg"})`,
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="ServiceCard d-flex justify-content-center align-items-center col "
              onClick={handleCargoNavigate}
            >
              <div className="ServiceCardContent">
                <div className="ServiceIcon">
                  <GiCargoCrate size={100} />
                </div>
                <div className="ServiceContent">
                  <div className="fs-1 fw-bold">
                    {language === "en" ? "Cargo Terminal" : "نشاط البضائع"}
                  </div>
                  <p>
                    {language === "en"
                      ? "Discover more about our Cargo Terminal."
                      : "إكتشف المزيد عن نشاط البضائع"}
                  </p>

                  {/* <div className="fs-1 fw-bold">Cargo Terminal</div>
                  <p>Discover more about our Cargo Terminal.</p> */}

                  {/* <motion.button whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }} className="btn btn-dark buttonColor" onClick={handleContainerNavigate}>
                                        click here
                                    </motion.button> */}
                  <div
                    className="ServiceCardBackground"
                    style={{
                      backgroundImage: `url(${"/images/services/2.jpg"})`,
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="ServiceCard d-flex justify-content-center align-items-center col"
              onClick={handleInlandNavigate}
            >
              <div className="ServiceCardContent">
                <div className="ServiceIcon">
                  <TbBrandDatabricks size={100} />
                </div>
                <div className="ServiceContent">
                  <div className="fs-1 fw-bold">
                    {language === "en" ? "Inland Terminal" : "العاشر من رمضان"}
                  </div>
                  <p>
                    {language === "en"
                      ? "Discover more about our Inland Terminal."
                      : "إكتشف المزيد عن العاشر من رمضان"}
                  </p>

                  {/* <div className="fs-1 fw-bold">Inland Terminal</div>
                  <p>Discover more about our Inland Terminal.</p> */}
                  {/* <motion.button whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }} className="btn btn-dark buttonColor" >
                                        click here
                                    </motion.button> */}
                  <div
                    className="ServiceCardBackground"
                    style={{
                      backgroundImage: `url(${"/images/services/3.jpg"})`,
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      <div className="MapBlock" id="SecuritySafety">
        <Container className="MapBlockContent">
          {SecurityByLanguage.map((item, index) => (
            <>
              {/* <div className="DiscoverLocation my-3 mb-5">
                <div className="display-6">{item.htmTitle}</div>
              </div> */}
              <header className="section-header my-5">
                <h3>{item.htmTitle}</h3>
              </header>
              {language === "en" ? (
                <>
                  <Row>
                    <div className="col-12 col-md-6 text-start IncreasedFontSize">
                      <p
                        dangerouslySetInnerHTML={sanitizeHTML(item.details)}
                      ></p>
                    </div>
                    <div className="col-12 col-md-6 align-items-center align-content-center">
                      <p
                        dangerouslySetInnerHTML={sanitizeHTML(item.image1)}
                      ></p>
                    </div>
                  </Row>
                </>
              ) : (
                <>
                  <Row>
                    <div className="col-12 col-md-6 align-items-center align-content-center">
                      <p
                        dangerouslySetInnerHTML={sanitizeHTML(item.image1)}
                      ></p>
                    </div>
                    <div className="col-12 col-md-6 RightToLeftAlign ">
                      <p
                        dangerouslySetInnerHTML={sanitizeHTML(item.details)}
                      ></p>
                    </div>
                  </Row>
                </>
              )}
            </>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Services;
