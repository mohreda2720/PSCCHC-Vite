import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMiniCardData } from '../../Store/Reducers/MiniCardReducer.js';
import { Container, Row } from 'reactstrap';
import MainCard from './MainCard.jsx';
import Loader from '../../Loader/Loader.jsx';
import MiniCard from './MiniCard.jsx';
import { useLanguage } from '../../LanguageContext.jsx';
import DOMPurify from "dompurify";
import { useLocation, useNavigate } from 'react-router-dom';

const sanitizeHTML = (html) => {
  return { __html: DOMPurify.sanitize(html) };
};


export default function All() {
  const location = useLocation();
  const newsId = new URLSearchParams(location.search).get("newsId");
  console.log(newsId);

  
  const [selectedMiniCard, setSelectedMiniCard] = useState(0);
  const dispatch = useDispatch();
  const { miniCardsData, loading, error } = useSelector((state) => state.miniCardsData);
  const [newMiniCardsData, setNewMiniCardData] = useState([])
  const { language } = useLanguage()
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchMiniCardData(50));
  }, [dispatch]);
  console.log(miniCardsData);

  useEffect(()=>{

    const filteredMiniCards =language==="en"? miniCardsData.filter((item)=>item.pLang=== "en") : miniCardsData.filter((item)=>item.pLang=== "ar")
    setNewMiniCardData(filteredMiniCards)
  },[miniCardsData, language])

  const handleMiniCardClick = (index) => {
    

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete('newsId');
    searchParams.delete('pageLang');

    navigate({
        pathname: '/media',
        search: searchParams.toString(),
    });

    setSelectedMiniCard(index);
  }

  return (
    <div id='News'>
      {loading && <Loader />}
      <Container fluid data-aos="fade-up" data-aos-delay>

        <Row className="justify-content-center" >
          
          <MainCard selectedMiniCard={selectedMiniCard} miniCardsData={newMiniCardsData} />

          <div className="col-container" style={{ padding: "20px", borderRadius: 20, border: 20, height: '103dvh', overflowY: 'scroll', width: 'auto' }}>
            {newMiniCardsData.map((data, index) => (
              <MiniCard
                key={index}
                image={data.nimage}
                title={data.title}
                content={data.details}
                onClick={() => handleMiniCardClick(index)}
              />
            ))}

          </div>
        </Row>
      </Container>
    </div>
  );
}
