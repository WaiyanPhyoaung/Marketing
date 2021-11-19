import React from "react";
import "./home.css";
import announce from "../_data/content-1.svg";
import { BsFillMouseFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <div className="left-heading">
          <p>social media</p>
          <h3>for business!</h3>
        </div>

        <div className="left-heading-para">
          <p>PERFOMANCE BASED SOCIAL MEDIA AGENCY WE ARE LOREM MEDIA</p>
        </div>
        <div className="left-heading-btn">
          <button>get a free audit</button>
        </div>
      </div>

      <div className="home-right">
        <img src={announce} alt="" />
      </div>

      <div className="home-logo-icons">
        <FaFacebook />
        <FaGooglePlus />
        <FaTwitter />
        <FaInstagram />
      </div>
      <a className="mouse-icon" href="#we">
        <BsFillMouseFill />
      </a>
    </section>
  );
}

export default Home;
