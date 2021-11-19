import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Price from "./pages/Price";
import Services from "./pages/Services";
import We from "./pages/We";
import "./app.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <We />
      <Services />
      <Price />
      <Contact />
    </div>
  );
}

export default App;
