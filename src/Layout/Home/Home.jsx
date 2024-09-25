/* eslint-disable no-unused-vars */
// import Banner from "../Banner/Banner";
// import NewsSlider from "../../Components/News/NewsBS";
// import Vision from "../../Components/Vision/Vision";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { fetchAbout } from "../../Components/Store/Reducers/NewsReducer";
// import { useLanguage } from "../../Components/LanguageContext";
// import Loader from "../../Components/Loader/Loader";
// import BelieveUs from "../../Components/contact-us/BelieveUs/BelieveUs";
// const HomePage = () => {
//   // const dispatch = useDispatch();
//   // const { news, loading, error } = useSelector((state) => state.news);
//   // useEffect(() => {
//   //     dispatch(fetchNews());
//   //   }, [dispatch]);
//   //   console.log(news);

//   const { About, loading, error } = useSelector((state) => state.About);
//   const [vision, setVision] = useState([]);
//   const [banner, setBanner] = useState([]);
//   const { language } = useLanguage();
//   // const [filterByLanguage, setFilterByLanguage] = useState()
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchAbout());
//   }, [dispatch]);

//   useEffect(() => {
//     if (About.length > 0) {
//       const filtered =
//         language === "en"
//           ? About.filter((item) => item.pageLang === "en")
//           : About.filter((item) => item.pageLang === "ar");

//       const filteredHeader = filtered.filter(
//         (item) => item.pageId.toString() === "10000"
//       );
//       if (filteredHeader) {
//         setBanner(filteredHeader);
//         console.log(banner);
//       }
//       const filteredVision = filtered.filter(
//         (item) => item.pageId.toString() === "11003"
//       );
//       if (filteredVision) {
//         setVision(filteredVision);
//       }
//     }
//   }, [About, language]);
//   console.log(banner)
//   return (
//     <>
//       {loading && <Loader />}
//       {banner.length > 0 && <Banner banner={banner} />}
//       <NewsSlider />
//       {vision.length > 0 && <Vision vision={vision} />}
//       {/* <BelieveUs /> */}
//     </>
//   );
// };

// export default HomePage;

import Banner from "../Banner/Banner";
import NewsSlider from "../../Components/News/NewsBS";
import Vision from "../../Components/Vision/Vision";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react"; // Import useCallback
import { fetchAbout } from "../../Components/Store/Reducers/NewsReducer";
import { useLanguage } from "../../Components/LanguageContext";
import Loader from "../../Components/Loader/Loader";
import BelieveUs from "../../Components/contact-us/BelieveUs/BelieveUs";
import MarineAndCountup from "../MarineTraffic/MarineAndCountup";
import NotFount404 from "../404";

const HomePage = () => {
  const dispatch = useDispatch();
  const { About, loading, error } = useSelector((state) => state.About);
  const { language } = useLanguage();

  const [banner, setBanner] = useState([]);
  const [vision, setVision] = useState([]);
  const [statistics, setStatistics] = useState([]);


  const memoizedEffect = useCallback(() => {
    dispatch(fetchAbout());
  }, [dispatch]);

  useEffect(() => {
    memoizedEffect();
  }, [memoizedEffect]);

  useEffect(() => {
    if (About.length > 0) {
      // const filtered = language === "en"
      //   ? About.filter((item) => item.pageLang === "en")
      //   : About.filter((item) => item.pageLang === "ar");

      const filtered = About.filter((item) => item.pageLang === language);

      const filteredHeader = filtered.filter(
        (item) => item.pageId.toString() === "10000"
      );
      const filteredVision = filtered.filter(
        (item) => item.pageId.toString() === "11003"
      );
      
      const filteredStatistics = filtered.filter(
        (item) => item.pageId.toString() === "10039"
      );
      console.log("filteredStatistics : ", filteredStatistics)


      if (filteredHeader) {
        setBanner(filteredHeader);
      }

      if (filteredVision) {
        setVision(filteredVision);
      }
      if (filteredStatistics) {
        setStatistics(filteredStatistics);
      }
    }
  }, [About, language]);

  return (
    <>
      {loading && <Loader />}
      {banner.length > 0 && <Banner banner={banner} />}
      <NewsSlider />
      {vision.length > 0 && <Vision vision={vision} />}
      {/* <BelieveUs /> */}
      {/* <MarineAndCountup /> */}
      {statistics.length > 0 && <MarineAndCountup statistics={statistics} />}
    </>
  );
};

export default HomePage;
