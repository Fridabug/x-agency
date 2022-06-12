import { Routes , Route } from "react-router-dom";
import Header from "./components/HeaderAndFooter/Header";
import Side from "./components/HeaderAndFooter/Side"
import Home from "./components/LandingPage/Home";
import About from "./components/About/About";
import Awards from "./components/Awards/Awards";
import Blog from "./components/Blog/Blog";
import Career from "./components/Career/Career";
import Contact from "./components/Contact/Contact";
import Industries from "./components/Industries-optional/Industries";
import Insights from "./components/Insights-optional/Insights";
import Solutions from "./components/Solutions/Solutions";
import Footer from "./components/HeaderAndFooter/Footer";
import Marketing from "./components/Services/Marketing";
import Webdev from "./components/Services/Marketing";
import SingleBlog from "./components/Blog/SingleBlog";


function App() {
  return (
    <div className="main">
       <Side/>
       <div> 
        <Header/>
        
        <Routes>
            <Route path="/" element={ <Home/> }/>

            <Route path="/about" element={ <About /> }/>
            <Route path="/awards" element={ <Awards /> }/>
            <Route path="/services/marketing" element={ <Marketing/>}/>
            <Route path="/services/webdevelopment" element={<Webdev/>}/>
            <Route path="/blog" element={ <Blog /> }/>
            <Route path="/blog/:id" element={ <SingleBlog /> }/>
            <Route path="/career" element={ <Career /> }/>
            <Route path="/contact" element={ <Contact /> }/>

            <Route path="/industries" element={ <Industries /> }/>
            <Route path="/insights" element={ <Insights /> }/>
            <Route path="/solutions" element={ <Solutions /> }/>
            
            <Route path="/*" element={ <Home/> }/>

        </Routes>

        <Footer/>
       </div>
       
    </div>
  );
}

export default App;
