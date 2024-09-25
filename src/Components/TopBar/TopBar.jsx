import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../TopBar/TopBar.css";
import { useLanguage } from "../LanguageContext";

const Topbar = () => {
  const {language} = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const TimeOptions = {
      timeZone: 'Africa/Cairo',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    const DateOptions = {
      timeZone: 'Asia/Tokyo',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    const updateTimeAndDate = () => {
      setCurrentTime(new Date().toLocaleTimeString(language === 'en' ? 'en-US': 'ar-EG', TimeOptions));
      setCurrentDate(new Date().toLocaleDateString(language === 'en' ? 'en-US': 'ar-EG', DateOptions));
    };

    const intervalId = setInterval(updateTimeAndDate, 1000);
    return () => clearInterval(intervalId);
  }, [language]);

  return (
    <div className="container-fluid bg-white pt-3 pb-3 overflow-hidden">
      <Container className="topbar-top">
        <div className="d-flex flex-column flex-md-row justify-content-between topbar py-2">
          <div className="d-flex align-items-center flex-shrink-0 topbar-info mb-3 mb-md-0">
            <a
              href="https://maps.app.goo.gl/U22dpPhH6TtPRv3p8"
              className="me-md-4 text-dark"
            >
              <i className="fas fa-map-marker-alt me-2 text-dark"></i>{language === "en" ? 'Port Said, Egypt' : 'بورسعيد، مصر'}
            </a>
            <a href="tel:+20663237151" className="me-md-4 text-dark">
              <i className="fas fa-phone-alt me-2 text-dark"></i>+2-066-3237151
            </a>
            <a
              href="mailto:pscchc@gmail.com?subject=Mail to PSCCHC"
              target="_blank"
              className="text-dark" rel="noreferrer"
            >
              <i className="fas fa-envelope me-2 text-dark"></i>pscchc@gmail.com
            </a>
          </div>
          <div className="d-flex align-items-between justify-content-center topbar-icon">
            <small><b>{currentTime} {language === 'en' ? '(Cairo Time Zone)' : '(بتوقيت القاهرة)'}</b></small>
            <small>{currentDate}</small>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Topbar;
