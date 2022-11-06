import React, { useEffect } from 'react';

// CSS
import './css/home.css';

// Buttons
import './css/button1.css';
import './css/button2.css';

export default function Home() {
  
    // Runs once
    useEffect(() => {
        // Set evet listener for animation on scroll
        window.addEventListener('scroll', () => {
            checkElementLocation();
          });
      },[]);

    // Only when scroll to object fade in
    function checkElementLocation() {
        // Get all element with scroll class
        let fadeOnScrolls = document.getElementsByClassName("fade-in-on-scroll");
        
        // For steps
        // Go through them
        for(let fadeOnScroll of fadeOnScrolls)
        {
            // Get heights of screen and object (top&bottom)
            let top_of_element = fadeOnScroll.offsetTop;
            let bottom_of_element = fadeOnScroll.offsetTop + fadeOnScroll.clientHeight;
            let bottom_of_screen = window.scrollY + window.innerHeight;
            let top_of_screen = window.scrollY;
        
            // Check where scroll view as oppose to object
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !fadeOnScroll.classList.contains("is-visible")) {
                // Activate fade 
                fadeOnScroll.classList.add("is-visible");
            }
        }

        // For pics
        // Get all element with scroll class
        let fadeOnScrollPics = document.getElementsByClassName("fade-in-on-scroll-pics");

        // Go through them
        for(let fadeOnScrollPic of fadeOnScrollPics)
        {
            // Get heights of screen and object (top&bottom)
            let top_of_element = fadeOnScrollPic.offsetTop;
            let bottom_of_element = fadeOnScrollPic.offsetTop + fadeOnScrollPic.clientHeight;
            let bottom_of_screen = window.scrollY + window.innerHeight;
            let top_of_screen = window.scrollY;
        
            // Check where scroll view as oppose to object
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !fadeOnScrollPic.classList.contains("is-visible")) {
                // Activate fade 
                fadeOnScrollPic.classList.add("is-visible");
            }
        }

        // For list
        // Get all element with scroll class
        let listScrolls = document.getElementsByClassName("rolldown-lists");
        
        // Go through them
        for(let listScroll of listScrolls)
        {
            // Get heights of screen and object (top&bottom)
            let top_of_element = listScroll.offsetTop;
            let bottom_of_element = listScroll.offsetTop + listScroll.clientHeight;
            let bottom_of_screen = window.scrollY + window.innerHeight;
            let top_of_screen = window.scrollY;
            
            // Check where scroll view as oppose to object
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                // Activate fade 
                
                setTimeout(function () {
                    listScroll.style.opacity = '1';
                    listScroll.classList.add('rolldown-list');
                    
                    // Get all lis for better animation
                    let smoothlis = document.getElementsByClassName("li");
                    
                    let i = 1;

                    // Go through them
                    for(let smoothli of smoothlis)
                    {
                        let delay = (i / 4) + 's';
                        
                        smoothli.style.webkitAnimationDelay = delay;
                        smoothli.style.mozAnimationDelay = delay;
                        smoothli.style.animationDelay = delay;
                        i++;
                    }
                }, 1);
            }
        }

        // For quotes
        // Get all element with scroll class
        let fadeOnScrollQuotes = document.getElementsByClassName("fade-in-on-scroll-quotes");

        // Go through them
        for(let fadeOnScrollQuote of fadeOnScrollQuotes)
        {
            // Get heights of screen and object (top&bottom)
            let top_of_element = fadeOnScrollQuote.offsetTop;
            let bottom_of_element = fadeOnScrollQuote.offsetTop + fadeOnScrollQuote.clientHeight;
            let bottom_of_screen = window.scrollY + window.innerHeight;
            let top_of_screen = window.scrollY;
        
            // Check where scroll view as oppose to object
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !fadeOnScrollQuote.classList.contains("is-visible")) {
                // Activate fade 
                fadeOnScrollQuote.classList.add("is-visible");
            }
        }
    }  

    return (
        <div>
            <section id='First-Section' className='first-section'>
                <div className='logo-wrapper'>
                    <img src='./images/mainlogo.png' alt='logo' className='logo'></img>
                </div>

                <div className='first-section-content'>
                    <div className='home-content-wrapper'>
                        <div className='home-title-wrapper'>
                            <h1 className='home-title'>אתר אינטרנט  <br/> בקליק</h1>
                        </div>

                        <div className='button1body button1html'>
                            <svg className='button1svg' xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <defs>
                                    <filter id="gooey">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                                        <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                                    </filter>
                                </defs>
                            </svg>
                            
                            <a id="gooey-button" href='questionnaire'>  
                            {/* onClick={letsGetStarted}> */}
                                אני רוצה אתר עכשיו
                                <span className="bubbles">
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                    <span className="bubble"></span>
                                </span>
                            </a>  
                        </div>
                    </div>

                    <div className='main-video-wrapper'>
                        <video
                            id='video'
                            className='main-video'
                            src="./videos/homevideo.mp4"
                            muted
                            autoPlay
                            loop 
                        />
                    </div>
                </div>
            </section>

            <section id='Second-Section' className='fade-in-on-scroll second-section'>
                <div id='Second-Section-Content' className='second-section-content'>
                    <div>
                        <h1 className='second-section-text'>
                            <span className='second-section-text-logo'>WEBITT </span>
                            <span>שלוש שניות ויש לך אתר.</span>
                        </h1>
                    </div>
                    
                    <div>
                        <p className='second-section-sub-text'>אז איך זה עובד?</p>
                    </div>
                </div>
            </section>

            <section id='Third-Section' className='step-section'>
                <div className='step-section-content'>
                    <div id='step1-image' className='step-img-wrapper fade-in-on-scroll-pics'>
                        <img className='step-img float-object' src='./images/step01.png'></img>
                    </div>

                    <div className='step-content fade-in-on-scroll list'>
                        <p className='step-describtion'>בחרו תבנית שתרצו שעליה ישב האתר והתוכן</p>
                    </div>
                </div>

                <div className='step-section-content'>
                    <div id='step2-image' className='step-img-wrapper fade-in-on-scroll-pics'>
                        <img className='step-img float-object' src='./images/step02.png'></img>
                    </div>

                    <div className='step-content fade-in-on-scroll list'>
                        <p className='step-describtion'>ענו על כמה שאלות, העלו תמונות וגם את הלוגו</p>
                    </div>
                </div>
            </section>

            <section id='Fourth-Section' className='step-section'>
                <div className='step-section-content'>
                    <div id='step3-image' className='step-img-wrapper fade-in-on-scroll-pics'>
                        <img className='step-img float-object' src='./images/step03.png'></img>
                    </div>

                    <div className='step-content fade-in-on-scroll list'>
                        <p className='step-describtion'>בחרו כתובת אינטרנט לעסק</p>
                    </div>
                </div>

                <div className='step-section-content'>
                    <div id='step4-image' className='step-img-wrapper fade-in-on-scroll-pics'>
                        <img className='step-img float-object' src='./images/step04.png'></img>
                    </div>

                    <div className='step-content fade-in-on-scroll list'>
                        <p className='step-describtion'>בחרו חבילת שיווק לפי הצורך</p>
                    </div>
                </div>
            </section>

            <section id='Fifth-Section' className='step-section'>
                <div className='step-section-content'>
                    <div id='step5-image' className='step-img-wrapper fade-in-on-scroll-pics'>
                        <img className='step-img float-object' src='./images/step05.png'></img>
                    </div>

                    <div className='step-content fade-in-on-scroll list'>
                        <p className='step-describtion'>עכשיו רק נשאר להנות מהתוצאות</p>
                    </div>
                </div>
                
                <div className='button2-wrapper fade-in-on-scroll-pics'>
                    <div className="container-button">
                        <div className="btn">
                            <a className='a-button2' href="questionnaire">לבניית אתר ברגע</a>
                        </div>  
                    </div>
                </div>

            </section>

            <section id='Sixth-Section' className='sixth-section'>
                <div className='sixth-section-content'>
                    <p className='why-us-title fade-in-on-scroll-pics'>הטכנולוגיה שלנו היא מהמתקדמות בשוק ליצירת אתרים ברגע. אתרים במגוון מטרות ועיצובים.</p>

                    <ul className="rolldown-lists" id="why-use-list">
                        <li className='li'>
                            <p className='list-cell'>אפשרות לקדם את האתר</p>
                        </li>
                        <li className='li'>
                            <p className='list-cell'>רכישת כתובת אתר אישית</p>
                        </li>
                        <li className='li'>
                            <p className='list-cell'>עיצוב יחודי עבור כל עסק</p>
                        </li>
                        <li className='li'>
                            <p className='list-cell'>מיקום העסק במפות</p>
                        </li>
                        <li className='li'>
                            <p className='list-cell'>שירות לקוחות זמין</p>
                        </li>
                    </ul> 
                </div>
            </section>

            <section id='Seventh-Section' className='seventh-section'>
                <div className='seventh-section-content'>
                    <p className='quotes-title fade-in-on-scroll-pics'>אז מי כבר בחר בנו?</p>

                    <div className='quotes'>
                        <div className='quote fade-in-on-scroll-quotes'>
                            <span className='quote-symbol'>&#8221;</span>

                            <p className='quote-content'>  
                                בהתחלה הייתי סקפטי לכל הנושא , כבר היה לי אתר כלשהו אבל לא הייתי מרוצה מהתוצאות שלו , מילאתי את האיפיון , רכשתי חבילת קידום לחודש , ואחרי חודש כבר ראיתי תוצאות שבחיים לא ראיתי
                            </p>

                            <p className='qoute-from'>עמית, מנכל בר מזון בדרום</p>
                        </div>

                        <div className='quote fade-in-on-scroll-quotes'>
                            <span className='quote-symbol'>&#8221;</span>

                            <p className='quote-content'>  
                                קניתי אתר בסיסי וישר התאהבתי , הכל כל כך פשוט וקל לעין , ממליצה בחום !!                                 
                            </p>

                            <p className='qoute-from'>מאיה, בעלים של סוכנות שיווק</p>
                        </div>

                        <div className='quote fade-in-on-scroll-quotes'>
                            <span className='quote-symbol'>&#8221;</span>

                            <p className='quote-content'>  
                                האתר הראשון שאני בונה ונראה לי שנפלתי בטוב , קיבלתי את האתר שתמיד רציתי ב3 שניות , יום אחרי זה פנה אליי נציג ושאל אם אני רוצה להוסיף שינויים , לקחתי גם על הדרך חבילת קידום והתוצאות בשמיים ! תודה !!
                            </p>

                            <p className='qoute-from'>יותם, בעלים של חברת תוספי תזונה</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='Last-Section' className='last-section'>
                <div className='last-section-wrapper'>
                    <div className='contact-logo-wrapper fade-in-on-scroll'>
                        <div className='contact-logo-wrapper-wrapper'>
                            <img src='./images/mainlogo.png' alt='logo' className='contact-logo'></img>
                        </div>
                    </div>

                    <div className='contact-text-wrapper fade-in-on-scroll-quotes'>
                        <h1 className='contact-title'>צור קשר</h1>
                        
                        <div>
                            <p>052-509-1144</p>
                            <p>fixsite20@gmail.com</p>
                        </div>

                        <div className='icons'>
                            <a href='https://wa.me/972525091144' className='icon-link' target="_blank"><img src='./icons/whatsapp-icon.png' className='icon'></img></a>
                            <a href='' className='icon-link' target="_blank"><img src='./icons/facebook-icon.png' className='icon'></img></a>
                            <a href='' className='icon-link' target="_blank"><img src='./icons/instagram-icon.png' className='icon'></img></a>
                        </div>
                    </div>
                </div>

                <div className='footfooter-wrapper'>
                    <div className='footfooter'>
                        <p className='siteuponly'>זכויות שמורות © WebBitToday</p>
                        <p className='credits'>Powered By Shlomi Haimov & Noam Globerman</p>
                    </div>    
                </div>
            </section>

            <a href='https://wa.me/972525091144' target="_blank">
                <div className="css-gwc7y7" tabIndex="0" role="button" aria-label="Live Customize">
                    <div>
                        <button className="css-gwc7y6 css-1do9gth" tabIndex="0" type="button">
                            <img src='./icons/whatsapp.png' height="20" width="20"></img>
                        </button>
                    </div>
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </div>
            </a>
        </div>
    );
}