import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.fontAwesomeClassname ? (
                  <i className={skills.fontAwesomeClassname}></i>
                ) : skills.imagePath ? (
                  <img
                    src={require(`../../assets/images/${skills.imagePath}`)}
                    alt={skills.skillName}
                    className="skill-image"
                  />
                ) : null}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}