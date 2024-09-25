/* eslint-disable no-unused-vars */
import { FaFileArrowDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { fetchStatements } from "../Store/Reducers/StatementsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../LanguageContext";
import DOMPurify from "dompurify";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

// const sanitizeHTML = (html) => {
//   const cleanHTML = DOMPurify.sanitize(html, {
//     ADD_ATTR: ['target'],
//     FORBID_TAGS: ['script'], // Forbid script tags for security
//     FORBID_ATTR: ['href']    // Forbid inline event handlers for security
//   });

//   const parser = new DOMParser();
//   const doc = parser.parseFromString(cleanHTML, 'text/html');

//   const anchors = doc.querySelectorAll('a');
//   anchors.forEach(anchor => {
//     anchor.setAttribute('target', '_blank');
//   });

//   // Return sanitized HTML wrapped in { __html: ... }
//   return { __html: doc.documentElement.innerHTML };
// };
const FinancialStatements = () => {
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const { Statements, loading, error } = useSelector((state) => state.Statements);
  const [filteredStatements, SetfilteredStatements] = useState([]);

  useEffect(() => {
    dispatch(fetchStatements());
  }, [dispatch]);

  useEffect(() => {
    if (Statements.length > 0) {
      const filteredStatementsAll = Statements.filter((item) =>
        item.pageId.toString().includes("14004")
      );
      // console.log(filteredStatementsAll);

      const filteredStatementsByLanguage =
        language === "en"
          ? filteredStatementsAll.filter((item) => item.pageLang === "en")
          : filteredStatementsAll.filter((item) => item.pageLang === "ar");
      // console.log(filteredStatementsByLanguage);
      SetfilteredStatements(filteredStatementsByLanguage);
    }
  }, [Statements, language]);
  // console.log('Filtered statements is : ', filteredStatements);

  return (
    <>
      <header className="section-header my-5">
        <h3>{language === 'en' ? 'Financial Statements' : 'القوائم المالية'}</h3>
      </header>

      <div className="container d-flex flex-wrap justify-content-center mb-5">

        {filteredStatements.map((statement, index) => (
          <>
            <div className="col-lg-6 p-2 col-12" key={index}>
              <div className="cookieCard STATEMENTS_cards">
                <p className="cookieHeading">
                  <div dangerouslySetInnerHTML={sanitizeHTML(statement.contentTitle)} /></p>
                <div className="cookieDescription">
                  <div className="Statements-links" dangerouslySetInnerHTML={sanitizeHTML(statement.details)} />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FinancialStatements;
