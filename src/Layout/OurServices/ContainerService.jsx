import "./OurServices.css";
import Accordion from "react-bootstrap/Accordion";
import "swiper/css";
import "swiper/swiper-bundle.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "@mui/material/styles";
import ContainerChart from "./ContainerChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchsocialResponse } from "../../Components/Store/Reducers/socialresponse";
import { useLanguage } from "../../Components/LanguageContext";
import DOMPurify from "dompurify";
import DiscoverHeader from "../../Components/DiscoverMorePage/DiscoverHeader";
import Loader from "../../Components/Loader/Loader";
import { fetchTabDet } from "../../Components/Store/Reducers/TabDetReducer";
import PieChartCard from "./CargoCharts/PieChart";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ContainerService = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const [terminalFacts, setTerminalFacts] = useState([]);
  const { Social, loading, error } = useSelector((state) => state.Social);
  const { TabDet, TabLoading, TabError } = useSelector((state) => state.TabDet);
  const [filteredTabDet, setFilteredTabDet] = useState([]);

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

    const filteredAndSortedFacts = filterSocialByLanguage
      .filter((item) => item.pageId.toString().includes("12301"))
      .sort((a, b) => a.subjectSeq - b.subjectSeq);

    return filteredAndSortedFacts;
  }, [Social, language]);

  useEffect(() => {
    setTerminalFacts(filteredTerminalFacts);
  }, [filteredTerminalFacts]);

  // console.log(terminalFacts);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(fetchTabDet(12304));
  }, [dispatch]);

  const filteredTabDetByLanguage = useMemo(() => {
    if (TabDet.length === 0) return [];

    return language === "en"
      ? TabDet.filter((item) => item.pageLang === "en")
      : TabDet.filter((item) => item.pageLang === "ar");
  }, [TabDet, language]);

  useEffect(() => {
    setFilteredTabDet(filteredTabDetByLanguage);
  }, [filteredTabDetByLanguage]);

  // console.log("filteredTabDet", filteredTabDet);
  // -------------------------------------------------------------------------------------

  function parseHTML(html) {
    const parser = new DOMParser();
    return parser.parseFromString(html, "text/html");
  }

  function extractTextContent(element) {
    let content = "";
    if (element.tagName.toLowerCase() === "p") {
      content += element.textContent.trim() + " ";
    } else if (element.tagName.toLowerCase() === "ul") {
      const listItems = element.querySelectorAll("li");
      listItems.forEach((li) => {
        content += "- " + li.textContent.trim() + "<br>";
      });
    } else if (element.tagName.toLowerCase() === "table") {
      const tableData = element.querySelectorAll("td");
      tableData.forEach((td) => {
        content += td.textContent.trim() + " ";
      });
    }
    return content.trim();
  }

  function extractHeaderAndContent(html) {
    const doc = parseHTML(html);
    const headers = [];
    const contents = [];

    const h5Elements = doc.querySelectorAll("h5");

    for (let i = 0; i < h5Elements.length; i++) {
      const header = h5Elements[i].textContent.trim();
      headers.push(header);

      let nextElement = h5Elements[i].nextElementSibling;
      let content = "";

      while (nextElement && nextElement.tagName.toLowerCase() !== "h5") {
        content += extractTextContent(nextElement) + " ";
        nextElement = nextElement.nextElementSibling;
      }

      // Add <br> before lines starting with '-'
      content = content.replace(/^- /gm, "<br>- ");

      contents.push(content.trim());
    }

    return { headers, contents };
  }

  function extractFactsDetails(html) {
    const doc = parseHTML(html);
    const factsDetails = [];

    const tableElements = doc.querySelectorAll("table");

    tableElements.forEach((table) => {
      const tableData = table.querySelectorAll("td");
      tableData.forEach((td) => {
        if (td.textContent.trim()) {
          factsDetails.push(td.textContent.trim());
        }
      });
    });

    return factsDetails;
  }

  // Example usage
  let html, headers, contents;

  if (terminalFacts && terminalFacts.length > 2 && terminalFacts[2].details) {
    html = terminalFacts[2].details;
    const extractionResult = extractHeaderAndContent(html);
    headers = extractionResult.headers;
    contents = extractionResult.contents;
  } else {
    // console.log(
    //   "terminalFacts or terminalFacts[2].details is not available yet."
    // );
  }

  let factsDetails = [];

  if (terminalFacts && terminalFacts[0] && terminalFacts[0].details) {
    let factsHTML = terminalFacts[0].details;
    factsDetails = extractFactsDetails(factsHTML);
  } else {
    // console.log(
    //   "terminalFacts or terminalFacts[0].details is not available yet."
    // );
  }

  function extractDataFromDetails(html) {
    const doc = parseHTML(html);
    const data = [];

    const tableElements = doc.querySelectorAll("table");

    tableElements.forEach((table) => {
      const tableRows = table.querySelectorAll("tr");
      tableRows.forEach((row) => {
        const rowData = {};
        const tableCells = row.querySelectorAll("td");
        if (tableCells.length >= 2) {
          const key = tableCells[0].textContent.trim();
          const value = tableCells[1].textContent.trim();
          rowData[key] = value;
          data.push(rowData);
        }
      });
    });

    return data;
  }

  // Example usage
  let data = [];

  if (terminalFacts && terminalFacts[1] && terminalFacts[1].details) {
    let detailsHTML = terminalFacts[1].details;
    data = extractDataFromDetails(detailsHTML);
    // console.log("Extracted data:", data);
  } else {
    // console.log(
    //   "terminalFacts or terminalFacts[1].details is not available yet."
    // );
  }

  function extractDataFromTerminalFactsThree(detailsHTML) {
    const doc = parseHTML(detailsHTML);
    const extractedData = [];

    const tableElements = doc.querySelectorAll("table");

    tableElements.forEach((table) => {
      const tableRows = table.querySelectorAll("tr");
      tableRows.forEach((row) => {
        const rowData = {};
        const tableCells = row.querySelectorAll("td");
        if (tableCells.length >= 2) {
          const key = tableCells[0].textContent.trim();
          const value = tableCells[1].textContent.trim();
          rowData[key] = value;
          extractedData.push(rowData);
        }
      });
    });

    return extractedData;
  }
  let extractedData = [];
  if (terminalFacts[3] && terminalFacts[3].details) {
    const detailsHTML = terminalFacts[3].details;
    extractedData = extractDataFromTerminalFactsThree(detailsHTML);
    // console.log(extractedData);
  } else {
    // console.log("terminalFacts[3].details is not available yet.");
  }

  return (
    <div id="ContainerServiceSection">
      {loading && <Loader />}
      <DiscoverHeader
        title={
          language === "en"
            ? "Container Terminal Services"
            : "خدمات محطة الحاويات"
        }
        img="/images/AboutBanner-min.jpg"
        current="Service / Container Services"
      />

      <div className="ServicesAllBoxSize ">
        <Box
          sx={{
            bgcolor: "background.paper",
            display: "flex",
            // marginBottom: "50px",
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
            },
            fontFamily: "Cairo"
          }}
        >
          <Tabs
            className="TabsMenuBox"
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              width: "15%",
              display: "flex",
              justifyContent: 'center',
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            {terminalFacts.map((item, index) => (
              <Tab
                key={index}
                label={item.contentTitle}
                {...a11yProps(index)}
              />
            ))}
            <Tab
              label={
                language === "en" ? "Container Statistics" : "إحصائيات الحاويات"
              }
              {...a11yProps(6)}
            />
          </Tabs>
          {terminalFacts.length > 0 && (
            <div className="PanelContainer">
              {/* Facts Section */}

              <TabPanel value={value} index={0} className="w-100 yardBackgroundImage">
                <header className="section-header">
                  <h3>{terminalFacts[0].contentTitle}</h3>
                </header>

                <div className="d-flex flex-wrap mb-4 p-5 container"
                  style={{
                    direction: language === 'en' ? 'ltr' : 'rtl',
                    textAlign: language === 'en' ? 'end' : 'start',
                  }}>
                  {factsDetails.map(
                    (item, index) =>
                      index % 2 === 0 && (
                        <div className="col-lg-4 p-2 col-12" key={index}>
                          <div className="cookieCard w-100">
                            <p
                              className={`cookieHeading cookieHeadingContainer w-100  text-${language === "en" ? "start" : "end"
                                }`}
                            >
                              {item}
                            </p>
                            <p
                              className={`cookieDescription w-100 text-${language === "en" ? "start" : "end"
                                }`}
                            >
                              {factsDetails[index + 1]}
                            </p>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </TabPanel>

              {/* Facts Section end */}

              {/* Quays Section */}
              <TabPanel value={value} index={1} className="w-100 yardBackgroundImage">
                <header className="section-header">
                  <h3>{terminalFacts[1].contentTitle}</h3>
                </header>
                <div className="d-flex flex-wrap mb-4 container" style={{
                  direction: language === 'en' ? 'ltr' : 'rtl',
                  textAlign: language === 'en' ? 'end' : 'start',
                }}>
                  {data.map((item, index) => (
                    <>
                      <div className="col-lg-4 p-2 col-12" key={index}>
                        <div className="cookieCard">
                          {/* <p className="cookieHeading cookieHeadingContainer"> */}
                          <p
                            className={`cookieHeading cookieHeadingContainer w-100  text-${language === "en" ? "start" : "end"
                              }`}
                          >
                            {Object.keys(item)[0]}
                          </p>
                          {/* <p className="cookieDescription"> */}
                          <p
                            className={`cookieDescription w-100 text-${language === "en" ? "start" : "end"
                              }`}
                          >
                            {Object.values(item)[0]}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </TabPanel>
              {/* Quays end */}

              {/* Yard Section */}
              <TabPanel value={value} index={2} className="w-100 yardBackgroundImage" >
                <header className="section-header">
                  <h3>{terminalFacts[2].contentTitle}</h3>
                </header>

                <div className="row d-flex justify-content-center align-items-center w-100" >
                  <div className="col-12 col-lg-6">
                    <Accordion defaultActiveKey="0" className="accordionPanel m-5">
                      {headers.map((item, index) => (
                        <Accordion.Item eventKey={index} key={index}>
                          {/* {language === "en"? (
                        <Accordion.Header className={`text-${
                          language === "en" ? "start" : "end"
                        }`}>{item}</Accordion.Header>
                      ):(
                        <Accordion.Header style={{ transform: "scaleX(-1)" }}>{item}</Accordion.Header>
                      )} */}
                          <Accordion.Header>
                            <div className={`${language === "en" ? "" : "w-100 text-end"}`}>{item}</div>
                          </Accordion.Header>
                          <Accordion.Body
                            style={{
                              direction: language === 'en' ? 'ltr' : 'rtl',
                              textAlign: "justify",
                              fontSize: "1rem",
                            }}
                          >
                            <div
                              dangerouslySetInnerHTML={sanitizeHTML(
                                contents[index]
                              )}
                            ></div>
                            {/* {contents[index]} */}
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="">
                      <PieChartCard />
                    </div>

                  </div>
                </div>
              </TabPanel>
              {/* Yard Section end */}

              {/* Equipment Section */}
              <TabPanel value={value} index={3} className="w-100 yardBackgroundImage">
                <header className="section-header">
                  <h3>{terminalFacts[3].contentTitle}</h3>
                </header>
                <div className="d-flex flex-wrap mb-4 container"
                  style={{
                    direction: language === 'en' ? 'ltr' : 'rtl',
                    textAlign: language === 'en' ? 'end' : 'start',
                  }}>
                  {extractedData.map((item, index) => (
                    <>
                      <div className="col-lg-4 p-2 col-12" key={index}>
                        <div className="cookieCard">
                          <p
                            className={`cookieHeading cookieHeadingContainer w-100 text-${language === "en" ? "start" : "end"
                              }`}
                          >
                            {Object.keys(item)[0]}
                          </p>
                          <p
                            className={`cookieDescription w-100 text-${language === "en" ? "start" : "end"
                              }`}
                          >
                            {Object.values(item)[0]}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </TabPanel>
              {/* Equipment Section end */}

              <TabPanel value={value} index={4} className="w-100 yardBackgroundImage">
                <header className="section-header">
                  <h3>
                    <div
                      dangerouslySetInnerHTML={sanitizeHTML(
                        terminalFacts[4].contentTitle
                      )}
                    ></div>
                  </h3>
                </header>
                <div className="m-5">
                  <div className="maintenanceCard w-100">
                    <div className="maintenanceContent">
                      {language === "en" ? (
                        <>
                          <p className="maintenanceHeading">
                            <div
                            className="d-flex align-content-end align-items-center justify-content-center text-right"
                              dangerouslySetInnerHTML={sanitizeHTML(
                                terminalFacts[4].contentTitle
                              )}
                            ></div>
                          </p>
                          <p className="maintenancePara">
                            <div
                              dangerouslySetInnerHTML={sanitizeHTML(
                                terminalFacts[4].details
                              )}
                            ></div>
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="maintenancePara">
                            <div
                              dangerouslySetInnerHTML={sanitizeHTML(
                                terminalFacts[4].details
                              )}
                            ></div>
                          </p>
                          <p
                            className={`maintenanceHeading text-${language === "en" ? "start" : "end"
                              }`}
                          >
                            <div
                              className="d-flex align-content-end align-items-center justify-content-center text-right"
                              dangerouslySetInnerHTML={sanitizeHTML(
                                terminalFacts[4].contentTitle
                              )}
                            ></div>
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel value={value} index={5} className="">
                <header className="section-header">
                  <h3>{terminalFacts[5]?.contentTitle}</h3>
                </header>

                <div className="table-responsive ">
                  <table className="table table-sm table-hover ">
                    {" "}
                    <tbody>
                      <tr>
                        <td>Year</td>
                        <td></td>
                        <td></td>
                        <td>Import</td>
                        <td></td>
                        <td>TEU</td>
                        <td></td>
                        <td></td>
                        <td>Export</td>
                        <td></td>
                        <td>TEU</td>
                        <td>Total</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>F</td>
                        <td></td>
                        <td>E</td>
                        <td></td>
                        <td></td>
                        <td>F</td>
                        <td></td>
                        <td>E</td>
                        <td></td>
                        <td>TE</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>20</td>
                        <td>40</td>
                        <td>20</td>
                        <td>40</td>
                        <td></td>
                        <td>20</td>
                        <td>40</td>
                        <td>20</td>
                        <td>40</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table  table-hover">
                    <tbody>
                      {filteredTabDet.map((item, index) => (
                        <>
                          <tr>
                            <td nowrap="">{item.col1}</td>
                            <td>{item.col2}</td>
                            <td>{item.col3}</td>
                            <td>{item.col4}</td>
                            <td>{item.col5}</td>
                            <td>{item.col6}</td>
                            <td>{item.col7}</td>
                            <td>{item.col8}</td>
                            <td>{item.col9}</td>
                            <td>{item.col10}</td>
                            <td>{item.col11}</td>
                            <td>{item.col12}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabPanel>

              <TabPanel value={value} index={6} className="px-5 w-100 yardBackgroundImage">
                <header className="section-header">
                  <h3>
                    {language === "en"
                      ? "CONTAINER STATISTICS"
                      : "إحصائيات الحاويات"}
                  </h3>
                </header>
                <ContainerChart />
              </TabPanel>
            </div>
          )}
        </Box>
      </div>
    </div>
  );
};

export default ContainerService;
