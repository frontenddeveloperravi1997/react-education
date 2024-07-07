import '../styles/facilities.css';
import { useSelector } from 'react-redux';

const Facilities = () => {
    const facilities = useSelector(state=>state.facilityreducer.facilities)
    return(
        <>
            <div  className="section-padding facilities">
                <div className="section-header text-center">
                    <h2 className="border-center">
                        We Provide Our Students with Convenient Facilities
                    </h2>
                    <p className="text-light1 w-50 mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis aliquam pretium. Quisque ac sem porta lacus malesuada mattis. Pellentesque molestie enim id ante posuere feugiat. 
                    </p>
                </div>
            </div>
            <div className="facilities-lower">
                <div className="container">
                    <div className="facilities-container">
                        {facilities.slice(0,6).map((facility)=>{
                            if(facility.id==1){
                                return <div className="facility-item id1">
                                    <p>{facility.name}</p>
                                </div>;
                            }
                            if(facility.id==2){
                                return <div className="facility-item id2">
                                    <p>{facility.name}</p>                                    
                                </div>;
                            }
                            if(facility.id==3){
                                return <div className="facility-item id3">
                                    <p>{facility.name}</p>                                    
                                </div>;
                            }
                            if(facility.id==4){
                                return <div className="facility-item id4">
                                    <p>{facility.name}</p>                                    
                                </div>;
                            }
                            if(facility.id==5){
                                return <div className="facility-item id5">
                                    <p>{facility.name}</p>                                    
                                </div>;
                            }
                            if(facility.id==6){
                                return <div className="facility-item id6">
                                    <p>{facility.name}</p>                                    
                                </div>;
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Facilities;