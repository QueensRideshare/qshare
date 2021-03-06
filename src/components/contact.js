import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom'; //Substitute for <a> tag

export default class Contact extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let centerStyle = {
      textAlign:"center"
    }
    let marginTop = {
      marginTop: "25px"
    }
    return (
      <div className="landing-page">
        <div className="jumbotron" style={centerStyle}>
          <h1> Contact Us </h1>
        </div>
        <div className="row tag-lines">
            <div className="col-xs-12 col-sm-4">
                <h5>Feedback</h5>
                <p>Are you enjoying the QShare user experience?  Can you find the rides you&#39;re looking for?  What do you not like?  Any and all feedback is greatly appreciated.</p>
            </div>
            <div className="col-xs-12 col-sm-4">
                <h5>Questions</h5>
                <p>Do you have questions for the QShare team?  Example: How do you get those 🔥 topagraphic lines?  Or, how far away is the sun? </p>
            </div>
            <div className="col-xs-12 col-sm-4">
                <h5>Feature Requests</h5>
                <p>How can we make the site better for you?  More lines in the background?  We CAN do that!  More ride input fields?</p>
            </div>
        </div>
        <div className="row more-info">
          <div className="planned-features col-xs-12 col-sm-6 col-md-4">
              <h5>Planned Features</h5>
              <ul>
              <li><p>Google maps integration</p></li>
              <li><p>Accept / deny passengers joining ride</p></li>
              <li><p>Required <b>@queensu.ca</b> emails to use platform</p></li>
              <li><p>Full email notification system</p></li>
              <li><p><b>Ride requests</b></p></li>
              </ul>
          </div>
          <div className="contact-info col-xs-12 col-sm-6 col-md-4">
            <h5>Get In Touch</h5>
            <ul>
            <li><p>Development Inquiries: <a href={"mailto:dev@qshare.ca"}>dev@qshare.ca</a></p></li>
            <li><p>Business Inquiries: <a href={"mailto:biz@qshare.ca"}>biz@qshare.ca</a></p></li>
            </ul>
          </div>
        </div>
        <div className="root-buttons" style={marginTop}>
          <div className="col-xs-12 col-sm-6" style={centerStyle}>
            <Link className="continue-btn btn button_sliding_bg_green" to="/index">Home<span>  <i className="fas fa-car"/></span></Link>
          </div>
          <div className="col-xs-12 col-sm-6" style={centerStyle}>
            <a className="continue-btn btn button_sliding_bg_orange" href="https://qshare.typeform.com/to/Fzb9e5" target="_blank" rel="noopener noreferrer">Feedback<span>  <i className="fas fa-comments"/></span></a>
          </div>
        </div>
      </div>
    );
  }
}
