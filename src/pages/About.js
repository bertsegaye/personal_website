import React from "react";
import "./about.css"; // Import CSS file for styling

const About = () => {
  return (
    <div className="certificates" style={{ marginTop: "5rem" }}>
      <h1>My Certificates</h1>
      <div className="certificate-list">
        <div className="certificate">
          <a href="./cvv.png">
            <img src="/cvv.png" alt="Certificate 3" />
            <p>My Resume</p>
          </a>
        </div>
        {/* Add more certificates as needed */}
      </div>
    </div>
  );
};
export default About;
