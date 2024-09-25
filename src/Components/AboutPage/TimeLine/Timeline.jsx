import React, { useEffect } from "react";
import $ from "jquery";
import "./Timeline.css";
import DOMPurify from "dompurify";

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

const TimelineComponent = ({ filteredHistory }) => {
  useEffect(() => {
    const initializeTimeline = () => {
      const selectors = {
        id: $("#timeline-1"),
        item: $("#timeline-1").find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img",
      };

      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
      );

      const itemLength = selectors.item.length;

      window.addEventListener("scroll", function () {
        let max, min;
        const pos = window.scrollY;
        selectors.item.each(function (i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;

          if (i === itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css(
              "background-image",
              "url(" +
              selectors.item
                .last()
                .find(selectors.img)
                .attr("src")
                .replace(/\\/g, "/") +
              ")"
            );
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 40 && pos >= min) {
            selectors.id.css(
              "background-image",
              "url(" +
              $(this).find(selectors.img).attr("src").replace(/\\/g, "/") +
              ")"
            );
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    };

    initializeTimeline();

    return () => {
      window.removeEventListener("scroll", initializeTimeline);
    };
  }, [filteredHistory]);

  return (
    <div id="OurHistory">
      <div id="timeline-1" className="timeline-container">
        <div className="timeline-header">
          <h2 className="timeline-header__title">
            {filteredHistory[0].htmTitle}
          </h2>
        </div>
        <div className="timeline" >
          <>
            {filteredHistory.map((item, index) => (
              <div
                className="timeline-item"
                data-text={item.contentTitle}
                key={index}
              >
                <div className="timeline__content">
                  <img
                    className="timeline__img"
                    src={item.image1}
                    alt={item.title}
                  />
                  <div className="timeline__content-desc my-5">
                    <div dangerouslySetInnerHTML={sanitizeHTML(item.details)} />
                  </div>
                </div>
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
