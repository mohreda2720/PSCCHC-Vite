import React from "react";
import "./RotratingCard.css";
import { Container, Row } from "react-bootstrap";
import DOMPurify from "dompurify";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

const RotratingCard = ({
  socialResponsible,
  socialResponsible2,
  socialResponsible3,
}) => {
  const cards = [
    {
      title: socialResponsible[1].htmTitle,
      image: socialResponsible[1].image1,
      content: socialResponsible[1].details.split(" ").slice(0, 20).join(" "),
      id:'#Resource1'
    },

    {
      title: socialResponsible2[0].htmTitle,
      image: socialResponsible2[0].image1,
      content: socialResponsible2[0].details.split(" ").slice(0, 20).join(" "),
      id:'#Resource2'
    },
    {
      title: socialResponsible3[0].htmTitle,
      image: socialResponsible3[0].image1,
      content: socialResponsible3[0].details.split(" ").slice(0, 20).join(" "),
      id:'#Resource3'
    },
  ];

  return (
    <Container
      data-aos="fade-up"
      data-aos-delay
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 15) 90%, transparent 100%)",
        marginTop: "50px",
        display: "grid",

        backgroundColor: "rgba(255, 255, 255, 0)",
        // background: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      }}
    >
      <Row className=" align-items-center">
        <div>
          <div className="boxesContainer">
            {cards.map((card, index) => (
              <a href={card.id}  key={index}>
                <div className="cardBox">
                  <div className="cardret">
                    <div className="front">
                      <img
                        src={card.image}
                        style={{
                          width: "90%",
                          height: "90%",
                          objectFit: "cover",
                          borderRadius: "40px 0 40px 4px ",
                        }}
                        alt={card.title}
                      />
                    </div>
                    <div
                      className="back"
                      style={{ borderRadius: "40px 0 40px 4px", cursor: "pointer"  }}
                    >
                      {/* <h3>{card.title} </h3> */}
                      <h3 className="mt-5 fw-medium miniRotatingCardTitle"><div dangerouslySetInnerHTML={sanitizeHTML(card.title)} /></h3>
                      {/* <p style={{ overflow: "hidden" }}>{card.content}</p> */}
                      <p className="display-6" style={{ overflow: "hidden"}}><div dangerouslySetInnerHTML={sanitizeHTML(card.content)} /></p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default RotratingCard;

// <iframe
//           width="560"
//           height="315"
//           src="https://www.youtube.com/embed/VIDEO_ID"
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
