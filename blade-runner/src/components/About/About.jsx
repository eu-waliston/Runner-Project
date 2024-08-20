import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div id="about">
      <div id="about-central">
        <img src="images/img1.jpg" alt="" id="fundo" />

        <h1 class="about-title" data-aos="fade-up" data-aos-duration="3000">
          about
        </h1>
        <h5
          class="about-desc"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <span class="namest">Blade Runner: Black Lotus</span> is a 13-episode
          anime series, <br /> based on the Blade Runner franchise. <br /> The
          series is produced by Sola Digital Arts <br /> with Shinji Aramaki and
          Kenji Kamiyama <br /> signed on to direct all episodes. <br />
          Shinichirō Watanabe – director of Blade Runner Black Out 2022 <br />{" "}
          serves as a creative producer. <br />
          The series premiered on Adult Swim and Crunchyroll <br /> on November
          14, 2021 and concluded on February 6, 2022.
          <br /> A sequel, in the form of a four-issue comic book, <br /> will
          begin to release on August 10, 2022. <br />
          The series will receive a behind-the-scenes book, <br /> The Art of
          Blade Runner: Black Lotus, which is due for release in 2022.
        </h5>

        <img
          src="/images/Black_Lotus_key_art.webp"
          alt="fndo"
          class="banner"
          data-aos="flip-left"
          data-aos-duration="2000"
        />

        <h2
          class="plot-title"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <span class="namest">plot</span>
        </h2>

        <h5
          class="plot-content"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          Black Lotus takes place in Los Angeles in 2032, 10 years into the
          aftermath of the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Blade_Runner_Black_Out_2022"
            target="_blank"
            rel="noreferrer"
          >
            Black Out 2022
          </a>
          , <br />
          but before{" "}
          <a
            href="https://en.wikipedia.org/wiki/2036:_Nexus_Dawn"
            target="_blank"
            rel="noreferrer"
          >
            2036: Nexus Dawn
          </a>
          , <br />
          and centers on a female replicant protagonist. <br /> It also includes
          "familiar" characters from the Blade Runner universe.
        </h5>
      </div>
    </div>
  );
};

export default About;
