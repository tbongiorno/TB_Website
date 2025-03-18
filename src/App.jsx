import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";

import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import About from './Components/About.jsx'
import Contact from "./Components/Contact.jsx"
import Projects from "./Components/Projects.jsx"


export default function App() {
    return(
      <>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<About/>}/>
              <Route path="Projects" element={<Projects/>}/>
              <Route path="Contact" element={<Contact/>}/>
           </Route>
          </Routes>
       </BrowserRouter>
       <Footer/>
      </>
      
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
