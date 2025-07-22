import homeimg from '../images/511970746_762353696364200_1864559626864625750_n.jpg'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo.jpg';
import { faFacebookF, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';




function Footer() {
    return (
        <>
            <div className="footer bg-black pb-3">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={homeimg} className="d-block w-100 footer-img img-fluid" alt="Shrimp Zone restaurant interior" />
                            <div className="gray-overlay"></div>
                            
                            {/* carousel-caption d-none d-md-block text-white */}
                            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-white w-100 h-100">
                                <h1 className="fw-bold text-white">For Reservation and Inquiries</h1>
                                <Link to="/contact" className="btn mt-4 bg-orange p-2 px-4 view-menu-btn">Call Now <FontAwesomeIcon icon={faPhone} /></Link>
                                <Link to="/contact" className="btn mt-4 bg-whats p-2 px-4 whats-btn text-white">Chat with us via WhatsApp <FontAwesomeIcon icon={faWhatsapp} /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row g-4">
                        <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
                            <Link to="/" className="logo-footer d-inline-block mb-3">
                                <img src={logo} className="img-fluid logo-footer" alt="Shrimp Zone logo" style={{ maxWidth: 120 }} />
                            </Link>
                        </div>
                        <div className="col-12 col-md-4 quick-links d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
                            <h5 className="text-light mt-3 mb-3">Quick Links</h5>
                            <Link to="/menu" className="text-white mb-2">Our Menu</Link>
                            <Link to="/contact" className="text-white mb-2">Send Us a Message</Link>
                            <Link to="/contact" className="text-white mb-2">Chat With Us Through WhatsApp</Link>
                        </div>
                        <div className="col-12 col-md-4 text-center text-md-start">
                            <h2 className="text-white mt-3 mb-3">FOLLOW US</h2>
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-2 mb-3">
                                <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/shrimpzone1/" className="text-white follow-icon-facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/shrimpzone1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white follow-icon-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a target='_blank' rel="noopener noreferrer" href="http://www.youtube.com/@shrimpzone3655" className="text-white follow-icon-youtube"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a target='_blank' rel="noopener noreferrer" href="https://www.tiktok.com/@shrimpzone0?is_from_webapp=1&sender_device=pc" className="text-white follow-icon-tiktok"><FontAwesomeIcon icon={faTiktok} /></a>
                            </div>
                            <Link to="/contact" className="btn mt-2 px-4 footer-callnow-btn d-inline-block">Call Now <FontAwesomeIcon icon={faPhone} className="text-light" /></Link>
                        </div>
                    </div>

                    <div className="row text-center mt-5">
                        <div className="col-12 col-md-6 mb-2 mb-md-0">
                            <p className="text-secondary mb-0">© 2025 All Rights Reserved | Designed by <a href="https://www.facebook.com/youssef.assal.936675" target="_blank" rel="noopener noreferrer" className="text-white">Youssef Samy Assal</a></p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="text-secondary mb-0">Powered by <a href="https://www.facebook.com/youssef.assal.936675" target="_blank" rel="noopener noreferrer" className="text-white">Youssef Samy Assal</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;