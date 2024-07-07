const Edunewsletter = (props) => {

    const buttonbg = props.btnbg;
    const bordercolor = props.btnbg==='transparent' ? '#fff' : buttonbg;
    const colauto = props.colAuto === 'auto'?'-auto':'';
    return(
        <div className="row newsletter-form">
            <div className="col">
                <input 
                    type="email" 
                    placeholder="Your E-Mail" 
                    className="form-control newsletter-email"
                />
            </div>
            <div className={'col' + colauto}>
                <button 
                    className="cta cta-transparent"  
                    style={{
                        backgroundColor:buttonbg, 
                        border:'2px solid' + bordercolor
                    }}
                >
                    SUBSCRIBE
                </button>
            </div>
        </div>
    )
}

export default Edunewsletter;