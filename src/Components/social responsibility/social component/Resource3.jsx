import React from 'react'
import DOMPurify from "dompurify";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

export default function Resource3({socialResponsible3}) {
  return (
    <>
      <div className="container" id='Resource3'>
        <header className='section-header mt-5' data-aos="fade-up" data-aos-delay>
          <h3>{socialResponsible3[0].htmTitle }
          </h3>
        </header>
        <div className="row justify-content-center align-items-center" data-aos="fade-up" data-aos-delay>
          <div className="col-md-6 col-sm-6 col-xs-12" data-aos="fade-right" data-aos-delay>
            <div className="video-container">
              <iframe width="100%" height="450px" src="https://www.youtube.com/embed/3GsSMfLYIQg" ></iframe>
            </div>
          </div>
          <div className=" col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center">
            <p className="text-left justify-text p-4 about-page-paragraph" >
            <div dangerouslySetInnerHTML={sanitizeHTML(socialResponsible3[0].details)} />

              <ul >
                <a href={socialResponsible3[0].image2} className="link-unstyle ">
                  <img className='footer_images_small' src="./images/pdf.png" alt="logo" />
                  &nbsp;&nbsp;corona virus
                </a>
              </ul> </p>

          </div>
        </div>
      </div>
    </>)
}
