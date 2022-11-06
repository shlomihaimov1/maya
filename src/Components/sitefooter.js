import React, { useState } from 'react';

// CSS
import './css/sitefooter.css'

export default function SiteFooter() {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  function sendEmail(e) {
    e.preventDefault();

    console.log('submit');
  }

  return(
    <section className='footer'>
        {/* <div className='contact-us-wrapper'>
          <h1 className='contact-us-title'>לקידום ממומן:</h1>
        
          <form className='contact-us-form' onSubmit={sendEmail} method="post">
            <div className='contact-us'>
              <input onChange={(e) => setName(e.target.value) } className='input-contact' type="input" placeholder="שם:" name="name" required/>
              <input onChange={(e) => setPhone(e.target.value) } className='input-contact' type="input" placeholder="טלפון:" name="phone" required/>
              <input onChange={(e) => setEmail(e.target.value) } className='input-contact' type="input" placeholder="אימייל:" name="email" required/>
            </div>

            <div className='subimitation'>   
              <button className='submit-contact' type="submit">שלח\י מייל</button>
            </div>
          </form>
        </div> */}

        {/* <div>
          <div className='icons'>
            <a className='icon-link' href="https://www.instagram.com/orlizaurov/" target="_blank"><img src="./icons/instagram.png" height ="20" width="20" /></a>
            <a className='icon-link' href="https://www.facebook.com/profile.php?id=100005022487732" target="_blank"><img src="./icons/facebook.png" height ="20" width="20" /></a>
            <a className='icon-link' href="https://wa.me/972543083244" target="_blank"><img src="./icons/whatsapp.png" height ="20" width="20" /></a>
          </div>
        </div> */}

        <div className='footfooter-wrapper'>
            <div className='footfooter'>
                <p className='siteuponly'>זכויות שמורות © SiteUp</p>
                <p className='credits'>Powered By Shlomi Haimov & Noam Globerman</p>
            </div>    
        </div>
    </section>
  );
}