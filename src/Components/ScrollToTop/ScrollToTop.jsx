import React, { useState, useEffect } from 'react';
import './scrollToTop.css';
import { useLanguage } from '../LanguageContext';

const ScrollToTop = () => {

    const { language } = useLanguage()
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            (window.scrollY > 100) ? setIsVisible(true) : setIsVisible(false);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };




    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop} className="scroll-to-top-button">
                    <button className="ScrollToTopBtn">
                        <svg height="1.2em" className="ArrowIcon" viewBox="0 0 512 512">
                            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
