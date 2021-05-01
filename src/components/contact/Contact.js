import React from "react";
import "./contact.scss";
import backdrop from "../../img/backdrop.svg";
import { LinkedIn, Mail, GitHub } from "@material-ui/icons";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={backdrop} alt="" />
      </div>
      <div className="right">
        <div className="contact-container">
          <h1>
            Contact<span>.</span>
          </h1>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:sintha.sinurat@gmail.com">
              sintha.sinurat@gmail.com
            </a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href="https://www.linkedin.com/in/sinthads">
              linkedin.com/in/sinthads
            </a>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a href="https://www.github.com/sinthads">github.com/sinthads</a>
          </div>
        </div>
        <footer>
          <p>© 2021 Sintha Dwiferma Sinurat</p>
        </footer>
      </div>
    </div>
  );
}

export default Contact;
