// MaterialUI imports
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

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

const Technology = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="container my-5">
        <div className="ServicesAllBoxSize">
          <Box
            sx={{
              bgcolor: "background.paper",
              display: "flex",
              marginBottom: "50px",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
              },
            }}
          >
            <Tabs
              className="TabsMenuBox"
              orientation="vertical"
              // variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider", display: "flex" }}
            >
              <Tab label="Infrastructure" {...a11yProps(0)} />
              <Tab label="Topology" {...a11yProps(1)} />
              <Tab label="Partners Integration" {...a11yProps(2)} />
              <Tab label="Scope" {...a11yProps(3)} />
            </Tabs>
            <div className="PanelContainer">
              <TabPanel value={value} index={0}>
                <div className=" px-5 TopPanelItem">
                  <header className="section-header mb-5">
                    <h3>Infrastructure</h3>
                  </header>
                  <p>
                    Inspiring from the fact that information systems is a base
                    of performing logistics operations successfully.
                  </p>
                  <img
                    src="https://pscchc.com/img/IT/it1.jpg"
                    alt=""
                    className="mb-4 TopPanelItemImage"
                  />
                  <p>
                    In PSCCHC we decided that IT tools not just tools to finish
                    work however it should be a good chance to communicate with
                    our partners &amp; productivity enhancement.
                    <br />
                    There are more than 16 connected site distributed across
                    port said port.
                  </p>
                </div>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <div className=" px-5 TopPanelItem">
                  <header className="section-header mb-5">
                    <h3>Topology</h3>
                  </header>
                  <p>
                    In our network we used different ways of communication such
                    as: LAN – WIFI-fiber cables-radio waves – internet back
                    bone.
                  </p>
                  <img
                    src="https://pscchc.com/img/IT/it2.jpg"
                    alt=""
                    className="mb-4 TopPanelItemImage"
                  />
                  <p>Architecture : Server/ client + web service</p>
                  <p>Database: Oracle9i</p>
                  <p>
                    Development tools: Oracle Developer 6 , Visual Basic 6 ,
                    Oracle Developer 10G, Visual Basic.net 10 + ASP.net
                  </p>
                  <p>OS : Windows Platform</p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className=" px-5 TopPanelItem">
                  <header className="section-header mb-5">
                    <h3>Partners integration </h3>
                  </header>
                  <p>
                    <>
                      1-EDI messages
                      <br />
                      Our company development team have developed applications
                      for dealing with many kinds of EDI messages.
                    </>
                  </p>
                  <p>
                    <>
                      2-User website account:
                      <br />
                      We provide login to our partners so they can use it to Get
                      on time set of reports & Send data like booking letters ,
                      also partners could download these data at various formats
                      (html, xls, txt,,, ).
                    </>
                  </p>
                  <img
                    src="https://pscchc.com/img/IT/it4.jpg"
                    alt=""
                    className="mb-4 TopPanelItemImagePartners"
                  />
                  <img
                    src="https://pscchc.com/img/IT/it5.jpg"
                    alt=""
                    className="mb-4 TopPanelItemImagePartners"
                  />
                </div>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <div className=" px-5 TopPanelItem">
                  <header className="section-header mb-5">
                    <h3>Scope </h3>
                  </header>
                  <p>
                    <>
                      •Billing full integration :
                      <br />
                      Completing the procedures for linking the Billing system
                      to the TOS system to reach 100% full integration Make
                      Integration With MTS In Order To Complete The Procedures
                      Of Local Container System .
                    </>
                  </p>
                  <p>
                    <>
                      •one window system
                      <br />
                      Make a full integration with the MTS company to decrease
                      the documentation Cycle between our company and customs to
                      reach one window system , This project was implemented a
                      year ago.
                    </>
                  </p>
                  <p>
                    <>
                      •Wi-Fi , 4G , Android
                      <br />
                      Design Android Application on handheld devices Based On
                      Wi-Fi , 4G Network
                    </>
                  </p>
                  <img
                    src="https://pscchc.com/img/IT/it6.jpg"
                    alt=""
                    className="mb-4 TopPanelItemImagePartners"
                  />
                </div>
              </TabPanel>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Technology;
