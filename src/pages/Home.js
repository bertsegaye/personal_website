import React from "react";
import "./home.css";
function Home() {
  return (
    <div style={{ marginTop: "5rem" }} className="main imagecontainer">
      <div>
        <img src={"./b4.jpg"} alt="Myimage" className="profile1" />
      </div>
      <div className="photo">
        <img src={"./bbbb.jpg"} alt="Myimage" className="profile2" />
      </div>
      <div className="text textcontainer">
        <p>Full Name: Berihun Tsegaye Sisay</p>
        <p style={{ color: "green", fontWeight: "normal" }}>
          Field of Study: B.Sc. Degree in Computer Science(2020-2023)
        </p>
      </div>
    </div>
  );
}
export default Home;
