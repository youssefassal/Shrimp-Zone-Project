import React, { useState, useEffect } from 'react';
import './Menu.css';
import page1 from '../../images/Menu/shrimp-zone_menu_1.jpg';
import page2 from '../../images/Menu/shrimp-zone_menu_2.jpg';
import page3 from '../../images/Menu/shrimp-zone_menu_3.jpg';
import page4 from '../../images/Menu/shrimp-zone_menu_4.jpg';
import page5 from '../../images/Menu/shrimp-zone_menu_5.jpg';
import page6 from '../../images/Menu/shrimp-zone_menu_6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const pages = [
    { left: page1, right: page2 },
    { left: page3, right: page4 },
    { left: page5, right: page6 },
];

function Menu() {
    const [spread, setSpread] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // For mobile, treat each page as a single
    const flatPages = [
        page1, page2, page3, page4, page5, page6
    ];
    const [mobilePage, setMobilePage] = useState(0);

    useEffect(() => {
        // Reset to first page when switching modes
        setSpread(0);
        setMobilePage(0);
    }, [isMobile]);

    const prev = () => {
        if (isMobile) setMobilePage(mobilePage > 0 ? mobilePage - 1 : 0);
        else setSpread(spread > 0 ? spread - 1 : 0);
    };
    const next = () => {
        if (isMobile) setMobilePage(mobilePage < flatPages.length - 1 ? mobilePage + 1 : flatPages.length - 1);
        else setSpread(spread < pages.length - 1 ? spread + 1 : pages.length - 1);
    };

    return (
        <div className="menu-book-viewport">
            <div className="menu-book shadow-lg position-relative">
                {isMobile ? (
                    <div className="menu-page menu-page-single d-flex justify-content-center align-items-center">
                        <img src={flatPages[mobilePage]} alt={`Menu page ${mobilePage + 1}`} className="img-fluid" />
                    </div>
                ) : (
                    <>
                        <div className="menu-page menu-page-left d-flex justify-content-center align-items-center">
                            <img src={pages[spread].left} alt={`Menu page ${spread * 2 + 1}`} className="img-fluid" />
                        </div>
                        <div className="menu-page menu-page-right d-flex justify-content-center align-items-center">
                            <img src={pages[spread].right} alt={`Menu page ${spread * 2 + 2}`} className="img-fluid" />
                        </div>
                    </>
                )}
                <button
                    className="menu-nav-btn menu-nav-left"
                    onClick={prev}
                    disabled={isMobile ? mobilePage === 0 : spread === 0}
                    aria-label="Previous Page"
                    tabIndex={0}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                    className="menu-nav-btn menu-nav-right"
                    onClick={next}
                    disabled={
                        isMobile
                            ? mobilePage === flatPages.length - 1
                            : spread === pages.length - 1
                    }
                    aria-label="Next Page"
                    tabIndex={0}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
}

export default Menu;