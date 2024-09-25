// /* eslint-disable no-unused-vars */
// import "./Navbar.css";
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import SideMenu from "../SideMenu/SideMenu";
// import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchNavbar } from "../Store/Reducers/NavBarReducer";
// import { Nav } from "react-bootstrap";
// import { useLanguage } from "../LanguageContext";
// import Loader from "../Loader/Loader";

// const CustomNavbar = () => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hoveredDropdown, setHoveredDropdown] = useState(null);
//   const [showDetailedNavBar, setShowDetailedNavBar] = useState(true);
//   const dispatch = useDispatch();
//   const { NavArray, loading, error } = useSelector((state) => state.NavArray);
//   const [NavLevelZero, setNavLevelZero] = useState([]);
//   const { language } = useLanguage();

//   const isLoggedIn = sessionStorage.getItem("isLoggedIn");
//   const userId = sessionStorage.getItem("userId");


//   const handleClick = () => {
//     navigate("/login");
//   };
//   const handleClick2 = () => {
//     navigate("/contactus");
//   };

//   const handleClickMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   const handleMenuClose = () => {
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     dispatch(fetchNavbar());
//   }, [dispatch]);

//   useEffect(() => {
//     if (NavArray.length > 0) {
//       const filteredLevelZero = NavArray.slice(1)
//         .filter((item) => item.menuLevel === 0)
//         .sort((a, b) => {
//           // Assuming menu_ref is a string or number
//           return a.menuCode - b.menuCode; // Change to a.menu_ref.localeCompare(b.menu_ref) for string comparison
//         });
//       setNavLevelZero(filteredLevelZero);
//     }
//   }, [NavArray]);
//   console.log(NavLevelZero);

//   const uniqueMenuRefs = Array.from(
//     new Set(NavArray.map((item) => item.menuRef))
//   );
//   const menuRef = uniqueMenuRefs
//     .slice(1)
//     .filter((ref) => ref !== "0" && ref !== null);

//   const groupedArray = menuRef.map((menuRef) => {
//     return NavArray.filter(
//       (item) => item.menuRef === menuRef && item.menuLevel === 1
//     );
//   });

//   const handleReports =  () => {
//     navigate("/login/reports")
//   }

//   const handleLogout = () => {
//     sessionStorage.removeItem("userId");
//     sessionStorage.removeItem("isLoggedIn");
//     navigate("/login")
//   }
//   return (
//     <>
//       {loading && <Loader />}
//       <div className="NavbarStyle">
//         {/* <Topbar /> */}
//         <Navbar collapseOnSelect expand="xl" variant="dark">
//           <Container>
//             <Link to="/" className="NavBarName">
//               <Navbar.Brand className="d-flex justify-content-center align-items-center">
//                 <img
//                   // src="/images/mainLogoBlue.png"
//                   src="/images/logo.png"
//                   alt="logo"
//                   width="50px"
//                   height="auto"
//                   className="mx-2"
//                 />
//                 <section>
//                   <div className="contentt">
//                     <span className="fs-2 fw-bold">PSCCHC</span>
//                     {/* <span className="fw-bold fs-2">PSCCHC</span> */}
//                   </div>
//                 </section>
//               </Navbar.Brand>
//             </Link>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav ">
//               <Nav className="ms-auto me-auto  gap-3">
//                 {NavLevelZero.map((item, index) => (
//                   <NavDropdown
//                     title={language === "en" ? item.menuNmEn : item.menuNmAr}
//                     key={index}
//                     id={item.menuTitle}
//                     show={hoveredDropdown === index}
//                     onMouseEnter={() => setHoveredDropdown(index)}
//                     onMouseLeave={() => setHoveredDropdown(null)}
//                   >
//                     {groupedArray[index].map((item, index1) => (
//                       <NavDropdown.Item
//                         key={index1}
//                       // bsPrefix="NavDropDownItems"
//                       >
//                         <Link to={item.route}>
//                           <div className="d-flex align-items-center ">
//                             <div className="me-3 ">
//                               <i className={`${item.menuIcone} d-flex align-items-center justify-content-center`}></i>
//                             </div>

//                             <div className="" >
//                               <span className="" style={{ color: "black" }}>
//                                 {language === "en" ? item.menuNmEn : item.menuNmAr}
//                               </span>
//                               <div id="dropdown-item-d" className="dropdown-item-description" style={{ overflow: 'hidden', overflowWrap: "break-word", textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "rgb(124, 124, 124)" }}>
//                                 {language === "en" ? item.menuTitel2 : item.menuTitle2Ar}
//                                 {/* Lorem ipsum dolor sit amet. */}
//                               </div>
//                             </div>
//                           </div>
//                         </Link>
//                       </NavDropdown.Item>
//                     ))}
//                     {/* <NavDropdown.Divider /> */}
//                   </NavDropdown>
//                 ))}
//               </Nav>
//               <Nav>
//                 <div className="col d-flex justify-content-center align-items-center">
//                   <LanguageSwitcher />
//                   {/* <div className="btn navbar-btn">
//                     <i className="fas fa-search"></i>
//                   </div> */}
//                   {isLoggedIn ? (<NavDropdown
//                     title={`Hello, ${userId}`}
//                     id="basic-nav-dropdown"
//                     align="end"
//                   >
//                     <NavDropdown.Item onClick={handleReports}>
//                       Reports
//                     </NavDropdown.Item>
//                     <NavDropdown.Item onClick={handleLogout}>
//                       Logout
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                   )
//                     :
//                     (
//                       <div className="btn navbar-btn" onClick={handleClick}>
//                         <i className="fas fa-user"></i>
//                       </div>
//                     )}





//                   <div className="btn navbar-btn" onClick={handleClick2}>
//                     <i className="fas fa-address-card"></i>
//                   </div>
//                   {/* <div className="btn navbar-btn" onClick={handleClickMenu}>
//                     <i className="fas fa-bars"></i>
//                   </div> */}
//                 </div>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//         {/* {showDetailedNavBar && <DetailedNavBar handleItemClick={handleItemClick} />} */}
//       </div>
//       <SideMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
//     </>
//   );
// };

// export default CustomNavbar;

/* eslint-disable no-unused-vars */
import "./Navbar.css";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Loader from "../Loader/Loader";
import SideMenu from "../SideMenu/SideMenu";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { fetchNavbar } from "../Store/Reducers/NavBarReducer";
import { useLanguage } from "../LanguageContext";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { language } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [showDetailedNavBar, setShowDetailedNavBar] = useState(true);
  const [NavLevelZero, setNavLevelZero] = useState([]);

  const { NavArray, loading, error } = useSelector(
    useMemo(() => (state) => state.NavArray, [])
  );
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const userId = sessionStorage.getItem("userId");

  const handleClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleClick2 = useCallback(() => {
    navigate("/contactus");
  }, [navigate]);

  const handleReports = useCallback(() => {
    navigate("/login/reports");
  }, [navigate]);

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("isLoggedIn");
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    dispatch(fetchNavbar());
  }, [dispatch]);

  useEffect(() => {
    if (NavArray.length > 0) {
      const filteredLevelZero = NavArray.slice(1)
        .filter((item) => item.menuLevel === 0)
        .sort((a, b) => a.menuCode - b.menuCode);
      setNavLevelZero(filteredLevelZero);
    }
  }, [NavArray]);

  const uniqueMenuRefs = Array.from(new Set(NavArray.map((item) => item.menuRef)));
  const menuRef = uniqueMenuRefs
    .slice(1)
    .filter((ref) => ref !== "0" && ref !== null);

  const groupedArray = menuRef.map((menuRef) => {
    return NavArray.filter(
      (item) => item.menuRef === menuRef && item.menuLevel === 1
    );
  });

  return (
    <>
      {loading && <Loader />}
      <div className="NavbarStyle">
        <Navbar collapseOnSelect expand="xl" variant="dark">
          <Container>
            <Link to="/" className="NavBarName">
              <Navbar.Brand className="d-flex justify-content-center align-items-center">
                <img src="/images/logo.png" alt="logo" width="50px" height="auto" className="mx-2" />
                <section>
                  <div className="contentt">
                    <span className="fs-2 fw-bold">PSCCHC</span>
                  </div>
                </section>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto me-auto gap-3">
                {NavLevelZero.map((item, index) => (
                  <NavDropdown
                    title={language === "en" ? item.menuNmEn : item.menuNmAr}
                    key={index}
                    id={item.menuTitle}
                    show={hoveredDropdown === index}
                    onMouseEnter={() => setHoveredDropdown(index)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                  >
                    {groupedArray[index].map((item, index1) => (
                      <NavDropdown.Item key={index1}>
                        <Link to={item.route}>
                          <div className="d-flex align-items-center">
                            <div className="me-3">
                              <i className={`${item.menuIcone} d-flex align-items-center justify-content-center`}></i>
                            </div>
                            <div className="">
                              <span style={{ color: "black" }}>{language === "en" ? item.menuNmEn : item.menuNmAr}</span>
                              <div id="dropdown-item-d" className="dropdown-item-description" style={{ overflow: 'hidden', overflowWrap: "break-word", textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: "rgb(124, 124, 124)" }}>
                                {language === "en" ? item.menuTitel2 : item.menuTitle2Ar}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ))}
              </Nav>
              <Nav>
                <div className="col d-flex justify-content-center align-items-center">
                  <LanguageSwitcher />
                  {isLoggedIn ? (
                    <NavDropdown title={`Hello, ${userId}`} id="basic-nav-dropdown" align="end">
                      <NavDropdown.Item onClick={handleReports}>Reports</NavDropdown.Item>
                      <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <div className="btn navbar-btn" onClick={handleClick}>
                      <i className="fas fa-user"></i>
                    </div>
                  )}
                  <div className="btn navbar-btn" onClick={handleClick2}>
                    <i className="fas fa-address-card"></i>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default CustomNavbar;

