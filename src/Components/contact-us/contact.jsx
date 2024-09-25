import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import MainCard from "./maincards/MainCards.jsx";
import DiscoverHeader from "../DiscoverMorePage/DiscoverHeader.jsx";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactusData } from "../../Components/Store/Reducers/ContactusReducer.js";
import { useLanguage } from "../LanguageContext.jsx";
import Loader from "../Loader/Loader.jsx";
import NewForm from "./newform/newform.jsx";

const Contactus = () => {
  // const [selectedContactus, setselectedContactus] = useState(0);
  const dispatch = useDispatch();
  const { contactusData, loading, error } = useSelector(
    (state) => state.Contactus
  );
  const [newContactusData, setContactusData] = useState([]);
  const [contact, setcontact] = useState([]);

  const { language } = useLanguage();

  useEffect(() => {
    dispatch(fetchContactusData());
  }, [dispatch]);
  console.log(contactusData);

  useEffect(() => {
    const filteredcontactusData =
      language === "en"
        ? contactusData.filter((item) => item.pageLang === "en")
        : contactusData.filter((item) => item.pageLang === "ar");
    setContactusData(filteredcontactusData);
    const Filterbyid = newContactusData.filter((item) => item.pageId === 10000);
    setcontact(Filterbyid);
  }, [contactusData, language]);
  console.log(contact);

  var settings = {
    dots: true,
    Infinite: false,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <>
      {loading && <Loader />}
      <DiscoverHeader
        title={language === "en" ? "Contact Us" : "تواصل معنا"}
        img="./images/about-plan2.jpg"
        current="Contact Us"
      />

      <NewForm 
        datacontact={language === "ar" ? contactusData[1] : contactusData[0]}
      />
      {/* <BelieveUs /> */}
      <div className="section-header mt-5" data-aos="fade-up" data-aos-delay>
        <h3>
          {language === "en" ? "Contacts" : "جهات الإتصال"}
        </h3>
      </div>

      <MainCard />

    </>
  );
};
export default Contactus;
