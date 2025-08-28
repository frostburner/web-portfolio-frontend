import React from 'react';
import Profile from "../assets/img/profile1.jpg";

const Homepage = () => {
  return (
    <section className="homepage"> 
      <div className="profile-img">
        <img src={Profile} alt="Profile" />
      </div> 

      <div className="inter-h1">Rafael Jose S. Villa</div>
      <p className="inter-desc">🚀 Developer/Designer</p>

      <div className="inter-p">
        Half designer, half developer, full time problem solver. <br />
        I like creating websites and applications that are simple, modern, and user-friendly.
      </div>

      <button className="contact">Contact Me</button>
    </section>
  );
}

export default Homepage;
