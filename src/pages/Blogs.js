// Certificates.js
import React from "react";
import "./blogs.css"; // Import CSS file for styling

const Blogs = () => {
  return (
    <div className="certificates" style={{ marginTop: "5rem" }}>
      <h1>My Certificates</h1>
      <div className="certificate-list">
        <div className="certificate">
          <a href="./tempo.jpg">
            <img src="/tempo.jpg" alt="Certificate 1" />
            <p>My Tempo for B.sc. Degree in CS</p>
          </a>
        </div>
        <div className="certificate">
          <a href="./gld.png">
            <img src="/gld.png" alt="Certificate 2" />
            <p>Recognition of Gold Medalist</p>
          </a>
        </div>
        <div className="certificate">
          <a href="./rec.jpg">
            <img src="/rec.jpg" alt="Certificate 3" />
            <p>Free online React Training Certificate</p>
          </a>
        </div>
        {/* Add more certificates as needed */}
      </div>
    </div>
  );
};

export default Blogs;
