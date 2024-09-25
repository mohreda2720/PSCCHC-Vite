import DOMPurify from "dompurify";
const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

const ChairmanMessage2 = ({ filteredChairmanMessage }) => {
  return (
    <div className="chairman" id="ChairmanMsg">
      <div className="chairman-msg-container">
        <div className="container section_container">
          <div className="d-flex justify-content-center align-items-center">
            <p
              className="p-4 about-page-paragraph"
              dangerouslySetInnerHTML={sanitizeHTML(
                filteredChairmanMessage[0].details
              )}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage2;
