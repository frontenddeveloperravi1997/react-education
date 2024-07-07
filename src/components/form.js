import { useState } from "react";
import '../styles/form.css';
const Form = () => {
    const [first,setFirst] = useState('');
    const  [firstnameerror,setFirstNameerror] = useState('');

    const [last,setLast] = useState('');
    const [lastnameerror,setLastNameerror] = useState('');

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState('');


    function firstNameChange(event){
        setFirst(event.target.value);
        if(first.length>=5 && firstnameerror!==''){
            setFirstNameerror('');
        }
    }

    function lastNameChange(event){
        setFirst(event.target.value);
        if(last.length>=5 && lastnameerror!==''){
            setFirstNameerror('');
        }
    }

    const messageChange = (e) => {
        setMessage(e.target.value);
        if (e.target.value.length >= 5) {
        setMessageError('');
        }
    };

    const handleBlur = (e) => {
        const email = e.target.value;
        setEmail(email);
        if (!validateEmail(email)) {
            setError('Invalid email address');
        } else {
            setError('');
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };  

    const eduformsubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
          setError('Invalid email address');
        } else {
          setError('');
          // Submit the form or handle the valid email
          console.log('Form submitted with email:', email);
        }
      };
    
    function firstnameblur(event){
        if(first.length<5){
            setFirstNameerror('First name should have a minimum of 5 characters');
        } else {
            setFirstNameerror('');
        }
    }

    function lastnameblur(event){
        if(first.length<5){
            setLastNameerror('Last name should have a minimum of 5 characters');
        } else {
            setLastNameerror('');
        }
    }

    const messageBlur = () => {
        if (message.length < 5) {
          setMessageError('Message must be at least 5 characters long.');
        } else {
          setMessageError('');
        }
      };

      const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
          if (message.length < 5) {
            e.preventDefault();
            setMessageError('Message must be at least 5 characters long.');
          } else {
            setMessageError('');
          }
        }
      };  

    return(
        <>
            <section className="section-padding edu-form">
                <div className="container">
                    <div className="row edu-form-content" >
                        <div className="col-sm-7">
                            <div className="form-location-content">
                                <dqiv className="section-header">
                                    <h3 className="border-left">
                                        Ask Something or Leave Message
                                    </h3> 
                                </dqiv>
                                <p className="text-light1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta, quam eget tempor accumsan, tortor tellus malesuada lacus, gravida porta dui ex et leo. Aenean volutpat maximus quam, in euismod libero vestibulum at. Quisque ex erat, finibus vel purus id, dapibus fringilla magna. Curabitur vel metus tortor. Sed finibus sed.
                                </p>
                                <p className="edu-bold">
                                    Main Branch :
                                </p>
                                <p>
                                    <span className="edu-address">
                                        <i className="fas fa-map-marked-alt"></i>
                                    </span>
                                    <span className="text-light1">
                                       Nunc non blandit ligula. Donec risus enim, gravida et porta a, consectetur at neque. Interdum et malesuada fames ac ante.
                                    </span>  
                                </p>
                                <p>
                                    <span className="edu-phone">
                                        <i className="fas fa-phone"></i>
                                    </span>
                                    <span className="text-light1">
                                        +1-800-xxxx-xxxx-xx1 +1-800-xxxx-xxxx-xx2
                                    </span>
                                </p>
                                <p>
                                    <span className="edu-mail">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="text-light1">
                                        mail@eduPlateouhost.edu
                                    </span>                                    
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div className="form-container">
                                <form onSubmit={eduformsubmit}>
                                    <input
                                        type="text" 
                                        className="form-control first-name edu-form-input p-32" name="first-name" 
                                        placeholder="First Name"
                                        onChange={firstNameChange} 
                                        onBlur={firstnameblur}
                                        required 
                                        style={
                                            firstnameerror !=='' 
                                            ? {border:'2px solid red'} 
                                            : {border:'none'}
                                        }
                                    />

                                    {firstnameerror!==''?(<p>{firstnameerror}</p>):(
                                        ''
                                    )}
                                    
                                    
                                    <input 
                                        type="text"
                                        className="form-control last-name edu-form-input p-32" 
                                        name="last-name" 
                                        placeholder="Last Name" 
                                        onChange={lastNameChange} 
                                        onBlur={lastnameblur}
                                        required 
                                        style={
                                            lastnameerror !=='' 
                                            ? {border:'2px solid red'} 
                                            : {border:'none'}
                                        } 
                                    />

                                    {lastnameerror!==''?(<p>{lastnameerror}</p>):(
                                        ''
                                    )}

                                <input
                                        type="email"
                                        className={"form-control email edu-form-input p-32"}
                                        name="email"
                                        placeholder="E-Mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={handleBlur}
                                        required                                    
                                        style={
                                        error !== '' 
                                        ? {border:'2px solid red'} 
                                        : {border:'none'}
                                        }
                                    />
                                    {error && <p>{error}</p>}
                                    
                                <textarea
                                    className="form-control edu-form-textarea message p-32"
                                    rows={8}
                                    placeholder="Your Message"
                                    onChange={messageChange}
                                    onBlur={messageBlur}
                                    onKeyDown={handleKeyDown}
                                    required
                                    style={
                                    messageError !== '' 
                                        ? { border: '2px solid red' } 
                                        : { border: 'none' }
                                    }
                                />
                                {messageError !== '' ? <p>{messageError}</p> : ''}

                                    <input
                                        type="submit" 
                                        value="submit"
                                        className="cta cta-transparent edu-form-submit"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form;