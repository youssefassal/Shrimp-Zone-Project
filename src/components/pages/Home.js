import homeimg from '../../images/511970746_762353696364200_1864559626864625750_n.jpg'
import infoimg from '../../images/info.jpg';
import deliveryimg from '../../images/Delivery-man.jpg';
import delicious1 from '../../images/del1.jpg';
import delicious2 from '../../images/logo.jpg';

import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




function Home() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={homeimg} class="d-block w-100 home-img img-fluid" alt="Shrimp Zone restaurant main banner" />
                        <div className="gray-overlay"></div>
                        <div className="carousel-caption text-white">
                            <h1 class="fw-bold text-orange">SHRIMP ZONE</h1>
                            <h2>Listen from <span class="fw-bold text-orange">SHRIMP ZONE</span> – Number One – Fish Jeweler</h2>
                            <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
                                <Link to="/menu" className="btn bg-orange p-2 px-4 view-menu-btn">View Menu <FontAwesomeIcon icon={faRectangleList} /></Link>
                                <Link to="/contact" className="btn bg-whats p-2 px-4 contactus-btn">Contact Us <FontAwesomeIcon icon={faPhone} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="info">
                            <img src={infoimg} alt="Shrimp Zone information" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="home-content">
                            <h1 className="text-orange">Shrimp Zone</h1>
                            <p className="">Shrimp Zone is a popular seafood restaurant in Cairo, Egypt, known for its rich variety of shrimp dishes and flavorful seafood trays. With branches in Sheraton and Heliopolis, the restaurant has built a reputation for serving fresh ingredients prepared in styles like Alexandrian, Mexican, and sweet & sour. Its signature shrimp trays often include shrimp, squid, crab, and fish fillets, making it a go-to spot for seafood lovers. While the casual setting and generous portions attract many, peak hours can lead to long wait times. Overall, Shrimp Zone offers a tasty and satisfying seafood experience for those craving bold flavors and hearty meals.</p>
                            <p className="">Shrimp Zone is a standout destination for seafood lovers in Cairo, offering a vibrant menu centered around shrimp and mixed seafood platters. Known for its bold flavors and generous portions, the restaurant serves dishes like tajin shrimp, grilled crab, and pasta with caviar, all prepared with fresh ingredients and rich sauces. With branches in Sheraton and Heliopolis, it has become a local favorite for casual dine-ins and takeout. While the atmosphere is simple and family-friendly, the food consistently impresses with its taste and variety, making Shrimp Zone a must-try for anyone craving a satisfying seafood feast.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-dark mt-5 p-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <h2 className="text-center text-orange mb-4">Easy Steps to get your Order</h2>
                            <div className="w-100 easy-steps-container" >
                                <div className='d-flex align-items-center easy-step mb-4'>
                                    <div className='easy-icon me-4'>
                                        <FontAwesomeIcon icon={faComments} className="text-orange" />
                                    </div>
                                    <div className='easy-icon-info'>
                                        <p className="easy-title">Contact Us</p>
                                        <p className="easy-desc">via phone or Whatsapp</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center easy-step mb-4'>
                                    <div className='easy-icon me-4'>
                                        <FontAwesomeIcon icon={faRectangleList} className="text-orange" />
                                    </div>
                                    <div className='easy-icon-info'>
                                        <p className="easy-title">Choose Your Order</p>
                                        <p className="easy-desc">from our <Link to={"/menu"}>menu</Link></p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center easy-step mb-4'>
                                    <div className='easy-icon me-4'>
                                        <FontAwesomeIcon icon={faTruck} className="text-orange" />
                                    </div>
                                    <div className='easy-icon-info'>
                                        <p className="easy-title">Delivered</p>
                                        <p className="easy-desc">as soon as possible</p>
                                    </div>
                                </div>

                                <Link to="/menu" className="btn mt-4 bg-orange p-2 px-4 view-menu-btn fw-bold">View Our Menu <FontAwesomeIcon icon={faRectangleList} className="text-dark" /></Link>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src={deliveryimg} alt="Delivery illustration" className="img-fluid mx-auto d-block delivery-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <h1 className="text-center mb-4">The Most delicious seafood</h1>
                <div className="underline"></div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card position-relative">
                            <img src={delicious1} className="card-img-top img-fluid" alt="Bint El-Balad seafood tray" />
                            <div className="card-img-overlay"></div>
                            <div className="card-body">
                                <p className="card-text">“Bint El-Balad Tray” – A perfect blend of authentic flavor and seafood variety!
                                    Enjoy a rich selection of crispy fried shrimp, grilled shrimp, and creamy shrimp bites, all surrounding a flavorful signature sauce in the center. A true feast for seafood lovers—bold Egyptian taste with a presentation that’s impossible to resist!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card position-relative">
                            <img src={delicious2} className="card-img-top img-fluid" alt="Shrimp Zone logo and welcome" />
                            <div className="card-img-overlay"></div>
                            <div className="card-body">
                                <p className="card-text">Welcome to Shrimp Zone – Where Flavor Leads the Way!
                                    With a bold identity and a passion for seafood, Shrimp Zone brings you the freshest tastes of the sea, served with style and flavor. From crispy bites to saucy delights, we’re here to turn every meal into a celebration</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card position-relative">
                            <img src={infoimg} className="card-img-top img-fluid" alt="Seafood platter king tray" />
                            <div className="card-img-overlay"></div>
                            <div className="card-body">
                                <p className="card-text">The King of Seafood Platters – Only at Shrimp Zone!
                                    Dive into a legendary tray packed with fried shrimp, grilled crab, crispy calamari, jumbo prawns, and golden seafood bites — all perfectly seasoned and served with Shrimp Zone’s signature sauces. This tray isn’t just a meal, it’s a full seafood experience!</p>
                            </div>
                        </div>
                    </div>

                </div>
                
                <Link to="/menu" className="btn mt-4 bg-orange p-2 px-4 view-menu-btn fw-bold">View Our Menu <FontAwesomeIcon icon={faRectangleList} className="text-dark" /></Link>
            </div>

        </>
    );
}

export default Home;