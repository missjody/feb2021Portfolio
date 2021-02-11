import React from "react";

import Header from '../components/Header';
import resumeData from '../resumeData';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

const Home = () => {


  return (

    <div>
      <Header resumeData={resumeData}/>
      <About resumeData={resumeData}/>
      <Portfolio resumeData={resumeData}/>
    </div >
  )
}

export default Home;