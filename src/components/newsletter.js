import "../styles/newsletter.css";
import Edunewsletter from "./edunewsletter";

const Newsletter = () => {
    return(
        <>
            <div className="section-padding newsletter">
                <div className="container">
                    <div className="section-header">
                        <h3 className="border-left">
                            Subscribe to Newsletter
                        </h3>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="newsletter-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at auctor nisi. Sed molestie ornare dolor eu blandit. Nulla ullamcorper egestas lectus ut sodales. Ut ac lorem ex. Morbi consequat scelerisque velit ac lobortis.
                                </p>
                            </div>

                            <Edunewsletter colAuto='' btnbg='transparent' />
                        </div>
                    </div>
                    <div className="newsletter-phone-img">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter;