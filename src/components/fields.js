import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/fields.css';
const Fields = () => {

   const fields = useSelector(state=>state.fieldreducer.fields);
   return(
    <>
        <section className="fields-upper section-padding text-center">
          <div className="section-header">
            <h2 className="border-center">
                We Teach Many Fields of Science
            </h2>
            <p className="text-light1 text-center mx-auto w-75"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum arcu eget arcu commodo faucibus. Donec fermentum velit urna, sed mattis orci aliquam in. Duis porttitor vestibulum nisi sit amet pellentesque.
            </p>
          </div>
        </section>
        <section className="fields-lower">
          <div className="fields-content">
            <div className="container">
                <div className="row">
                    {
                        fields.map(field=>(
                            <div className="col-md-4">
                                <div className="field-content">
                                    <img src={field.image} />
                                    <div className="field-padding">
                                        <h4>{field.heading}</h4>
                                        <p className="text-light1">{field.desc}</p>
                                        <Link 
                                            to={'/fields/'+field.heading} 
                                            className='read-more'
                                        >   
                                        Read More
                                        </Link>
                                    </div>                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
          </div>
        </section>        
    </>
   )
}

export default Fields;