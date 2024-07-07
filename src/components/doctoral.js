import '../styles/doctoral.css';

const   Doctoral = () => {
    return(
        <>
            <section className="section-padding doctoral">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-header">
                                <h3 className="border-left">From Diploma to Postdoctoral</h3>
                            </div>
                            <p className="doctoral-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae iaculis libero, non sodales purus. Nunc nec consectetur lectus. Integer eget rutrum urna. Donec eu dictum purus.
                            </p>
                            <button className="cta cta1 doctoral-button">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="doctoral-right">

                </div>
            </section>
        </>
    )
}

export default Doctoral;