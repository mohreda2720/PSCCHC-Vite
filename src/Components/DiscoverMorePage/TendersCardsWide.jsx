import { useState, useEffect } from "react";
import TendersTop from "./TendersCardsTop";
import { useLanguage } from "../LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchTenderD } from "../Store/Reducers/TenderDReducer";
import DOMPurify from "dompurify";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};
const Tenders = () => {
  // Fetch data
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTenderD());
  }, [dispatch]);

  const { TenderD, loading, error } = useSelector((state) => state.TenderD);
  const [filteredTenderD, setfilteredTenderM] = useState([]);
  const { language } = useLanguage();
  const [tenderSequence, setTenderSequence] = useState(0);

  useEffect(() => {
    if (TenderD.length > 0) {
      // console.log(TenderD);

      const filteredTenderDByLanguage =
        language === "en"
          ? TenderD.filter(
              (item) => item.pLang === "en" && item.tenderSeq === tenderSequence
            )
          : TenderD.filter(
              (item) => item.pLang === "ar" && item.tenderSeq === tenderSequence
            );
      // console.log(filteredTenderDByLanguage);

      if (filteredTenderDByLanguage) {
        setfilteredTenderM(filteredTenderDByLanguage);

        // console.log(filteredTenderD);
      }
    }
  }, [TenderD, language, tenderSequence]);
  // End Fetch data


  const filterTendersBySeq = (tenderSeq) => {
    // console.log(tenderSeq);
    setTenderSequence(tenderSeq);
  };
  const handleReceiveTenderSeq = (tenderSeq) => {
    setTenderSequence(tenderSeq);
    // console.log("Received tenderSeq in parent:", tenderSeq);
  };

  const titleByLanng = [
    {
      en: "TENDERS",
      ar: "المناقصات",
    },
  ];

  return (
    <>
      <header className="section-header my-5">
        <h3>{language === "en" ? titleByLanng[0].en : titleByLanng[0].ar}</h3>
      </header>
      <TendersTop filterTendersBySeq={filterTendersBySeq} sendTenderSeqToParent={handleReceiveTenderSeq} />
      <div className="container">
        <div className="row">
          {filteredTenderD.map((tender, index) => (
            <div className="discover-tenders-card my-2" key={index}>
              <div className="row discover-tenders-content">
                <div className="col-md-8 col-12 discover-tenders-para">
                  <div
                    dangerouslySetInnerHTML={sanitizeHTML(tender.tenderItem)}
                  />
                </div>

                <div className="col-md-3 col-12 discover-tenders-heading">
                  <h3>Deadline:</h3>
                  <h5>
                    {tender.deadlineOpen
                      ? tender.deadlineOpen.slice(0, 10)
                      : ""}
                  </h5>
                  <h3 className="mt-3">Tender_No:</h3>
                  <h5> {tender.tenderNo}</h5>
                  <h4 className="fw-bold fs-2 mt-3">Price: {tender.price}</h4>
                </div>
              </div>
            </div>

            // <div className="discover-tenders-card my-2" key={tender.id}>
            //   <div className="row discover-tenders-content">
            //     <div className="col-md-3 col-12 discover-tenders-heading">
            //       <h3>{tender.name}</h3>
            //       <h5>{tender.description}</h5>
            //       <h5>{tender.envlopeSystem}</h5>
            //       <button className="tender-book-button" type="button">
            //         <span className="tender-book-button__text">
            //           download Book
            //         </span>
            //         <span className="tender-book-button__icon">
            //           <svg
            //             xmlns="http://www.w3.org/2000/svg"
            //             viewBox="0 0 35 35"
            //             id="bdd05811-e15d-428c-bb53-8661459f9307"
            //             data-name="Layer 2"
            //             className="tender-book-svg"
            //           >
            //             <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
            //             <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
            //             <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
            //           </svg>
            //         </span>
            //       </button>
            //     </div>
            //     <div className="col-md-5 col-12 discover-tenders-para">
            //       <p>
            //         The date of the technical envelope opening session is:
            //         <br />
            //         {tender.date}
            //       </p>
            //       <p>
            //         Tender Book Value :<br />
            //         {tender.bookValue}
            //       </p>
            //       <h4>Price: {tender.price}</h4>
            //     </div>
            //     <div className="col-md-3 col-12 discover-tenders-heading">
            //       <h3>Deadline:</h3>
            //       <h5>{tender.deadline}</h5>
            //       <h3>Tender_No:</h3>
            //       <h5> {tender.tenderNo}</h5>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tenders;
