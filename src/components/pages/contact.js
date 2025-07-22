import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    return (
        <>
            <div className="contact-container">
                <div className="contact-overlay"></div>
                <div className="contact-caption">
                    <h1 className="contact-title">Get in touch</h1>
                    <p className="contact-paragraph text-light text-center mt-3">
                        Want to get in touch? We’d love to hear from you. Here’s how you can reach us…
                    </p>
                </div>
            </div>

            <div className="contact-info-container mt-5 pb-5">
                <div className="container bg-secondary-light p-5 rounded-3">
                    <div className="row py-5">
                        <div className="col-md-6">
                            <h1><FontAwesomeIcon icon={faPhone} className="text-light bg-dark p-2 rounded-2" /></h1>
                            <h2>Call us</h2>
                            <p>Interested in our amazing tasty food. Just pick up the <br /> phone and call us.</p>
                            <a href="tel:+1234567890" className="text-light bg-dark p-2 text-decoration-none call-button fw-bold">01005444543 &nbsp;
                                <FontAwesomeIcon icon={faPhone} className="text-light" />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <h1><FontAwesomeIcon icon={faWhatsapp} className="text-light bg-dark p-2 rounded-2" /></h1>
                            <h2>Chat with us</h2>
                            <p>If you want to chat with us through WhatsApp, we’re here <br /> for you.</p>
                            <a target='_blank' href="https://web.whatsapp.com/" className="text-light bg-dark p-2 text-decoration-none call-button fw-bold">Start chatting &nbsp;
                                <FontAwesomeIcon icon={faComments} className="text-light" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container bg-secondary-light p-5 rounded-3 my-5">
                    <h2 className="text-center mb-4">Send us a message</h2>
                    <form className="text-start">
                        <div className="col-12">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputName" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="inputPhone" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="inputMessage" rows="5"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-dark mt-4">Send</button>
                        </div>
                    </form>
                </div>

                <div className="container bg-secondary-light p-5 rounded-3 my-5">
                    <div className="text-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.12345678901234!3d37.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085801234567890%3A0x1234567890123456!2sShrimp%20Zone%20Restaurant!5e0!3m2!1sen!2sus!4v1612345678901"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Shrimp Zone Restaurant Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;