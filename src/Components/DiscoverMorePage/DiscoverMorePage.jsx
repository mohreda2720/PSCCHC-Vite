import "../../Layout/OurServices/OurServices.css";
import DiscoverHeader from "./DiscoverHeader";
import FAQ from "./FAQ";
import Tenders from "./TendersCardsWide";
import "./DiscoverMorePage.css";
import Technology from "./Technology";
import FinancialStatements from "./FinancialStatements";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDiscover } from "../Store/Reducers/DiscoverReducer";
import { useLanguage } from "../LanguageContext";
import Loader from "../Loader/Loader";

const DiscoverMorePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDiscover());
  }, [dispatch]);

  const { Discover, loading, error } = useSelector((state) => state.Discover);
  const [filteredFAQ, setfilteredFAQ] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    if (Discover.length > 0) {
      const filteredDiscover = Discover.filter((item) =>
        item.pageId.toString().includes("14")
      );
      // console.log(filteredDiscover);

      const filteredDiscoverByLanguage =
        language === "en"
          ? filteredDiscover.filter((item) => item.pageLang === "en")
          : filteredDiscover.filter((item) => item.pageLang === "ar");
      // console.log(filteredDiscoverByLanguage);

      const FAQ = filteredDiscoverByLanguage.filter(
        (item) => item.pageId.toString() === "14301"
      );
      if (FAQ) {
        setfilteredFAQ(FAQ);
        // console.log(FAQ);
      }
    }
  }, [Discover, language]);
  // console.log('Discover response', Discover)
  return (
    <>
      {loading && <Loader />}
      <>
        {language === "en" ? (
          <DiscoverHeader
            title="Discover"
            img="/images/AboutBanner-min.jpg"
            current="Discover"
          />
        ) : (
          <DiscoverHeader
            title="إكتشف المزيد"
            img="/images/AboutBanner-min.jpg"
            current="Discover"
          />
        )}
      </>

      <div id="Tenders">
        <Tenders />
      </div>

      <div className="page-seperator"></div>
      {/* <Technology /> */}
      <div className="page-seperator"></div>

      <div id="FAQ">
        {filteredFAQ.length > 0 && <FAQ filteredFAQ={filteredFAQ} />}
      </div>

      <div className="page-seperator"></div>


      <div id="Statements">
        <FinancialStatements />
      </div>
    </>
  );
};

export default DiscoverMorePage;
