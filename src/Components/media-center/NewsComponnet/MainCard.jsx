import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DOMPurify from "dompurify";
import { useLanguage } from "../../LanguageContext";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneNews } from "../../Store/Reducers/OneNewsReducer";


const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};

export default function MainCard({ selectedMiniCard, miniCardsData }) {

  const dispatch = useDispatch();
  const location = useLocation();
  const newsId = new URLSearchParams(location.search).get("newsId");
  const pageLang = new URLSearchParams(location.search).get("pageLang");
  const {OneNews, OneNewsLoading, OneNewsError} = useSelector((state) => state.OneNews);
  console.log(newsId);
  console.log(pageLang);

  useEffect(() => {
    if (newsId && pageLang) {
      dispatch(fetchOneNews({ newsId: newsId, pageLang: pageLang }));
      // dispatch(fetchOneNews(newsId,pageLang));
    }
  }, [dispatch, newsId, pageLang]);

  const { language } = useLanguage();
  const selectedData = newsId ? (OneNews.length > 0 ? OneNews[0] : null) : selectedMiniCard !== null ? miniCardsData[selectedMiniCard] : null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <Card
      style={{
        maxWidth: 880,
        height: "100%",
        alignContent: "start",
        borderRadius: 25,
        boxShadow: 29,
        padding: 12,
      }}
    >
      {selectedData && (
        <>
          <CardMedia
            style={{
              height: 400,
              width: "auto",
              borderRadius: 10,
              objectFit: "cover",
            }}
            image={selectedData.nimage}
            title={selectedData.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <div
                dangerouslySetInnerHTML={sanitizeHTML(
                  selectedData.title
                )}
              />
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className={`${language === "ar" ? "text-end" : "text-start"}`}
            >
              <div className="my-5 fs-6 fw-bold align-content-center align-items-center">
                <span className="me-3"><FaRegCalendarAlt size={25} /></span>
                {selectedData.newsDate && formatDate(selectedData.newsDate)}
              </div>
              <div className="my-5 fs-5 align-content-center align-items-center"
                dangerouslySetInnerHTML={sanitizeHTML(
                  selectedData.details
                )} />
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
}
