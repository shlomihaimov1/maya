import React from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from 'react-router-dom';

// Css
import './App.css';

// Components
import MainBar from './Components/mainbar.js';
import SiteFooter from './Components/sitefooter.js';


// Pages
import Home from './Pages/home.js';
import Questionnaire from './Pages/questionnaire.js';
// import About from './Pages/about.js';
// import Contact from './Pages/contact.js';
// import NotFound from './Pages/notfound.js';

import OldHome from './Pages/homeold.js';

function oldhome() {
  return <OldHome />;
}

// Functions
function home() {
  return <Home />;
}

function questionnaire() {
  return <Questionnaire />;
}

// function about() {
//   return About();
// }

// function contact() {
//   return <Contact />;
// }

// function notFound() {
//   return <NotFound />;
// }

function App() {

  return (
    <div className='outer-wrapper'>
        {/* <MainBar /> */}
        <div className='wrapper'>
          <Router>
            <Routes>
              <Route excat path="/" element={ home() }/>
              <Route path="/old" element={ oldhome() }/>
              <Route path="/questionnaire" element={ questionnaire() }/>
              {/* <Route path="/login" element={ logIn() } />
              <Route path="/product" element={ product() } />
              <Route path="/about" element={ about() } />
              <Route path="/contact" element={ contact() } />
              <Route path="*" element={ notFound() } /> */}
            </Routes>
          </Router>
        </div>
        {/* <SiteFooter /> */}
    </div>
  );
}

export default App;