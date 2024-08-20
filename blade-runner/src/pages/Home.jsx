import React from "react";
import "./Home.scss";
import back_v from "./BR-BG.mp4";

const Home = () => {
  return (
    <div className="Home--Componment" id="init">
      <video autoPlay loop muted plays-inline="true" className="back-video">
        <source src={back_v} type="video/mp4" />
      </video>

      <div className="home-page" id="hm">
        <h1 className="title">Blade Runner</h1>
        <h2 className="sub-title">Black Lotus</h2>
        <p className="animate__animated animate__bounce animate__infinite 	infinite animate__slow 2s">
          <i className="bi bi-chevron-down" id="down"></i>
        </p>
      </div>
    </div>
  );
};

export default Home;
