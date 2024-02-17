import React from "react";
import "./Projects.css"; // Import CSS file for styling

const Projects = () => {
  return (
    <div className="certificatess" style={{ marginTop: "5rem" }}>
      <u>
        <h1 style={{ color: "black", textAlign: "center" }}>
          List of Dveloped Projects
        </h1>
      </u>
      <div className="certificatelist">
        <div className="certificat">
          <ul className="part">
            <h4>Title: Tours and Travel Management System </h4>
            <li>Type: Web and Androide based</li>
            <li>
              Language: HTML, JS, CSS, Bootstrap and Java Androide(Java and XML)
            </li>
            <li>Database: RDBMS</li>
            <li>Issued for: Final Project</li>
            <li>
              Grade:
              <ul>
                <li>Documentation: A+ </li>
                <li>Implementation: A+</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="certificat">
          <ul>
            <h4>Title: Asset Management System</h4>
            <li>Type: Web based for AsU</li>
            <li>Language: HTML, JS, CSS, Bootstrap</li>
            <li>Database: RDBMS</li>
            <li>Issued for: For Selling</li>
          </ul>
        </div>
        <div className="certificat">
          <ul>
            <h4>Title: Prison Management System </h4>
            <li>Type: Web and Androide based</li>
            <li>Language: HTML, JS, CSS, Bootstrap</li>
            <li>Database: RDBMS</li>
            <li>Issued for: Final Project</li>
          </ul>
        </div>
        <div className="certificat">
          <ul>
            <h4>Title: Department Placement </h4>
            <li>Type: Web and Androide based</li>
            <li>Language: HTML, JS, CSS, Bootstrap</li>
            <li>Database: RDBMS</li>
            <li>Issued for: Final Project</li>
          </ul>
        </div>
        {/* Add more certificates as needed */}
      </div>
    </div>
  );
};

export default Projects;
