/* eslint-disable no-unused-vars */
// import { useEffect } from "react";
// import { fetchCertificate } from "../Store/Reducers/CertificatesReducer";
// import { useDispatch, useSelector } from "react-redux";
// import { useLanguage } from "../LanguageContext";

// const OurCertificates = () => {
//   const dispatch = useDispatch();
//   const { language } = useLanguage();
//   const { Certificate, loading, error } = useSelector((state) => state.Certificate);

//   useEffect(() => {
//     dispatch(fetchCertificate());
//   }, [dispatch]);

//   const filteredCertificates = Certificate.filter(
//     (item) => item.pageId.toString().includes("11006") && item.pageLang === language
//   );

//   if (filteredCertificates.length === 0) {
//     return <div>No certificates found.</div>;
//   }

//   const certificatesList = JSON.parse(filteredCertificates[0].details);

//   return (
//     <section className="certificates-section" id="Certificates">
//       <div className="container certificates-container">
//         <header className="section-header my-5">
//           <h3>{filteredCertificates[0].htmTitle}</h3>
//         </header>
//         <div className="row certificates-row d-flex justify-content-around">
//           {certificatesList.map((cert, index) => (
//             <div key={index} className="col-md-3 col-sm-3 col-xs-12 certificate-item">
//               <img className="img-fluid" src={cert} alt={`Certificate ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurCertificates;
import { useEffect, useMemo } from "react";
import { fetchCertificate } from "../Store/Reducers/CertificatesReducer";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../LanguageContext";

const OurCertificates = () => {
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const { Certificate, loading, error } = useSelector((state) => state.Certificate);

  // Dispatch fetchCertificate action
  useEffect(() => {
    if (Certificate.length === 0) {
      dispatch(fetchCertificate());
    }
  }, [dispatch, Certificate]);

  // Memoize filtered certificates
  const filteredCertificates = useMemo(() => {
    return Certificate.filter(
      (item) => item.pageId.toString().includes("11006") && item.pageLang === language
    );
  }, [Certificate, language]);

  // If there are filtered certificates, parse them, otherwise return an empty array
  const certificatesList = useMemo(() => {
    if (filteredCertificates.length > 0) {
      return JSON.parse(filteredCertificates[0].details);
    }
    return [];
  }, [filteredCertificates]);

  // Handle loading, error, or no certificate scenarios
  if (loading) return <div>Loading certificates...</div>;
  if (error) return <div>Error loading certificates: {error}</div>;
  if (filteredCertificates.length === 0) return <div>No certificates found.</div>;

  return (
    <section className="certificates-section" id="Certificates">
      <div className="container certificates-container">
        <header className="section-header my-5">
          <h3>{filteredCertificates[0].htmTitle}</h3>
        </header>
        <div className="row certificates-row d-flex justify-content-around">
          {certificatesList.map((cert, index) => (
            <div
              key={index}
              className="col-md-3 col-sm-3 col-xs-12 certificate-item"
            >
              <img
                className="img-fluid"
                src={cert}
                alt={`Certificate ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCertificates;
