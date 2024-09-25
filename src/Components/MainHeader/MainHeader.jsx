import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react'
import Typewriter from '../TypeWriter/TypeWriter.jsx';

const MainHeader = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const images = [
        { path: "/images/container2.jpg" },
        { path: "/images/fifeimage.jpg" },
        { path: "/images/fourimage.jpg" }
    ];
    return (

        <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel" style={{ height: '500px' }}>
            {images.map((image, idx) => (
                <Carousel.Item key={idx} interval={1000}>
                    <img className="mediaimage d-block w-100" src={image.path} style={{ height: '500px' }} />
                    <Carousel.Caption className="text-center" style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <h1 className="my-2 display-5 fw-bold ls-tight" data-aos="fade-up" data-aos-delay style={{ color: "hsl(218, 81%, 95%)" }}>
                            {props.text}
                            <br />
                            <span style={{ color: "hsl(218, 81%, 75%)" }}>
                                <Typewriter text="In PSCCHC" delay={50} />
                            </span>
                        </h1>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>

    );
}

export default MainHeader;