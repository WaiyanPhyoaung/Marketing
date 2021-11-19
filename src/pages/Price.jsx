import React from "react";
import "./price.css";

function Price() {
  return (
    <section id="price" className="price">
      <div className="price-top">
        <p>pricing</p>
        <h4>Our pricing</h4>
      </div>
      <div className="price-bot">
        <div className="price-bot-container">
          <div className="price-card">
            <div className="price-card-header">
              <h4>Golden Package</h4>
            </div>
            <div className="price-card-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus.{" "}
              </p>
            </div>
            <div className="price-card-price">
              <h4>$ 140</h4>
            </div>
            <div className="price-card-btn">
              <button>See details</button>
            </div>
          </div>
          <div className="price-card">
            <div className="price-card-header">
              <h4>Golden Package</h4>
            </div>
            <div className="price-card-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus.{" "}
              </p>
            </div>
            <div className="price-card-price">
              <h4>$ 140</h4>
            </div>
            <div className="price-card-btn">
              <button>See details</button>
            </div>
          </div>
          <div className="price-card">
            <div className="price-card-header">
              <h4>Golden Package</h4>
            </div>
            <div className="price-card-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                nisl nibh, sagittis ac faucibus sit amet, faucibus vitae lacus.{" "}
              </p>
            </div>
            <div className="price-card-price">
              <h4>$ 140</h4>
            </div>
            <div className="price-card-btn">
              <button>See details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
