import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {resumeData.name}.</h1>
               <h3 className="hide-me" style={{color:'#2b2b2b', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                        <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noreferrer">
                                {/* <FontAwesomeIcon icon={item.icon} /> */}
                                <i class={item.icon}></i>
                                </a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>
         <p className="scrolldown">
            {/* <a className="smoothscroll" href="#about"><FontAwesomeIcon icon="arrow-circle-down" /></a> */}
         </p>

      </header>
            </div>
    );
  }
}