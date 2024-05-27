import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About({ setPlayState }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>
          Unlock the power of education by becoming a part of our community of
          dedicated instructors. Our platform provides a space for you to share
          your expertise, inspire others, and make a meaningful impact
        </p>
        <p>
          Optimize your reach with a feature filled platform for your target
          audience.Effortlessly provide training and development programs to
          your staff, volunteers, or members across the globe.Customizable
          content, interactive features, and a user-friendly interface make
          learning enjoyable for everyone.
        </p>
        <p>
          Transform Your Training. Upskill your workforce. Future-proof Your
          Business. You want to adapt, grow, and ensure your employees are
          equipped for the future of your business. Revolutionize workplace
          training with a flexible e-learning platform. Personalized options
          make workforce development easy for businesses of all sizes.
        </p>
      </div>
    </div>
  );
}

export default About;
