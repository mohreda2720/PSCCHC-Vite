import './App.css';
import React, { useEffect, useMemo, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './Components/Login/NewLogin/LoginPage.jsx';
import HomePage from './Layout/Home/Home.jsx';
import Contactus from './Components/contact-us/contact.jsx';
import MediaCenter from './Components/media-center/MediaCenter.jsx';
import Services from './Layout/OurServices/OurServices.jsx';
import AboutPage from './Components/AboutPage/AboutPage.jsx';
import ContainerService from './Layout/OurServices/ContainerService.jsx';
import CustomNavbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import SocialResponse from './Components/social responsibility/SocialResponse.jsx';
import CargoService from './Layout/OurServices/CargoService.jsx';
import DiscoverMorePage from './Components/DiscoverMorePage/DiscoverMorePage.jsx';
import InlandService from './Layout/OurServices/InlandService.jsx';
import Topbar from './Components/TopBar/TopBar.jsx';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.jsx';
import Payment from './Components/Payment/Payment.jsx';
import { useLanguage } from './Components/LanguageContext.jsx';
import Reports from './Components/Reports/Reports.jsx';
import BerthStatus from './Components/BerthStatus/BerthStatus.jsx';
import ReactGA from "react-ga4";
import NotFount404 from './Layout/404.jsx';
import EmptyBooking from './Components/Reports/UniqueReports/EmptyBooking.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  ReactGA.initialize("G-CJRC5N7TZ5");
  const location = useLocation();
  const { language } = useLanguage();

  const handleScrollToElement = useCallback(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      else {
        window.scrollTo(0, 0);
      }
    }
  }, [location.hash]);

  useEffect(() => {
    const timer = setTimeout(handleScrollToElement, 500);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash, handleScrollToElement]);

  const aosInitialized = useRef(false);
  useEffect(() => {
    if (!aosInitialized.current) {
      // const AOS = require('aos');
      AOS.init();
      aosInitialized.current = true;
    }
  }, []);

  const loadUserWayWidgetScript = useMemo(() => {
    return () => {
      const script = document.createElement("script");
      script.setAttribute("class", "scriptClass");
      script.setAttribute("data-position", "5");
      script.setAttribute("data-size", "small");
      script.setAttribute("data-language", language);
      script.setAttribute("data-color", "#2A324A");
      script.setAttribute("data-type", "2");
      script.setAttribute("data-mobile", "true");
      script.setAttribute("data-account", "wmVKCsSvlF");
      script.setAttribute("src", "https://cdn.userway.org/widget.js");
      (document.body || document.head).appendChild(script);
    };
  }, [language]);

  useEffect(() => {
    loadUserWayWidgetScript();
  }, [loadUserWayWidgetScript]);

  useEffect(() => {
    const checkAndRunCode = () => {
      const divElement = document.querySelector('[data-uw-feature-ignore="true"]');
      if (divElement) {
        divElement.setAttribute("class", "uwy userway_p5");
      } else {
        setTimeout(checkAndRunCode, 50);
      }
    };

    checkAndRunCode();
  }, []);

  return (
    <div className="App">
      <CustomNavbar />
      <Routes>
        <Route path='*' element={<NotFount404 />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/media' element={<MediaCenter />} />
        <Route path='/socialResponsibility' element={<SocialResponse />} />
        <Route path='/services/container' element={<ContainerService />} />
        <Route path='/services/cargo' element={<CargoService />} />
        <Route path='/services/inland' element={<InlandService />} />
        <Route path='/discover' element={<DiscoverMorePage />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/login/reports' element={<Reports />} />
        <Route path='/berthstatus' element={<BerthStatus />} />
        <Route path='/booking' element={<EmptyBooking />} />
      </Routes>
      <Footer />
      <Topbar />
      <ScrollToTop />
    </div>
  );
}

export default App;
