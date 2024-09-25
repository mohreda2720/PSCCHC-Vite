import { Accordion } from "react-bootstrap";
import "./OurServices.css";
import DiscoverHeader from "../../Components/DiscoverMorePage/DiscoverHeader";
import BarChartCatd from "./CargoCharts/BarChartForInland";
import DryPort from "../../assets/img/dry_port.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../Components/LanguageContext";
import { useEffect, useMemo, useState } from "react";
import { fetchsocialResponse } from "../../Components/Store/Reducers/socialresponse";
import DOMPurify from "dompurify";
import Loader from "../../Components/Loader/Loader";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};
const InlandService = () => {
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const [terminalFacts, setTerminalFacts] = useState([]);
  const { Social, loading, error } = useSelector((state) => state.Social);

  useEffect(() => {
    dispatch(fetchsocialResponse());
  }, [dispatch]);

  const filteredTerminalFacts = useMemo(() => {
    if (Social.length === 0) return [];

    const filterSocialByLanguage =
      language === "en"
        ? Social.filter((item) => item.pageLang === "en")
        : Social.filter((item) => item.pageLang === "ar");

    if (filterSocialByLanguage.length === 0) return [];

    return filterSocialByLanguage.filter((item) =>
      item.pageId.toString().includes("13001")
    );
  }, [Social, language]);

  useEffect(() => {
    setTerminalFacts(filteredTerminalFacts);
  }, [filteredTerminalFacts]);

  console.log(terminalFacts);

  return (
    <div id="InlandService">
      {loading && <Loader />}
      <DiscoverHeader
        title={language === "en" ? "Inland Services" : "خدمات العاشر من رمضان"}
        img="/images/AboutBanner-min.jpg"
        current="Service / Inland Service"
      />
      <div className="container-fluid">
        <div className="section-header mt-5">
          <h3>{terminalFacts[0]?.contentTitle}</h3>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-lg-6">
            <div className="m-5">
              <BarChartCatd />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <Accordion
              defaultActiveKey="0"
              className="accordionPanel m-5"
              alwaysOpen
            >
              <Accordion.Item eventKey="0" className="rounded mb-2">
                <Accordion.Header>
                  <div
                    className={`${language === "en" ? "" : "w-100 text-end"}`}
                  >
                    {terminalFacts[0]?.contentTitle}
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <div
                      className={`inlandContent text-${language === "en" ? "start" : "end"
                        }`}
                      dangerouslySetInnerHTML={sanitizeHTML(
                        terminalFacts[0]?.details
                      )}
                    ></div>
                    {/* <p>{terminalFacts[0]?.details}</p> */}
                    <img
                      src={DryPort}
                      width="100%"
                      height="auto"
                      alt="inland"
                    />
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlandService;
