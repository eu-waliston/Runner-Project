import React from "react";
import "./News.scss";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div id="news">
      <h1
        class="news-h1"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        news
      </h1>

      <div className="container">
        <div className="side-a">
          <h1 class="side-a-title-news">
            Blade Runner: Black Lotus: Possible New Storylines for Season 2
          </h1>
          <Link to="https://www.crunchyroll.com/pt-br/series/GZJH3DPK0/blade-runner-black-lotus?srsltid=AfmBOor9G_PEluihgjLkBJDFE-3R2ogd73l8Wdzx6JlVIT6ECZjm3Pk9"  target='_blank'>
            <img
              src="/images/banner-news.png"
              alt="banner news"
              class="side-a-banner-news"
            />
          </Link>

          <p class="side-a-sub-title-news">
            And what was that second hoverbike doing there? Here are some
            possible new storylines we could see in Blade Runner: Black Lotus
            season 2.
          </p>
        </div>

        <div className="side-b">
          <h3 className="side-b-image-title">The Timeline</h3>
          <Link to={"https://www.animenewsnetwork.com/encyclopedia/anime.php?id=24422"}  target='_blank'>
            <img src="/images/banner-news2.png" alt="" className="side-b-image "/>
          </Link>
          <h3 className="side-b-image-title space">The Second Hoverbike</h3>
          <Link to={"https://wdny.io/blade-runner/"}  target='_blank'>
            <img src="/images/banner-news3.png" alt="" className="side-b-image"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
