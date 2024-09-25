import HeaderTabsCard from "../../Components/Tabs/Tabs";
import "./Banner.css";
import { useLanguage } from "../../Components/LanguageContext";
import DOMPurify from "dompurify";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

const Banner = ({ banner }) => {
  const { language } = useLanguage();

  return (
    <>
      <div
        className="Hero"
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${banner[3].image2})`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://enterprise.press/wp-content/uploads/2022/07/Port-Said-Port-1600.jpg")`,
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://i.postimg.cc/vZDJ3F3g/pixelcut-export2-1.jpg")`,
        }}
      >
        
        <div className="container content-inside">
     
          <div
            className={`row d-flex justify-content-between align-items-center text-white
           ${language === "ar" ? "flex-reverse" : ""}
           `}
          >
              
            <div className="col-lg-5 col-md-12 align-items-center ">
              <h1
                className={`my-2 mb-5 fw-bolder masked-title 
                ${language === "ar" ? "text-end" : ""}`}
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                {banner[3].contentTitle}
              </h1>

              <p className=" ">
                {/* This year we celebrate the 40th anniversary of PSCCHC since its
                operation in 31/7/1984. <br /> On this occasion, we would like to take
                this chance to announce our greatest gratitude and thanks to all
                our partners for your business and relentless support over the
                past several years.And we would like to note that we serve all
                port operations dealing with container and conventional cargo
                and we also provide a wide range of port logistical services
                that minimizes time and effort to customers in the economic zone
                of Suez Canal axis. <br /> <br /> We are grateful to all & once again, thank
                you. */}
                {/* {banner[3].details} */}

                <div
                  dangerouslySetInnerHTML={sanitizeHTML(banner[3].details)}
                />
              </p>
            </div>
            <div className="col-lg-5 col-md-12 align-items-center">
              <HeaderTabsCard />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid facts py-5 pt-lg-0 d-flex flex-wrap">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="15s">
              <div
                className=" shadow d-flex  align-items-center justify-content-center p-4"
                style={{ height: "150px", backgroundColor: "#004d7a" }}
              >
                <div
                  className="bg-white d-flex align-items-center justify-content-center rounded"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-users "></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">visitors</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div
                className="bg-light shadow d-flex align-items-center justify-content-center p-4"
                style={{ height: "150px" }}
              >
                <div
                  className="bg-dark d-flex align-items-center justify-content-center rounded mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-check text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className=" mb-0" style={{ color: "#00bf72" }}>
                    containers
                  </h5>
                  <h1 className="mb-0" data-toggle="counter-up">
                    12345
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div
                className=" shadow d-flex align-items-center justify-content-center p-4"
                style={{ height: "150px", backgroundColor: "#004d7a" }}
              >
                <div
                  className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-award text-primary"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">ships</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">
                    12345
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Banner;
