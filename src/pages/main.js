import Footerbottom from "../components/footerbottom";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Facilities from "../components/facilities";
import Awards from "../components/awards";
import Class from "../components/class";
import Doctoral from "../components/doctoral";
import Fields from "../components/fields";
import Newsletter from "../components/newsletter";
import Power from "../components/power";
import Prof from "../components/prof";
import Slider from "../components/slider";
import Form from "../components/form";
import Subscribe from "../components/subscribe";
const Main = () => {
    return(
        <>
            <Slider/>
            <Power/>
            <Prof/>
            <Fields/>
            <Doctoral/>
            <Class/>
            <Newsletter/>
            <Awards/>
            <Facilities />
            <Contact />
            <Form/>
            <Subscribe />
            <Footer />
            <Footerbottom />
        </>
    )
}

export default Main;