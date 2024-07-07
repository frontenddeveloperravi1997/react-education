import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
    const location = useLocation();
    const url = location.pathname.split('/')[1];
    const [bgColor, setBgColor] = useState(url !== "" ? "#111" : "transparent");

    useEffect(() => {
        const handleScroll = () => {
            const top = window.pageYOffset;
            if (top > 96) {
                setBgColor("#111");
            } else if (url === '' && top <= 96) {
                setBgColor("transparent");
            } else {
                setBgColor("#111");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [url]);

    return (
        <>
            <header id="header" style={{ backgroundColor: bgColor }}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="/images/logo.png" alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <Link to='/fields' className="nav-link">
                                        Science Fields
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Course Types
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Facilities
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Wards
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Branches
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="nav-item icons-holder">
                                    <span className="separator">|</span>
                                        <div className="social-icons">
                                            <div className="social">
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </div>
                                            <div className="social">
                                                <i className="fa-brands fa-twitter"></i>
                                            </div>
                                            <div className="social">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </div>
                                        </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
