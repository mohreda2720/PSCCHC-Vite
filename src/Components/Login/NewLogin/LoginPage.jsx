/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import "./LoginPage.css";
import { motion } from "framer-motion";
import Typewriter from "../../TypeWriter/TypeWriter.jsx";
import { useLanguage } from "../../LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Store/Reducers/UserReducer";
import { useNavigate } from "react-router-dom";

const NewLogin = () => {
  const { language } = useLanguage();
  const dispatch = useDispatch();
  const { Users, UserLoading, UserError } = useSelector((state) => state.Users);
  const [userData, setUserData] = useState({ userId: "", password: "" });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = () => {
    if (userData.userId.trim() === "" || userData.password.trim() === "") {
      setShowAlert(true);
    } else {
      dispatch(fetchUsers(userData));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (Users === true) {
      sessionStorage.setItem("isLoggedIn", true);
      sessionStorage.setItem("userId", userData.userId.toUpperCase());
      navigate("/login/reports", { state: { userId: userData.userId.toUpperCase() } });
      dispatch({ type: "Users/clearUsers" });
    } else if (Users === false) {
      setShowAlert(true);
      dispatch({ type: "Users/clearUsers" });
    }
  }, [Users, UserError, navigate, userData.userId, dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    handleLogin(); // Call the handleLogin function
  };
  return (
    <>
      <section className="LoginComponent">
        <Alert variant="danger" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
          Check Username or Password
        </Alert>
        <Container className="text-center text-lg-start">
          <Row>
            <Col style={{ marginTop: "4rem", zIndex: 10 }}>
              <h1
                className="my-2 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                <Typewriter text="The best offer" delay={50} /> <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  <Typewriter text="for your business" delay={100} />
                </span>
              </h1>

              <p
                className="mb-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                PSCCHC is an international port linked to more than 100
                countries around the world. <br /> It handles about 533000 TEU
                (twenty-feet equivalent units, or containers) annually... <br />
                PSCCHC serving such markets as North & South Europe, the
                Mediterranean and Far East market ..
              </p>
            </Col>

            <Col lg={4} mb={5} mb-lg={0} className="position-relative my-5">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="loginCard">
                <div className="px-4 py-5 px-md-5">
                <form onSubmit={handleSubmit}>
                    <div
                      className="d-flex align-items-center mb-3 pb-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.i
                        whileHover={{ scale: 1.4 }}
                        className="fas fa-light fa-ship fa-3x me-4"
                        style={{ color: "rgb(0,0,14)" }}
                      ></motion.i>
                      <h3
                        className="my-2 display-7 fw-bold ls-tight"
                        style={{ color: "rgb(0,0,14)" }}
                      >
                        WELCOME TO PSCCHC
                      </h3>
                    </div>
                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: "1px" }}
                    >
                      {language === "en"
                        ? "Sign into your account"
                        : "سجل الدخول الى حسابك"}
                    </h5>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example17">
                        User Id
                      </label>

                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <input
                          type="text"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={handleInputChange}
                          name="userId"
                        />
                      </div>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example27">
                        Password
                      </label>

                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="fas fa-lock"></i>
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="form2Example27"
                          className="form-control form-control-lg"
                          name="password"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-check mb-4">
                      <input
                        id="ShowPassword"
                        className="form-check-input"
                        type="checkbox"
                        onClick={togglePasswordVisibility}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="ShowPassword"
                        style={{ cursor: "pointer" }}
                      >
                        Show Password
                      </label>
                    </div>

                    <div className="pt-1 mb-4 text-lg-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundColor: "rgb(0,0,14)",
                          color: "white",
                        }}
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-lg btn-block"
                        type="submit" // Changed to "submit"
                      >
                        Login
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NewLogin;