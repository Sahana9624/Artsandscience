import React from "react";
import "../../Styles/home/Welcome.css";

export default function Welcome() {
  return (
    <section className="home-welcome-section" id="welcome">
      <div className="home-welcome-container">
        <h2 className="home-section-title">
          Welcome To Mother Terasa College of{" "}
          <span className="highlight-maroon">Arts &amp; Science</span>
        </h2>

        <p className="home-welcome-description">
         Mother Terasa College of Arts & Science(MTAC) is located in Illuppur on the 
         Highway connecting Pudukkottai and Viralimalai. It is 25 kms from Pudukkottai. 
         The dry and hot fileds of Illuppur have been converted into fields of ever green
          education by this Trust.The college has a serene, calm and pollution free 
          environment that helps the students in all aspects to concentrate in their studies.
        </p>

        <a href="#about" className="welcome-learn-more-btn">
          Read Now
        </a>
      </div>
    </section>
  );
}
