import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const Footer = () => {
  
  const { language } = useLanguage();
  return (
    <footer className="footer p-5">
      <Container>
        <Row className="mb-4 text-start d-flex justify-content-between">
          <Col xs={12} sm={6} md={3} className="text-start">
            {/* <div className="h4">Portsaid</div> */}
            <div className=" d-flex align-items-center text-center align-content-center">
              <img  src="/images/logo.png" alt="logo"></img>
              <div className="h4 ms-2 mt-2 " >PSCCHC</div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="text-start">
            <span>&#9632;</span>
          </Col>
          <Col className="text-start" xs={12} sm={6} md={4}>
            <p>
              {language === "en"
                ? 'Co. Subsidiary of "Holding Co. for Land & Maritime Transport"'
                : <>{" شركة بورسعيد لتداول الحاويات والبضائع "}<br />{"التابعة للشركة القابضة للنقل البحرى و البرى  "}</>}
              &nbsp;
              {/* <img
                className="footer_images"
                src="/images/links/hcmlt_slogo.png"
                alt="logo"
              />
              &nbsp; &nbsp;
              <img className="footer_images" src="/images/mot.png" alt="logo" />
              &nbsp; */}
            </p>
          </Col>
        </Row>

        <Row className="d-flex justify-content-between">
          <Col xs={12} sm={6} md={3}>
            <h5>‎</h5>
            <p className="footer-about">
              {language === "en"
                ? 'Port Said Container & Cargo Handling Co. Subsidiary of "Holding Co. for Land & Maritime Transport " , Welcome to our website and We Are very glad to present our website to you hoping that you will find all the information here relevant and useful.'
                : "شركة بورسعيد لتداول الحاويات والبضائع التابعة للشركة القابضة للنقل البحرى و البرى ترحب بكم في موقعها الجديد ،و تتمني أن تجدوا غايتكم في كل المعلومات المتوفره به و يسعدنا التواصل معكم و تقديم المزيد من الدعم و الخدمات لكم"}
            </p>
          </Col>

          {language === "en" ? (
            <>
              {" "}
              <Col xs={12} sm={6} md={3} className="text-start">
                <h5>About</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/about#OurHistory"
                      className="link-unstyled small-link"
                    >
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about#BoardMembers"
                      className="link-unstyled small-link"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about#chairmanMSG"
                      className="link-unstyled small-link"
                    >
                      Mission Statement
                    </Link>
                  </li>
                  <li>
                    <a href="/" className="link-unstyled small-link">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/about#certificates-section"
                      className="link-unstyled small-link"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </Col>
            </>
          ) : (
            <>
              <Col xs={12} sm={6} md={3} className="text-start">
                <h5>عن الشركة</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/about#OurHistory"
                      className="link-unstyled small-link"
                    >
                      تاريخ الشركة
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about#BoardMembers"
                      className="link-unstyled small-link"
                    >
                      فريق العمل
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about#chairmanMSG"
                      className="link-unstyled small-link"
                    >
                      كلمة هامة
                    </Link>
                  </li>
                  <li>
                    <a href="/" className="link-unstyled small-link">
                      الشروط والأحكام
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/about#certificates-section"
                      className="link-unstyled small-link"
                    >
                      سياسة الخصوصية
                    </Link>
                  </li>
                </ul>
              </Col>
            </>
          )}


          {language === "en" ? (
            <>
              <Col xs={12} sm={6} md={4} className="ml-auto text-start ">
                <h5>Related websites</h5>
                <ul className="list-unstyled mt-3">
                  <li>
                    <a
                      href="http://www.sczone.eg/"
                      className="link-unstyled small-link"
                    >
                      <img
                        className="footer_images_small"
                        // src="http://pscchc.com/img/links/sc.jpg"
                        src="/images/links/sc.jpg"
                        alt="logo"
                      />
                      &nbsp;&nbsp;Suez Canal Economic zone
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.hcmlt.com/"
                      className="link-unstyled small-link"
                    >
                      <img
                        className="footer_images_small"
                        // src="http://pscchc.com/img/links/hcmt.png"
                        src="/images/links/hcmt.png"
                        alt="logo"
                      />
                      &nbsp;&nbsp;Holding Co. for M&amp;L transport
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.emdb.gov.eg/"
                      className="link-unstyled small-link"
                    >
                      <img
                        className="footer_images_small"
                        // src="http://pscchc.com/img/links/emdb.png"
                        src="/images/links/emdb.png"
                        alt="logo"
                      />
                      &nbsp;&nbsp;Egyptian Maritime Data Bank
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.mts.gov.eg/"
                      className="link-unstyled small-link"
                    >
                      <img
                        className="footer_images_small"
                        // src="http://pscchc.com/img/links/mts.png"
                        src="/images/links/mts.png"
                        alt="logo"
                      />
                      &nbsp;&nbsp;Maritime Transport Sector
                    </a>
                  </li>
                </ul>
              </Col>
            </>
          ) : (
            <>
              <Col xs={12} sm={6} md={4} className="ml-auto text-start ">
                <h5>مواقع هامة</h5>
                <ul className="list-unstyled mt-3">
                  <li>
                    <a
                      href="http://www.sczone.eg/"
                      className="link-unstyled small-link"
                    >
                      <img
                        className="footer_images_small"
                        // src="http://pscchc.com/img/links/sc.jpg"
                        src="/images/links/sc.jpg"
                        alt="logo"
                      />
                      &nbsp;&nbsp;المنطقة الاقتصادية لقناة السويس
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.hcmlt.com/"
                      className="link-unstyled small-link"
                    >
                      <img
                        className="footer_images_small"
                        // src="http://pscchc.com/img/links/hcmt.png"
                        src="/images/links/hcmt.png"
                        alt="logo"
                      />
                      &nbsp;&nbsp;الشركة القابضة للنقل البحري و البري
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.emdb.gov.eg/"
                      className="link-unstyled small-link"
                    >
                      <img
                        className="footer_images_small"
                        // src="http://pscchc.com/img/links/emdb.png"
                        src="/images/links/emdb.png"
                        alt="logo"
                      />
                      &nbsp;&nbsp;بنك المعلومات البحرية المصري
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.mts.gov.eg/"
                      className="link-unstyled small-link"
                    >
                      <img
                        className="footer_images_small"
                        // src="http://pscchc.com/img/links/mts.png"
                        src="/images/links/mts.png"
                        alt="logo"
                      />
                      &nbsp;&nbsp;قطاع النقل البحري
                    </a>
                  </li>
                </ul>
              </Col>
            </>
          )}
        </Row>

        <Row>
          {language === 'en' ? (
            <>
              <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                  <h5>Follow us</h5>
                  <a
                    href="https://eg.linkedin.com/company/pscchc"
                    className="link-unstyled"
                  >
                    <FaLinkedin size={30} />
                  </a>
                </div>
                <div className="d-flex flex-column justify-content-start align-content-start align-items-start VisitorsCounter">
                  {/* <p>Today Visitors: <span className="WebsiteVisitors">55030</span></p>
                  <p>Total Visitors: <span className="WebsiteVisitors">989800998980</span></p> */}
                </div>

              </div>
            </>
          ) : (
            <>
              <div className="d-flex align-items-center justify-content-between">

                <div className="d-flex gap-3 justify-content-center align-items-center">
                  <a
                    href="https://eg.linkedin.com/company/pscchc"
                    className="link-unstyled"
                  >
                    <FaLinkedin size={30} />
                  </a>
                  <h5>تابعنا</h5>

                </div>
                <div className="d-flex flex-column justify-content-end align-content-end align-items-end VisitorsCounter">
                  {/* <p>زوار اليوم: <span className="WebsiteVisitors">55030</span></p>
                  <p>عدد الزوار: <span className="WebsiteVisitors">989800998980</span></p> */}
                </div>
              </div>
            </>)}

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
