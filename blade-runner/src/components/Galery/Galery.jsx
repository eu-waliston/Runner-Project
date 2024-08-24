/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Galery.scss";

const Galery = () => {
  return (
    <div id="galery">
      <h1
        class="galery-h1"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        galery
      </h1>

      <div class="photos-section">
        <img src="./images/img1.jpg" />
        <img src="./images/img2.jpg" />
        <img src="./images/img3.jpg" />
        <img src="./images/img4.jpg" />
        <img src="./images/img5.jpg" />
        <img src="./images/banner-news.png" />
        <img src="./images/banner-news2.png" />
        <img src="./images/banner-news3.png" />
        <img src="./images/alt1.jpg" />
        <img src="./images/alt2.jpg" />
        <img src="./images/blade-runner.jpg" />
        <img src="./images/ssda.jpg" />
      </div>
    </div>
  );
};

export default Galery;
