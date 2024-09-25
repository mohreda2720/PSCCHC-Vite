import React from 'react'
import DOMPurify from "dompurify";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};
export default function Resource1({socialResponsible}) {
  
  return (
    <>
      <div className="container" id='Resource1'>
        <header className='section-header mt-5' data-aos="fade-up" data-aos-delay>
          <h3>{socialResponsible[0].htmTitle }
          </h3>
        </header>
        <div className="row  justify-content-center align-items-center" >
          <div className=" col-md-5 col-sm-6 col-xs-112">
            <img data-aos="fade-right" data-aos-delay
              className="img-fluid " style={{height:"450px" , width:"500px"}}
              src={socialResponsible[0].image1}
            />
          </div>
          <div className=" col-md-6 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center " >
            <p className="text-left justify-text p-4 about-page-paragraph" data-aos="fade-left" data-aos-delay><div dangerouslySetInnerHTML={sanitizeHTML(socialResponsible[1].details)} /></p>
          </div>
        </div>
      </div>
    </>
  )
}
