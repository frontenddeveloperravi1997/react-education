const Footerbottom = () => {
    return(
        <div 
            className="footer-bottom" 
            style={{height:'50px',lineHeight:'50px',borderTop:'1px solid #cecece'}}
        >
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p style={{fontSize:'12px'}}>Copyright &copy; 2019 EduPlateou. All Rights Reserved.</p>
                    </div>
                    <div className="col">
                        <p style={{textAlign:'right',fontSize:'12px'}}>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footerbottom;