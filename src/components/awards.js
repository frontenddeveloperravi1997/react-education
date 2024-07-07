import '../styles/awards.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Awards = () => {

    const setting = {
        dots: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow:(<button type="button" class="slick-prev">
                <img src="images/slider/left.png" width="20" height="30" alt="arrow"/>
            </button>),
        nextArrow:(<button type="button" class="slick-next">
            <img src="images/slider/right.png" width="20" height="30" alt="arrow"/>
        </button>),            
    }
    return(
        <>
            <div className="section-padding awards">
                <div className="section-header text-center">
                    <h2>
                        Award Winner for Creative Education System
                    </h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac dui consectetur, pharetra massa nec, condimentum elit. Sed posuere elit at lorem tristique, sit amet semper velit rhoncus.<br/> Etiam efficitur felis vitae ante posuere faucibus. Nam condimentum diam vel condimentum dapibus. Nunc eget condimentum massa. Praesent pulvinar enim nibh.
                    </p>
                </div>

                <div className="awards-container container">
                    <Slider {...setting} className="slick-awards">
                        <div className="award-item">
                            <img src="images/awards/1.jpg" alt="award" />
                        </div>
                        <div className="award-item">
                            <img src="images/awards/2.jpg" alt="award" />
                        </div>
                        <div className="award-item">
                            <img src="images/awards/3.jpg" alt="award" />
                        </div>
                        <div className="award-item">
                            <img src="images/awards/4.jpg" alt="award" />
                        </div>
                        <div className="award-item">
                            <img src="images/awards/5.jpg" alt="award" />
                        </div>
                        <div className="award-item">
                            <img src="images/awards/6.jpg" alt="award" />
                        </div>
                        <div className="award-item">
                            <img src="images/awards/3.jpg" alt="award" />
                        </div>
                        <div className="award-item">
                            <img src="images/awards/4.jpg" alt="award" />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Awards;