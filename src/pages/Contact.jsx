import React from "react";
import "./contact.css";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-top">
        <p>newsletter</p>
        <h4>Do you want to get Special News?</h4>
        <div className="input">
          <input type="text" placeholder="Drop Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="contact-bot">
        <div className="contact-bot-container">
          <div className="contact-bot-logo ">
            <h2>Logo.</h2>
            <p>Stay in touch</p>
            <div className="bot-logo-icons">
              <FaFacebook />
              <FaGooglePlus />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <div className="contact-bot-links">
            <h6>Quick Links</h6>
            <ul>
              <li>About</li>
              <li>Home</li>
              <li>Pricing</li>
              <li>Location</li>
              <li>Office</li>
            </ul>
          </div>
          <div className="contact-bot-hours">
            <h6>Hours</h6>
            <ul>
              <li>Monday : 9:00 - 18:00</li>
              <li>Monday : 9:00 - 18:00</li>
              <li>Monday : 9:00 - 18:00</li>
              <li>Monday : 9:00 - 18:00</li>
              <li>Monday : 9:00 - 18:00</li>
            </ul>
          </div>
          <div className="contact-bot-contact">
            <h6>Contact</h6>
            <ul>
              <li>000-000-000</li>
              <li>info@email.com</li>
              <li>New York, US</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
