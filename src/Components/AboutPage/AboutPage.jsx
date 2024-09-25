import { useDispatch, useSelector } from "react-redux";
import "./AboutPage.css";
import "./BoardMembers.css";
import OurCertificates from "./Certificates";
import ChairmanMessage2 from "./ChairmanMessage copy";
import DirectorsBoard2 from "./DirectorsBoard copy";
import { useEffect, useState } from "react";
import { fetchAbout } from "../Store/Reducers/NewsReducer";
import ChairmanGradientPageHeader from "./ChairmanGradientPageHeader";
import { useLanguage } from "../LanguageContext.jsx";
import Loader from "../Loader/Loader";
import TimelineComponent from "./TimeLine/Timeline";
import BelieveUs from "../contact-us/BelieveUs/BelieveUs";

const AboutPage = () => {
  const dispatch = useDispatch();
  const { About, loading, error } = useSelector((state) => state.About);
  const [filteredChairmanMessage, setFilteredChairmanMessage] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch]);

  useEffect(() => {
    if (About.length > 0) {
      const filteredAbout = About.filter((item) =>
        item.pageId.toString().includes("1100")
      );
      const filteredAboutByLanguage =
        language === "en"
          ? filteredAbout.filter((item) => item.pageLang === "en")
          : filteredAbout.filter((item) => item.pageLang === "ar");
      // console.log(filteredAboutByLanguage);

      const chairmanMessage = filteredAboutByLanguage.filter(
        (item) => item.pageId.toString() === "11001"
      );
      if (chairmanMessage) {
        setFilteredChairmanMessage(chairmanMessage);
        // console.log(filteredChairmanMessage);
      }

      const History = filteredAboutByLanguage.filter(
        (item) => item.pageId.toString() === "11002"
      );
      if (History) {
        setFilteredHistory(History);
      }
      // console.log(History);
    }
  }, [About, language]);
  return (
    <>
      {/* <div className="AboutHero">
        <div className="container content-inside">
          <div className="row justify-content-center align-items-center text-center text-white">
            <h1 className="display-5 mb-5">About PSCCHC .</h1>
          </div>
        </div>
      </div> */}
      {loading && <Loader />}
      {filteredChairmanMessage.length > 0 && (
        <ChairmanGradientPageHeader
          title={filteredChairmanMessage[0].htmTitle}
          // image="/images/about/chairman-msg/chairman-msg-bg.jpg"
          image={filteredChairmanMessage[0].image1}
        />
      )}
      {filteredChairmanMessage.length > 0 && (
        <ChairmanMessage2 filteredChairmanMessage={filteredChairmanMessage} />
      )}
      {filteredHistory.length > 0 && (
        <TimelineComponent filteredHistory={filteredHistory} />
      )}
      <OurCertificates />
      <BelieveUs />
      <DirectorsBoard2 />
    </>
  );
};

export default AboutPage;
