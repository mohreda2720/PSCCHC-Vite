import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { useLanguage } from "../LanguageContext";
import { fetchTenderM } from "../Store/Reducers/TenderMReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const TendersTop = ({ filterTendersBySeq, sendTenderSeqToParent }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTenderM());
  }, [dispatch]);

  const { TenderM, loading, error } = useSelector((state) => state.TenderM);
  const [filteredTenderM, setFilteredTenderM] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    if (TenderM === 'NoCurrentTenders') {
      setFilteredTenderM([]);
    } else if (TenderM.length > 0) {
      const filteredTenderMByLanguage =
        language === "en"
          ? TenderM.filter((item) => item.pLang === "en")
          : TenderM.filter((item) => item.pLang === "ar");

      if (filteredTenderMByLanguage.length > 0) {
        setFilteredTenderM(filteredTenderMByLanguage);
        sendTenderSeqToParent(filteredTenderMByLanguage[0].tenderSeq);
      }
    }
  }, [TenderM, language]);

  const handleTenderClick = (tenderSeq) => {
    filterTendersBySeq(tenderSeq);
  };

  return (
    <div className="container short-tender-card">
      <p className="text-start swipe-left-taxt">
        {language === 'en' ? "Swipe Left" : "إسحب لليسار"}
      </p>
      {filteredTenderM.length > 0 ? (
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={4}
          spaceBetween={10}
          className="short-tender second my-5"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {filteredTenderM.map((member) => (
            <SwiperSlide key={member.tenderSeq}>
              <div className="row">
                <div className="col">
                  <div
                    className="short-tender card1"
                    onClick={() => handleTenderClick(member.tenderSeq)}
                  >
                    <div className="short-tender card2">
                      <p className="short-tender title">{member.title}</p>
                      <p className="short-tender small">
                        {member.startDate.slice(0, 10)}
                      </p>
                      <div className="short-tender go-corner">
                        <div className="short-tender go-arrow">→</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center  mt-5">
          <p>No Tenders found</p>
        </div>
      )}
    </div>
  );
};

export default TendersTop;