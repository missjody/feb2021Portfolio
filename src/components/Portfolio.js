import React, { Component } from 'react';
import Modal from "./Modal";

export default class Portfolio extends Component {
  
  state = {
    modal: false,
    modalInfo: "",
  }

  selectModal = (info = "") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info
    })
  }
  
  render() {
    
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{

              let itemID = item.modalID;

              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} alt="project example" className="item-img"/>
                      <div className="overlay" onClick={ () => this.selectModal(itemID) }>
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                  </div>
                  <Modal 
                    resumeData={resumeData} 
                    displayModal={this.state.modal}
                    modalInfo={this.state.modalInfo}
                    closeModal={this.selectModal}
                  />
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}