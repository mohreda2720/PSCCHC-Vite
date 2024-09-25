import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import './NewsBS.css';

function NewsSlider() {

    const newsData = [
        {
            title: "Port Said Container & Cargo Handling Co. succeeds in attracting (5) serv...",
            imageUrl: "https://pscchc.com/img/b.jpg",
            publishedAt: "3/30/2023 12:49:35 PM"
        },
        {
            title: "An Expected Positive Impact on The stock exchange after Listing of Port...",
            imageUrl: "https://m.gomhuriaonline.com/Upload/News/19-2-2024_15_11_59_GomhuriaOnline_241708348319.jpg",
            publishedAt: "12/8/2022 2:12:53 PM"
        },
        {
            title: "Continued and successful cooperation between ZIM Integrated Shipping Ser...",
            imageUrl: "https://theloadstar.com/wp-content/uploads/348526ab6c3a03d216e9d7a709c3685d-680x0-c-default.jpg",
            publishedAt: "5/17/2023 9:18:54 AM"
        },
        {
            title: "Port Said Container and Cargo Handling is offering 20% stake on the EGX is offering 20% stake on the EGX is offering 20% stake on the EGX is offering 20% stake on the EGX",
            imageUrl: "http://www.egypttoday.com/siteimages/Larg/202306080441144114.jpg",
            publishedAt: "8/6/2023 2:41:54 PM"
        }
    ];

    return (
        <div className="container news_slider my-5">
            <Row>
                <Col xs={12} md={6}>
                    <Carousel>
                        {newsData.map((lastNews, index) => (
                            <Carousel.Item key={index} interval={2000}>
                                <a href='/'>
                                    <img src={lastNews.imageUrl} alt={lastNews.title} />
                                    <Carousel.Caption>
                                        <h5>{lastNews.title}</h5>
                                    </Carousel.Caption>
                                </a>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col xs={12} md={6}>
                    <Row>
                        {newsData.map((lastNews, index) => (
                            <Col key={index} xs={6} className="mb-4">
                                <a href="">
                                    <div className="image-with-title">
                                        <img className='sideImage' src={lastNews.imageUrl} alt='' />
                                        <h6 className="title-overlay">{lastNews.title}</h6>
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default NewsSlider;
