import React, { useRef } from "react";
import "./StartupProject.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sumuppix from "../../assets/images/sumuppix.png";
import gamifiedTest from "../../assets/images/gamifiedTest.png";
import aiBanking from "../../assets/images/aiBanking.png";

const imageMap = {
  "sumuppix.png": sumuppix,
  "gamifiedTest.png": gamifiedTest,
  "aiBanking.png": aiBanking,
};

export default function StartupProject() {
  const sliderRef = useRef(null);

  if (!bigProjects.display) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: <button className="carousel-arrow prev" aria-label="Previous slide" />,
    nextArrow: <button className="carousel-arrow next" aria-label="Next slide" />,
  };

  const handleImageLoad = () => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="project-header">
          <h1 className="skills-heading">Cases</h1>
          <p className="project-subtitle">Explore my design work</p>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {bigProjects.projects.map((project, i) => (
            <div key={i}>
              <div className="project-card">
                <div className="project-image">
                  <img
                    src={imageMap[project.image]}
                    alt={`Screenshot of ${project.title} project`}
                    className="card-image"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="project-detail">
                  <h5 className="card-title">{project.title}</h5>
                  <div className="project-description">
                    <p><strong className="description-label">Problem:</strong> {project.description.Problem}</p>
                    <p><strong className="description-label">Challenge:</strong> {project.description.Challenge}</p>
                    <p><strong className="description-label">Results:</strong> {project.description.Results}</p>
                  </div>
                  {project.link && (
                    <div className="project-card-footer">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-project-button"
                        aria-label={`View ${project.title} project`}
                        role="button"
                      >
                        View Project <span className="arrow-icon">➤</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Fade>
  );
}