import './About.css';
import ourmissionimg from '../../images/shrimp stiks.jpg';
import ourteamimg from '../../images/shutterstock_1176110662.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <>
            <div className="about-container">
                <div className="about-overlay"></div>
                <h1 className="about-title">About Shrimp Zone</h1>
            </div>

            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-md-6 mt-5 text-start">
                        <h1>OUR MISSION</h1>
                        <h4 className=" mb-4">is to preserve the quality of taste</h4>
                        <p className="text-start mb-4">
                            Our food is prepared just like any other food, in the kitchen, but don’t let that stop you from thinking that our kitchen is totally different from any other kitchen.
                        </p>

                        <Link to="/menu" className="btn bg-orange p-2 px-4 view-menu-btn ">View Menu <FontAwesomeIcon icon={faRectangleList} /></Link>
                    </div>

                    <div className="col-md-6 our-mission-section">
                        <img src={ourmissionimg} className="img-fluid" alt="Our Mission - Shrimp Zone" />
                    </div>
                </div>
            </div>

            <div className="container-shoutout mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6 shoutout-section d-flex justify-content-center">
                        <img src={ourteamimg} className="img-fluid" alt="Our Team - Shrimp Zone" />
                    </div>

                    <div className="col-md-6 mt-5 text-start text-light">
                        <h1>A MASSIVE SHOU OUT TO OUR TEAM</h1>
                        <h4 className="mb-4">What makes “Shrimp Zone” special is</h4>
                        <p className="text-start mb-4">
                            Our food is prepared just like any other food, in the kitchen, but don’t let that stop you from thinking that our kitchen is totally different from any other kitchen.
                        </p>

                        <Link to="/menu" className="btn bg-orange p-2 px-4 view-menu-btn">
                            View Menu <FontAwesomeIcon icon={faRectangleList} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;