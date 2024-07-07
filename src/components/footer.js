import { Link } from 'react-router-dom';
import '../styles/footer.css';
const Footer = () => {
    return(
        <section className="footer section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="footer-header footer-text-bold">
                            Navigate
                        </div>  
                        <div className="row">
                            <div className="col">
                                <Link to="/">Home</Link>
                                <Link to="/fields">Science Fields</Link>
                                <Link to="/">Course Types</Link>
                                <Link to="/facilities">Facilities</Link>
                            </div>
                            <div className="col">
                                <Link to="/">Awards</Link>
                                <Link to="/">Branches</Link>
                                <Link to="/">Contact Us</Link>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-sm-4">
                        <div className="footer-header footer-text-bold">
                            Stay Connected
                        </div>  
                        <p className="text-light1 footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla vitae quam volutpat aliquam efficitur varius nunc. Curabitur quis risus vitae diam faucibus egestas.</p>
                        <p><i className="fas fa-envelope"></i> <span className="ms-3">mail@eduPlateouhost.edu</span></p>
                        <div className="footer-header">
                            <p>Follow Us on:</p>
                        </div>
                        <div className="footer-header footer-text-bold">
                            <span>Follow us on</span>
                            <div className="social-icons ms-2" style={{color:'#fff'}}>
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
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="footer-header footer-text-bold">
                            About EduPlateou
                        </div>  
                        <p className="text-light1 footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla vitae quam volutpat aliquam efficitur varius nunc. Curabitur quis risus vitae diam faucibus egestas.</p>
                        <p className="footer-text-bold">More</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;