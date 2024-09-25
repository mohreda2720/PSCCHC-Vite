import DOMPurify from "dompurify";
import Accordion from "react-bootstrap/Accordion";
import { useLanguage } from "../LanguageContext";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

const FAQ = ({ filteredFAQ }) => {
  const { language } = useLanguage();
  return (
    <>
      <header className="section-header my-5">
        <h3>{language === "en" ? "F.A.Q" : "الأسئلة الشائعة"}</h3>
      </header>
      <div className="container">
        <Accordion defaultActiveKey="0">
          {filteredFAQ.map((faq, index) => (
            <>
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header className="FAQtitle ">
                  <div className={`${language === "en" ? "" : "w-100 text-end"}`}
                    dangerouslySetInnerHTML={sanitizeHTML(faq.contentTitle)}
                  />
                </Accordion.Header>
                <Accordion.Body className="text-start">
                  <div dangerouslySetInnerHTML={sanitizeHTML(faq.details)} />
                </Accordion.Body>
              </Accordion.Item>
            </>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default FAQ;
