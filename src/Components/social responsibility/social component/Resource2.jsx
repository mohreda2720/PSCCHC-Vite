import React from "react";
import DOMPurify from "dompurify";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

export default function Resource2({ socialResponsible2 }) {
  return (
    <>
      <div className="container " id='Resource2'>
        <header
          className="section-header mt-5"
          data-aos="fade-up"
          data-aos-delay
        >
          <h3>{socialResponsible2[0].htmTitle}</h3>
        </header>
        <div className="row align-items-center justify-content-center">
          <div className=" col-md-5 col-sm-6 col-xs-12  justify-content-center">
            <p
              className="text-left justify-text p-4 about-page-paragraph" data-aos="fade-left" data-aos-delay
            >
              <div
                dangerouslySetInnerHTML={sanitizeHTML(
                  socialResponsible2[0].details
                )}
              />
            </p>
          </div>
          <div
            className=" col-md-6 col-sm-6 col-xs-12"
            data-aos="fade-left"
            data-aos-delay
          >
            <img className="img-fluid" src={socialResponsible2[0].image1} />
          </div>
        </div>
      </div>
    </>
  );
}
