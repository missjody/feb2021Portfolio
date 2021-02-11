import React from "react";


const Project = () => {
  const projectsArr = [

    {
      title: "Employee Directory",
      linkDeployed: "https://damp-cliffs-93023.herokuapp.com/",
      linkGithub: "https://github.com/missjody/employeedirectory",
      imgSrc: "./images/empDir.jpg",
      description: "Upon application load it fakes an employee directory by importing a list of people from randomuser.me api. Once on the page, the user is able to search by first name, last name, or email address to find the employee they're looking for, using state and filter. This was an individual project."
    },
    {
      title: "Surată",
      linkDeployed: "https://surata-app.herokuapp.com/",
      linkGithub: "https://github.com/missjody/productivity-app",
      imgSrc: "./images/surata1.jpg",
      description: "React password protected productivity application, including the ability to set up goals and sub tasks, a Pomodoro timer, and a meditation page. To check out, use Portfolio for the username and Password1 for the password. I created the color scheme for the page, as well as completely designing the meditation page using GSAP and React-Sound."
    },
    {
      title: "Template Engine",
      linkGithub: "https://github.com/missjody/Template_Engine_-_Employee_Summary",
      imgSrc: "./images/programgifsmol.gif",
      description: "This CLI is a great tool for creating a quick, easy to reference html page that displays your teams pertinant information. Using Inquirer and test driven development I was able to set up a set of files that connected to the provided front end files to generate user profile cards from user input. Utilizing Jest allowed me to test after each portion of code was completed on my class and subclass constructors."
    },
    {
      title: "Streamer",
      linkDeployed: "https://infinite-cliffs-65236.herokuapp.com/",
      linkGithub: "https://github.com/missjody/Streamer",
      imgSrc: "./images/streamer.jpg",
      description: "For our second group project we created a password protected connection for a database that stored what movies and tv shows are on your watch list. To check it out, use missjodyrussell@gmail.com for the username and Password1 for the password. For this project I created the layout and color scheme of the entire page, as well as working with routes to call to The Movie Database api and Chart.js."
    },
  ];

  console.log("Projects", projectsArr)

  return (

    projectsArr.map(project => (
      <div className="col s12 m6 xl3" key={project.title} >
        <div className="card">

          <div className="card-image">
            <img src={project.imgSrc} alt={project.title} className="responsive-img project-image" />

          </div>

          <div className="card-content">
            <span className="card-title" id="darkBlack"><p>
              <strong>{project.title}</strong>
            </p></span>
            <p className="project-font">  {project.description}</p>
          </div>

          <div className="card-action">
            <a href={project.linkGithub}><p className="project-font">
              GitHub Repository
            </p></a>
            <a href={project.linkDeployed}><p className="project-font">
              Deployed
            </p></a>
          </div>

        </div>
      </div>
    ))

  )
}

export default Project