import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import './NewSlider2.css';


function NewsSlider2() {

    const ImageData = [
        {
            id:1,
            image: "./images/a1.jpg",
        },
        {
            id:2,
            image: "./images/a2.jpg",
        },
        {
            id:3,
            image: "./images/a3.jpg",
        },
        {
            
            id:4,
            image: "./images/a4.jpg",
        } ,
        {
            id:5,
            image: "./images/b1.jpg",
        },
        {
            id:6,
            image: "./images/b2.jpg",
        },
        {
            id:7,
            image: "./images/b3.jpg",
        },
        {
            id:8,
            image: "./images/a1.jpg",
        }
    ];

    return (
        <div className="container news_slider2 my-5">
            <Row>
                <Col xs={12} md={6}>
                    <Carousel className='mb-3' autoPlay interval="5000" transitionTime="5000" infiniteLoop>
                        {ImageData.slice(0,4).map((newimage, index) => (
                            <Carousel.Item key={index} >
                                <a href='/'>
                                <div className="carousel-image-container">
                                        <img src={newimage.image} alt={`Slide ${index + 1}`} />
                                        <div className="carousel-overlay">
                                        </div>
                                    </div>                                    
                                </a>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                <Col xs={12} md={6}>
                    <Carousel className='mb-3' autoPlay interval="5000" transitionTime="5000" infiniteLoop >
                        {ImageData.slice(4,8).map((newimage, index) => (
                            <Carousel.Item key={index} >
                                <a href='/'>
                                <div className="carousel-image-container">
                                        <img src={newimage.image} alt={`Slide ${index + 1}`} />
                                        <div className="carousel-overlay">
                                        </div>
                                    </div>                                    
                                </a>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                
            </Row>
        </div>
    );
}

export default NewsSlider2;
