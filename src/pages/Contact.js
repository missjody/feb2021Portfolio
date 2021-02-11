import React from "react";

const Contact = () => {
  return (
    <div className="container fluid">

      <div className="row">
        <div className="col s6 ">
          <h4 id="darkOrange">reach out</h4>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="contact-font">Thank you so much for taking a moment to get to know me and some of the projects that I've been working on.</p>
          <p className="contact-font">Here are some links and ways to contact me in case you have more questions!</p>

          <div className="collection">
            <a href="https://github.com/missjody" className="collection-item">GitHub</a>
            <a href="https://www.linkedin.com/in/missjodyrussell/" className="collection-item ">LinkedIn</a>
            <a href="./files/Bootcamp Resume.pdf" className="collection-item">Resume</a>
            <a href="mailto:missjodyrussell@gmail.com?Subject=Hellow%Again!" className="collection-item">Email Me</a>
            <a className="collection-item">Or call: 405 780 4121</a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact;
