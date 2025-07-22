import './Navbar.css';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand logo"><img src={logo} alt="Shrimp Zone Logo" className="img-fluid" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Menu" className="nav-link active">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link active">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link active">Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex me-5" role="search" onSubmit={(e) => e.preventDefault()}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning text-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;