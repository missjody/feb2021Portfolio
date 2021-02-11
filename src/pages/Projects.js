import React from "react";
import Project from "../components/Project/Project"


const Projects = () => {

  return (
    <div className="container fluid">

      <div className="row">
        <div className="col s6 ">
          <h4 id="darkOrange">projects</h4>
        </div>
      </div>

      <div className="row">

        <Project />

      </div>
    </div>

  )
}

export default Projects;

