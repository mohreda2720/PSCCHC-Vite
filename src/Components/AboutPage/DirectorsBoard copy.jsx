import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../LanguageContext";
import { fetchTabDet } from "../Store/Reducers/TabDetReducer";
import DOMPurify from "dompurify";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import "./BoardMembers.css"; // Ensure your CSS file is imported here

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

const DirectorsBoard2 = () => {
  const { language } = useLanguage();
  const dispatch = useDispatch();
  const { TabDet, loading, error } = useSelector((state) => state.TabDet);
  const [filteredDirector, setFilteredDirector] = useState([]);

  useEffect(() => {
    dispatch(fetchTabDet(11004));
  }, [dispatch]);

  useEffect(() => {
    if (TabDet.length > 0) {
      const filteredByLanguage =
        language === "en"
          ? TabDet.filter((item) => item.pageLang === "en")
          : TabDet.filter((item) => item.pageLang === "ar");

      setFilteredDirector(filteredByLanguage);
    }
  }, [TabDet, language]);

  return (
    <div id="BoardMembers">
      <header className="section-header">
        <h3>{language === "en" ? "Board Of Directors" : "أعضاء مجلس الادارة"}</h3>
      </header>
      <div className="container my-5">
        {filteredDirector.map((member, index) => (
          <div className="scaled-member-card" key={index}>
            <div className="about_board-card" key={index}>
              <button className="about_board-mail">
                <CiMail size={28} />
              </button>
              <div className="about_board-profile-pic">
                <img src={member.col3} alt={member.name} />
              </div>
              <div className="about_board-bottom">
                <div className="about_board-content">
                  <span className="about_board-name mt-3">{member.col1}</span>
                  <span className="about_board-about-me pb-3">
                    <div dangerouslySetInnerHTML={sanitizeHTML(member.col2)} />
                  </span>
                </div>
                <div className="about_board-bottom-bottom">
                  <p className="SmallBoardTitle">{member.col1}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorsBoard2;
