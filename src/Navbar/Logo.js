import React from "react";
import "./logo.css";
//import profile from "./public/b1.jpg";
const Logo = () => {
  return (
    <div className="image-container">
      <img src={"./b1.jpg"} alt="My-Profile" className="profile" />
      <div className="text-container">
        <h3>BerTsegaye</h3>
      </div>
    </div>
  );
};
export default Logo;
