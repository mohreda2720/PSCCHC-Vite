import { Accordion } from "react-bootstrap";
import "./OurServices.css";
import PieChartCard from "./CargoCharts/PieChart";
import DiscoverHeader from "../../Components/DiscoverMorePage/DiscoverHeader";
import BarChartCatd from "./CargoCharts/BarChart";
import { useEffect, useMemo, useState } from "react";
import { fetchsocialResponse } from "../../Components/Store/Reducers/socialresponse";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../Components/LanguageContext";
import Loader from "../../Components/Loader/Loader";

const CargoService = () => {
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
      item.pageId.toString().includes("12401")
    );
  }, [Social, language]);

  useEffect(() => {
    setTerminalFacts(filteredTerminalFacts);
  }, [filteredTerminalFacts]);

  // console.log(terminalFacts);
  //-----------------------------------------------------------------------------
  function extractTextFromListItems(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const listItems = doc.querySelectorAll("li");
    const extractedTexts = [];

    listItems.forEach((li) => {
      const text = li.textContent.trim();
      extractedTexts.push(text);
    });

    return extractedTexts;
  }

  let extractedTexts = [];
  // Example usage
  if (terminalFacts[0] && terminalFacts[0].details) {
    const detailsHTML = terminalFacts[0].details;
    extractedTexts = extractTextFromListItems(detailsHTML);
    console.log(extractedTexts);
  } else {
    console.log("terminalFacts[0].details is not available yet.");
  }

  return (
    <div id="CargoServiceSection">
      {loading && <Loader />}

      <DiscoverHeader
        title={language === "en" ? "Cargo Services" : "خدمات البضائع"}
        img="/images/AboutBanner-min.jpg"
        current="Service / Cargo Service"
      />
      <div className="container-fluid">
        <div className="section-header mt-5">
          <h3>{terminalFacts[0]?.htmTitle}</h3>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
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
                {/* <Accordion.Header>Cargo Handling Activities</Accordion.Header> */}
                <Accordion.Body>
                  <div className="d-flex flex-wrap mb-4 container">
                    {extractedTexts.map((item, index) => (
                      <>
                        <div className="col-xl-6 p-2 col-12">
                          <div className="cookieCard">
                            <p
                              className={`cookieDescription text-${
                                language === "en" ? "start" : "end"
                              }`}
                            >
                              {item}
                            </p>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1" className="rounded mb-2">
                <Accordion.Header>
                  <div
                    className={`${language === "en" ? "" : "w-100 text-end"}`}
                  >
                    {terminalFacts[1]?.contentTitle}
                  </div>
                </Accordion.Header>
                {/* <Accordion.Header>Genral Cargo</Accordion.Header> */}
                <Accordion.Body
                  className={`text-${language === "en" ? "start" : "end"}`}
                >
                  {terminalFacts[1]?.details}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="rounded mb-2">
                <Accordion.Header>
                  <div
                    className={`${language === "en" ? "" : "w-100 text-end"}`}
                  >
                    {terminalFacts[2]?.contentTitle}
                  </div>
                </Accordion.Header>
                <Accordion.Body
                  className={`text-${
                    language === "en" ? "start" : "end"
                  } align-text-justify`}
                >
                  {terminalFacts[2]?.details}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-12 col-lg-6">
            {/* <div className="m-5">
              <PieChartCard />
            </div> */}
            <div className="m-5">
              <BarChartCatd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CargoService;
