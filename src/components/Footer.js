import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a  target="_blank" href={item.url}>
                    {/* <FontAwesomeIcon icon={item.icon} /> */}
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="material-icons">arrow_upward</i></a></div>
      </div>
    </footer>
    );
  }
}