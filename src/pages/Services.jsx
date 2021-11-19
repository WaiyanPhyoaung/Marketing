import React from "react";
import "./services.css";
import cardIcon1 from "../_data/icon-1.svg";
import cardIcon2 from "../_data/icon-2.svg";
import cardIcon3 from "../_data/icon-3.svg";
import cardIcon4 from "../_data/icon-4.svg";
import cardIcon5 from "../_data/icon-5.svg";
import cardIcon6 from "../_data/icon-6.svg";

function Services() {
  return (
    <section id="services" className="services">
      <div className="service-top">
        <p>our services</p>
        <h4>what we offer</h4>
      </div>
      <div className="service-bot">
        <article className="service-bot-container">
          <div className="card">
            <div className="card-icon">
              <img src={cardIcon1} alt="" />
            </div>
            <div className="card-header">social media management</div>
            <div className="card-info">
              Perfect for growing your brand’s social community and engage with
              the right audience. We manage everything from curation of content
              to management of comments and everything in between.
            </div>
            <div className="card-btn">
              <button>see more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={cardIcon2} alt="" />
            </div>
            <div className="card-header">SOCIALS GROWTH CAMPAIGN</div>
            <div className="card-info">
              Our social growth campaign will have your socials come alive. With
              constant growth and engagement you will be sure to have the
              thriving you’ve been looking for.
            </div>
            <div className="card-btn">
              <button>see more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={cardIcon3} alt="" />
            </div>
            <div className="card-header">BRANDING & MEDIA</div>
            <div className="card-info">
              Done right, branding offers a company an edge over the
              competition. So what exactly is branding, and why is it important
              for companies to integrate a well-rounded branding and media
              strategy?
            </div>
            <div className="card-btn">
              <button>see more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={cardIcon4} alt="" />
            </div>
            <div className="card-header">INFLUENCER MARKETING</div>
            <div className="card-info">
              We will pair your business with influencers that speak to your
              audience. Influencer Marketing is the most effective way to reach
              a loyal audience.
            </div>
            <div className="card-btn">
              <button>see more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={cardIcon5} alt="" />
            </div>
            <div className="card-header">SOCIAL MEDIA PAID ADVERTISING</div>
            <div className="card-info">
              Our ad campaigns will bring you the results your looking for. From
              brand awareness campaigns to lead funnels, we have got the tools
              to create the right ads for your business. Our re-targeting
              campaigns will be sure to get your visitors coming back to your
              site.
            </div>
            <div className="card-btn">
              <button>see more</button>
            </div>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={cardIcon6} alt="" />
            </div>
            <div className="card-header">CONTENT MARKETING SERVICES</div>
            <div className="card-info">
              We can create and provide your company with the best content
              marketing for your socials to improve online presence. Creating
              valuable and quality content helps boost conversions and improve
              customer retention.
            </div>
            <div className="card-btn">
              <button>see more</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;
