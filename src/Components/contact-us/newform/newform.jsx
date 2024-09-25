import React, { useState } from "react";
import { Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaGlobe,
  FaLinkedinIn,
  FaMapMarker,
  FaPaperPlane,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "./css/style.css";
import { useLanguage } from "../../LanguageContext";

export default function NewForm({ datacontact }) {
  const { language } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    const subjectEncoded = encodeURIComponent(subject);
    const bodyEncoded = encodeURIComponent(
      `${message}\n\n${language === "en" ? "Sent from:" : "أرسلت من:"} ${name} (${email})`
    );
    
    const emailEncoded = encodeURIComponent(datacontact?.email);

    window.location.href = `mailto:${emailEncoded}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section className="ftco-section new-form mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              {/* Contact Details */}
              <div className="row mb-5 gap-3">
                <Col className="d-flex flex-column gap-3 dbox justify-content-center align-items-center">
                  <div className="sa">
                    <FaMapMarker style={{ fontSize: "30px", color: "white" }} />
                  </div>
                  <div className="text">
                    <h5>{language === "en" ? "Address" : "العنوان"}</h5>
                    <p>{datacontact?.address}</p>
                  </div>
                </Col>

                <Col className="d-flex flex-column gap-3 dbox justify-content-center align-items-center">
                  <div className="sa">
                    <FaPhone style={{ fontSize: "30px", color: "white" }} />
                  </div>
                  <div className="text">
                    <h5>{language === "en" ? "Phone" : "رقم الهاتف"}</h5>
                    <p>{datacontact?.phoneNumber}</p>
                  </div>
                </Col>

                <Col className="d-flex flex-column gap-3 dbox justify-content-center align-items-center">
                  <div className="sa">
                    <FaPaperPlane style={{ fontSize: "30px", color: "white" }} />
                  </div>
                  <div className="text">
                    <h5>{language === "en" ? "Email" : "البريد الإلكتروني"}</h5>
                    <p>{datacontact?.email}</p>
                  </div>
                </Col>

                <Col className="d-flex flex-column gap-3 dbox justify-content-center align-items-center">
                  <div className="sa">
                    <FaGlobe style={{ fontSize: "30px", color: "white" }} />
                  </div>
                  <div className="contact-inn">
                    <h5>{language === "en" ? "Social" : "تابعنا"}</h5>
                    <ul className="social-icons">
                      <li>
                        <a href={datacontact?.facebook}>
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href={datacontact?.twitter}>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href={datacontact?.linkedin}>
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li>
                        <a href={datacontact?.whatsapp}>
                          <FaWhatsapp />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </div>

              {/* Contact Form */}
              <div className="row">
                <div className="col-md-7">
                  <div className="contact-wrap-custom w-100 p-md-5 p-4">
                    <h3 className="mb-4">
                      {language === "en" ? "Contact Us" : "تواصل معنا"}
                    </h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label-custom" htmlFor="name">
                            {language === "en" ? "Full Name" : "الاسم كامل"}
                          </label>
                          <input
                            type="text"
                            className="form-control-custom"
                            name="name"
                            id="name"
                            value={name}
                            onChange={handleChange}
                            placeholder={language === "en" ? "Name" : "الاسم"}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label-custom" htmlFor="email">
                            {language === "en" ? "Email Address" : "البريد الإلكتروني"}
                          </label>
                          <input
                            type="email"
                            className="form-control-custom"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                            placeholder={language === "en" ? "Email" : "البريد الإلكتروني"}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label-custom" htmlFor="subject">
                            {language === "en" ? "Subject" : "الموضوع"}
                          </label>
                          <input
                            type="text"
                            className="form-control-custom"
                            name="subject"
                            id="subject"
                            value={subject}
                            onChange={handleChange}
                            placeholder={language === "en" ? "Subject" : "الموضوع"}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label-custom" htmlFor="message">
                            {language === "en" ? "Message" : "الرسالة"}
                          </label>
                          <textarea
                            className="form-control-custom"
                            name="message"
                            id="message"
                            value={message}
                            onChange={handleChange}
                            placeholder={language === "en" ? "Message" : "الرسالة"}
                            rows="4"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="button"
                            onClick={handleClick}
                            value={language === "en" ? "Send Message" : "إرسال"}
                            className="btn btn-primary-custom"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <Col lg={5} md={5} xs={12} className="align-items-center">
                  <div id="map" style={{ borderRadius: "20px", height: "100%" }}>
                    <iframe
                      title="Our location"
                      width="100%"
                      height="100%"
                      className="rounded-3"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13644.043187879166!2d32.30316704371113!3d31.248124432543506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1719660434123!5m2!1sen!2seg"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
