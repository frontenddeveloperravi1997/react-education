import '../styles/contact.css';
const Contact = () => {
    return (
        <>
            <section className="section-padding contact">
                <div className="section-header text-center">
                    <h2 className="border-center">Find the Nearest Branch to You</h2>
                </div>
                <div className="contact-container">
                    <div className="container">
                        <div className="row">
                            <div className="contact-text col-sm-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at cursus lectus. Morbi sit amet.</p>
                                <div className="form-container">

                                    <div className="edu-select">
                                        <select>
                                            <option value="us" selected>United States</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="aus">Australia</option>
                                            <option value="ind">India</option>
                                            <option value="paks">Pakistan</option>
                                            <option value="ban">Bangladesh</option>
                                        </select>
                                    </div>
                                    
                                    <div className="edu-select">
                                        <select>
                                            <option value="ny" selected>New York</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value>="aus">Australia</option>
                                            <option value="ind">India</option>
                                            <option value="paks">Pakistan</option>
                                            <option value="ban">Bangladesh</option>
                                        </select>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="edu-map col-sm-7">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.631815847368!2d77.0721545754956!3d28.49063277574257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196afa4ef041%3A0xab97b1e2b11c55ff!2sAltudo!5e0!3m2!1sen!2sin!4v1719508373260!5m2!1sen!2sin" width="100%" height="500"></iframe>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae commodo leo, eget eleifend odio. Donec dictum ultrices metus, nec scelerisque massa vehicula eget. Quisque rutrum nec quam a egestas. Nam in lectus a sapien pharetra efficitur ut vel eros. Etiam aliquam ultricies hendrerit. Vestibulum elit orci, porttitor ac dictum.
                            </p>
                            <div className="more-text" style={{color:'#23d789',cursor:'pointer'}}>More</div>

                            <div className="address-details mt-3">
                                <p><span style={{fontWeight:'bold'}}>Address : </span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae commodo leo, eget eleifend odio.</p>
                            </div>

                            <div className="tel-detail mt-3">
                                <p><span style={{fontWeight:'bold'}}>Tel : </span>  +1-800-xxxx-xxxx-xx1 +2-800-xxxx-xxxx-xx2
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Contact