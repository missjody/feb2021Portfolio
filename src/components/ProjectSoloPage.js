import React, { Component } from 'react';

// this page needs to be passed the location in the array that the selection 
// is at so that it populates the page with that project

// flesh out once info is passing to page correctly

export default class ProjectSoloPage extends Component {
  render() {
      
    let resumeData = this.props.resumeData;

    console.log("resumeData ", resumeData)
    return (
      <div>
          <h1> Test {resumeData} </h1>

          {/* Project Image */}
          {/* Project Title */}
          {/* Project Link 1  */}
          {/* Project Link 2 if true */}
          {/* Project Description */}

    </div>
    )
  }
}