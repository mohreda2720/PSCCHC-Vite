// import React, { useEffect, useState } from "react";
// import "./BerthStatus.css";
// import { GiShipBow } from "react-icons/gi";
// import { LuShip } from "react-icons/lu";
// import { GiCargoShip } from "react-icons/gi";
// import DiscoverHeader from "../DiscoverMorePage/DiscoverHeader";
// import axios from "axios";
// import { useLanguage } from "../LanguageContext";

// const BerthStatus = () => {
//   const {language} = useLanguage();
//   const [berthData, setBerthData] = useState([]);
//   const [vesselProgress, setVesselProgress] = useState(0);

//   useEffect(() => {
//     const fetchBerthData = async () => {
//       try {
//         const response = await axios.get("http://10.0.1.118/pup/api/berth", {
//           headers: {
//             Accept: "*/*",
//             // "Content-Type": "application/json",
//           },
//         });
//         console.log(response.data)
//         setBerthData(response.data);
//       } catch (error) {
//         console.error("Error fetching berth data:", error);
//       }
//     };
//     fetchBerthData();
//   }, []);


//   useEffect(() => {
//     if (berthData.length > 0) {
//       // const progress = Math.floor(
//       //   (berthData[0].act_ds / (berthData[0].act_ds + berthData[0].rem_ds)) *
//       //     100
//       // );
//       const Progress = Math.floor(((berthData[0].acT_RSTW+berthData[0].act_ds+berthData[0].act_ld)/(berthData[0].tot_ld+berthData[0].toT_RSTW+(berthData[0].act_ds + berthData[0].rem_ds)))*100);
//       console.log("first item",berthData[0])
//       setVesselProgress(Progress);
//     }
//   }, [berthData]);

//   return (
//     <>
//       <DiscoverHeader
//         title={language === 'en' ? "Berth Situation" : "موقف الرصيف"}
//         img=".\images\container.jpg"
//         current="Berth Situation"
//       />

//       <div className="container">
//         {language === "en" ? (<>
//           <h1 className="my-5 BerthTitle display-4 d-flex align-items-center justify-content-start">
//           <span className="me-4">
//             <GiCargoShip size={70} />
//           </span>
//           Berth Status
//         </h1>
//         </>):(<>
//           <h1 className="my-5 BerthTitle display-4 d-flex align-items-center justify-content-end">
//           حالة الرصيف
//           <span className="ms-4">
//             <GiCargoShip size={70} />
//           </span>
//         </h1>
//         </>)}
//       </div>
//       <div className="table-responsive p-3">
//         <table className="table table-hover">
//           <thead className="table-dark theadBerthStatus">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">VESSEL</th>
//               <th scope="col">CODE</th>
//               <th scope="col">VOYAGE</th>
//               <th scope="col">B1</th>
//               <th scope="col">B2</th>
//               <th scope="col">ATA</th>
//               <th scope="col">START</th>
//               <th scope="col">Cranes</th>
//               <th scope="col">Tot-DS</th>
//               <th scope="col">Tot-LD</th>
//               <th scope="col">Tot-RS</th>
//               <th scope="col">AC-DS</th>
//               <th scope="col">AC-LD</th>
//               <th scope="col">AC-RS</th>
//               <th scope="col">Rem-DS</th>
//               <th scope="col">Rem-LD</th>
//               <th scope="col">Rem-RS</th>
//             </tr>
//           </thead>
//           <tbody className="tbodyBerthStatus">
//             {berthData.map((berthData, index) => (
//               <tr key={index}>
//                 <td
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <div
//                     className="circleProgress-bar"
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       borderRadius: "50%",
//                       background: `
//                                           radial-gradient(closest-side, white 79%, transparent 80% 100%),
//                                           conic-gradient(#292929 ${Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}%, #cce8ff 0)`,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       position: "relative",
//                     }}
//                   >
//                     <progress
//                       value={Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}
//                       min="0"
//                       max="100"
//                       style={{ visibility: "hidden", height: 0, width: 0 }}
//                     >
//                       {Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}
//                     </progress>
//                     <LuShip
//                       size={24}
//                       color="black"
//                       style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                       }}
//                     />
//                   </div>
//                 </td>
//                 <td>
//                   <div className="col">
//                     {berthData.vessel}
//                     <div
//                       className="progress"
//                       role="progressbar"
//                       aria-label="Animated striped example"
//                       aria-valuenow={Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     >
//                       <div
//                         className="progress-bar progress-bar-striped progress-bar-animated"
//                         style={{ width: `${Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}%` }}
//                       >
//                         {Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}%
//                       </div>
//                     </div>
//                   </div>
//                 </td>
//                 {/* vessel code */}
//                 <td>{berthData.code}</td>
//                 {/* voyage number */}
//                 <td>{berthData.voyage}</td>
//                 {/* b1 */}
//                 <td>{berthData.b1}</td>
//                 {/* b2 */}
//                 <td>{berthData.b2}</td>
//                 {/* ata */}
//                 <td>{berthData.ata} </td>
//                 {/* start */}
//                 <td>{berthData.start_ops}</td>
//                 {/* cranes */}
//                 <td>{berthData.gantry}</td>
//                 {/* TOT-ds */}
//                 <td>{berthData.toT_ds}</td>
//                 {/* TOT-ld */}
//                 <td>{berthData.tot_ld}</td>
//                 {/* TOT-Rs */}
//                 <td>{berthData.toT_RSTW}</td>
//                 {/* ACT-ds */}
//                 <td>{berthData.act_ds}</td>
//                 {/* ACT-ld */}
//                 <td>{berthData.act_ld}</td>
//                 {/* ACt-rs */}
//                 <td>{berthData.acT_RSTW}</td>
//                 {/* rem-ds */}
//                 <td>{berthData.rem_ds}</td>
//                 {/* rem-ld */}
//                 <td>{berthData.reM_ld}</td>
//                 {/* rem-rs */}
//                 <td>{berthData.reM_RSTW}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default BerthStatus;


import React, { useEffect, useState } from "react";
import "./BerthStatus.css";
import { GiShipBow } from "react-icons/gi";
import { LuShip } from "react-icons/lu";
import { GiCargoShip } from "react-icons/gi";
import DiscoverHeader from "../DiscoverMorePage/DiscoverHeader";
import axios from "axios";
import { useLanguage } from "../LanguageContext";

const BerthStatus = () => {
  const { language } = useLanguage();
  const [berthData, setBerthData] = useState([]);
  const [vesselProgress, setVesselProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBerthData = async () => {
      const startTime = Date.now();
      try {
        const response = await fetch("http://10.0.1.118/pup/api/berth", {
          headers: {
            Accept: "*/*",
          },
        });
        const data = await response.json();
        const endTime = Date.now();
        console.log("Response Time:", endTime - startTime, "ms");
        setBerthData(data);
      } catch (error) {
        console.error("Error fetching berth data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBerthData();
  }, []);

  useEffect(() => {
    if (berthData.length > 0) {
      const Progress = Math.floor(
        ((berthData[0].acT_RSTW + berthData[0].act_ds + berthData[0].act_ld) /
          (berthData[0].tot_ld + berthData[0].toT_RSTW + (berthData[0].act_ds + berthData[0].rem_ds))) *
        100
      );
      setVesselProgress(Progress);
    }
  }, [berthData]);

  return (
    <>
      <DiscoverHeader
        title={language === 'en' ? "Berth Situation" : "موقف الرصيف"}
        img=".\images\container.jpg"
        current="Berth Situation"
      />

      <div className="container">
        {language === "en" ? (
          <h1 className="my-5 BerthTitle display-4 d-flex align-items-center justify-content-start">
            <span className="me-4">
              <GiCargoShip size={70} />
            </span>
            Berth Status
          </h1>
        ) : (
          <h1 className="my-5 BerthTitle display-4 d-flex align-items-center justify-content-end">
            حالة الرصيف
            <span className="ms-4">
              <GiCargoShip size={70} />
            </span>
          </h1>
        )}
      </div>

      <div className="table-responsive p-3">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : berthData.length === 0 ? (
          <div className="text-center" style={{ height: "200px" }}>
            <p>{language === 'en' ? "No Vessels are Berthed" : "لايوجد سفن متراكية"}</p>
          </div>
        ) : (
          <table className="table table-hover">
            <thead className="table-dark theadBerthStatus">
              <tr>
                <th scope="col">#</th>
                <th scope="col">VESSEL</th>
                <th scope="col">CODE</th>
                <th scope="col">VOYAGE</th>
                <th scope="col">B1</th>
                <th scope="col">B2</th>
                <th scope="col">ATA</th>
                <th scope="col">START</th>
                <th scope="col">Cranes</th>
                <th scope="col">Tot-DS</th>
                <th scope="col">Tot-LD</th>
                <th scope="col">Tot-RS</th>
                <th scope="col">AC-DS</th>
                <th scope="col">AC-LD</th>
                <th scope="col">AC-RS</th>
                <th scope="col">Rem-DS</th>
                <th scope="col">Rem-LD</th>
                <th scope="col">Rem-RS</th>
              </tr>
            </thead>
            <tbody className="tbodyBerthStatus">
              {berthData.map((berthData, index) => (
                <tr key={index}>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="circleProgress-bar"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: `
                          radial-gradient(closest-side, white 79%, transparent 80% 100%),
                          conic-gradient(#292929 ${Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}%, #cce8ff 0)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <progress
                        value={Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}
                        min="0"
                        max="100"
                        style={{ visibility: "hidden", height: 0, width: 0 }}
                      >
                        {Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}
                      </progress>
                      <LuShip
                        size={24}
                        color="black"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="col">
                      {berthData.vessel}
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Animated striped example"
                        aria-valuenow={Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          style={{ width: `${Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}%` }}
                        >
                          {Math.floor(((berthData.acT_RSTW + berthData.act_ds + berthData.act_ld) / (berthData.tot_ld + berthData.toT_RSTW + (berthData.act_ds + berthData.rem_ds))) * 100)}%
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{berthData.code}</td>
                  <td>{berthData.voyage}</td>
                  <td>{berthData.b1}</td>
                  <td>{berthData.b2}</td>
                  <td>{berthData.ata} </td>
                  <td>{berthData.start_ops}</td>
                  <td>{berthData.gantry}</td>
                  <td>{berthData.toT_ds}</td>
                  <td>{berthData.tot_ld}</td>
                  <td>{berthData.toT_RSTW}</td>
                  <td>{berthData.act_ds}</td>
                  <td>{berthData.act_ld}</td>
                  <td>{berthData.acT_RSTW}</td>
                  <td>{berthData.rem_ds}</td>
                  <td>{berthData.reM_ld}</td>
                  <td>{berthData.reM_RSTW}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default BerthStatus;
