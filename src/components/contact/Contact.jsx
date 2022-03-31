import React, {useContext, useRef, useState} from 'react'
import emailjs from 'emailjs-com';

import './contact.css'
import Phone from '../../image/phone.png'
import Email from '../../image/email.png'
import Address from '../../image/address.png'
import { ThemeContext } from '../../ThemeContext';

function Contact() {
  const [done, setDone] = useState(false);

  const formRef = useRef()

  const themeContext = useContext(ThemeContext)
  
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_vj7nsi6', 'template_wth0bbp', formRef.current, 'TrscnalPqzqGSkc59')
        .then((result) => {
            console.log(result.text);
            setDone(!done)
        }, (error) => {
            console.log(error.text);
    });
  }
  return (
    <div className="contact">
        <div className="contact-bg"></div>
        <div className="contact-wrapper">
            <div className="contact-left">
                <h1 className="contact-title">Let's discuss your project</h1>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <img src={Phone} alt="" className="contact-icon" />
                        +1 1234 556 75
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <img src={Email} alt="" className="contact-icon" />
                        contact@gmail.com
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <img src={Address} alt="" className="contact-icon" />
                        48/51 Tam Khuong, Khuong Thuong, Dong Da, Ha Noi
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <p className="contact-desc">
                    <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along. me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" style={{
                        backgroundColor: themeContext.state.darkMode ? '#111' : '#fff', 
                        color: themeContext.state.darkMode && '#fff'
                    }}/>
                    <input type="text" placeholder="Subject" name="user_subject" style={{
                        backgroundColor: themeContext.state.darkMode ? '#111' : '#fff', 
                        color: themeContext.state.darkMode && '#fff'
                    }}/>
                    <input type="text" placeholder="Email" name="user_email" style={{
                        backgroundColor: themeContext.state.darkMode ? '#111' : '#fff', 
                        color: themeContext.state.darkMode && '#fff'
                    }}/>
                    <textarea name="message" id="" rows="5" placeholder="Message" style={{
                        backgroundColor: themeContext.state.darkMode ? '#111' : '#fff', 
                        color: themeContext.state.darkMode && '#fff'
                    }}></textarea>
                    <button>Submit</button>
                    {done && "Send successfully. Thank you!"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact