import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/HeaderAndFooter/Header";
import Side from "./components/HeaderAndFooter/Side"
import Home from "./components/LandingPage/Home";
import About from "./components/About/About";
import Awards from "./components/Awards/Awards";
import Blog from "./components/Blog/Blog";
import ShowAllOpenings from "./components/Career/ShowAllOpenings";
import Contact from "./components/Contact/Contact";
import Industries from "./components/Industries-optional/Industries";
import Insights from "./components/Insights-optional/Insights";
import Solutions from "./components/Solutions/Solutions";
import Footer from "./components/HeaderAndFooter/Footer";
import JobCard from './components/Career/JobCard'
import Marketing from "./components/Services/Marketing";
import Webdev from "./components/Services/Marketing";
import SingleBlog from "./components/Blog/SingleBlog";

import { TransitionGroup, CSSTransition } from 'react-transition-group';


function App() {
  const location = useLocation();
  const timeout = { enter: 800, exit: 400 };

  const getPathDepth = (location) => {
    const pathArr = location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
  }
 console.log(location)

  return (
    <TransitionGroup component="div" className="App">
      <CSSTransition timeout={timeout} className="sideSlider" mountOnEnter={false} unmountOnExit={true}>
        <div> 
          <Side/>
          <div className="content"> 
            <Header/>
            <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/about" element={ <About /> }/>
              <Route path="/awards" element={ <Awards /> }/>
              <Route path="/services/marketing" element={ <Marketing/>}/>
              <Route path="/services/webdevelopment" element={<Webdev/>}/>
              <Route path="/blog" element={ <Blog /> }/>
              <Route path="/blog/:id" element={ <SingleBlog /> }/>
              <Route path="/career" element={ <ShowAllOpenings /> }/>
              <Route path="/career/:title" element={<JobCard/>} />
              <Route path="/contact" element={ <Contact /> }/>

              <Route path="/industries" element={ <Industries /> }/>
              <Route path="/insights" element={ <Insights /> }/>
              <Route path="/solutions" element={ <Solutions /> }/>
            </Routes>
            <Footer/>
          </div>
        </div>
       </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
