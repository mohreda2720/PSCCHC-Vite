import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Tabs.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext"

const HeaderTabsCard = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const HandleContainerTracking = (e) => {
    e.preventDefault();
    // navigate("berthstatus");
    console.log("HandleContainerTracking");
  };
  const HandleBookingTrace = (e) => {
    e.preventDefault();
    // navigate("berthstatus");
    console.log("HandleBookingTrace");
  };
  const HandleBolTrace = (e) => {
    e.preventDefault();
    // navigate("berthstatus");
    console.log("HandleBolTrace");
  };

  return (
    <div className="shadow p-3  glassyblurbg p-5 m-3">
      <div>
        <Tabs
          defaultActiveKey="Berth"
          id="uncontrolled-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="Berth"
            title={language === "en" ? "Berth Status" : "حالة الرصيف"}
            tabClassName="myClass">
            <div className="p-2 pt-3 centeredButton">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="BerthButton"
                id="UniqueButton"
              >
                <Link
                  to={"/berthstatus"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <span className="BerthText">{language === "en" ? "Show Berth Status" : "عرض موقف الرصيف"}</span>
                </Link>
              </motion.button>
            </div>
          </Tab>
          <Tab
            eventKey="Container"
            title={language === "en" ? "Container Tracking" : "البحث عن الحاوية"}
            tabClassName="myClass"
          >
            <form onSubmit={HandleContainerTracking}>
              <div className="input-group mb-3 p-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a Container ID"
                  aria-label="Container"
                  aria-describedby="Container Tracking"
                />
                <span className="input-group-text IconButton" id="basic-addon1" onClick={HandleContainerTracking}>
                  <i style={{ fontSize: "20px" }} className="fas fa-search"></i>
                </span>
              </div>
            </form>

          </Tab>
          <Tab eventKey="Booking"
            title={language === "en" ? "Booking Trace" : " خطاب تخصيص"}
            tabClassName="myClass">
            <form onSubmit={HandleBookingTrace}>
              <div className="input-group mb-3 p-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter ID"
                  aria-label="Booking"
                  aria-describedby="Booking Trace"
                />
                <span className="input-group-text IconButton" id="basic-addon2" onClick={HandleBookingTrace}>
                  <i style={{ fontSize: "20px" }} className="fas fa-search"></i>
                </span>
              </div>
            </form>
          </Tab>
          <Tab eventKey="Bol"
            title={language === "en" ? "BOL Trace" : " البحث عن بوليصة"}
            tabClassName="myClass">
            <form onSubmit={HandleBolTrace}>
              <div className="input-group mb-3 p-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter ID"
                  aria-label="BOL"
                  aria-describedby="BOL Trace"
                />
                <span className="input-group-text IconButton" id="basic-addon3" onClick={HandleBolTrace}>
                  <i style={{ fontSize: "20px" }} className="fas fa-search"></i>
                </span>
              </div>
            </form>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default HeaderTabsCard;
