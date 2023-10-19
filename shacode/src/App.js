import '@fontsource/roboto/400.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from '../src/components/Pages/Home/Home';
import About from '../src/components/Pages/About/About';
import Services from '../src/components/Pages/Services/Services';
import Portfolio from '../src/components/Pages/Portfolio/Portfolio';
import Contact from '../src/components/Pages/Contact/Contact';


export default function App() {
  return (
   <>
   <Router>
   <Navbar></Navbar>

        <div className="main-body">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>

   </Router>
   
   </>
  );
}
