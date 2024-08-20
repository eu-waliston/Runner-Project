import React from "react";
import "./Trailer.scss";

const Trailer = () => {
  return (
    <div className="Trailer" id="trailer">
      <img src="images/img4.jpg" alt="" id="fundo" />
      <iframe
        width="950"
        height="515"
        src="https://www.youtube.com/embed/eUu3lK_Z8VM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Trailer;
