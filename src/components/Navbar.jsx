import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../_data/logo-long.svg";
import { DiGhostSmall } from "react-icons/di";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [showLists, setShowLists] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) setNavActive(true);
      else setNavActive(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("removed");
      });
    };
  }, []);

  return (
    <section className={navActive ? "navbar active" : "navbar"}>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="menu-btn" onClick={() => setShowLists(!showLists)}>
        <DiGhostSmall color="white" size="2rem" />
      </div>

      <ul className={showLists ? "nav-links active" : "nav-links"}>
        <a href="#home">
          <li onClick={() => setShowLists(false)}>home</li>
        </a>
        <a href="#we">
          <li onClick={() => setShowLists(false)}>About</li>
        </a>
        <a href="#services">
          <li onClick={() => setShowLists(false)}>Services</li>
        </a>
        <a href="#price">
          <li onClick={() => setShowLists(false)}>Pricing</li>
        </a>
        <a href="#contact">
          <li onClick={() => setShowLists(false)}>Contact</li>
        </a>
      </ul>
    </section>
  );
}

export default Navbar;
