import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import About from './about/About.jsx'
import Contact from "./contact/Contact.jsx"
import Project from "./projects/Project.jsx"

function App() {
    
    return(
      <>
        <h1>STILL IN DEVELOPMENT wrtigkweiptugpwuiegh</h1>
        <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Projects" element={<Blogs />} />
        </Routes>
      </Router>
      <About/>
      <br></br>
      <Project/>
      <br></br>
      <Contact/>
      <br></br>
      <Footer/>
      </>
    );
}

export default App
