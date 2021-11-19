import React from "react";
import "./we.css";
import weImg from "../_data/content-2.svg";

function We() {
  return (
    <section id="we" className="we">
      <div className="we-left">
        <img src={weImg} alt="" />
      </div>
      <div className="we-right">
        <article>
          <p className="right-top">biograpy</p>
          <h4>who we are</h4>
          <p className="right-bot">
            Lorem Media is a full-service social media agency. We offer
            businesses innovative solutions that deliver the right type of
            audience to you in the most effective strategies possible. We strive
            to develop a community around your business, polishing your
            branding, and improving your public relations. Social Media is now
            one of the most powerful marketing tools with the ability to
            communicate with a target audience in real time.
          </p>
          <p className="right-bot message">It's 2019: time to sink or swim.</p>
          <button className="">see more</button>
        </article>
      </div>
    </section>
  );
}

export default We;
