import React from "react";
import "./TalkCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function TalkCard({ talkDetails }) {
  return (
    <div className="talk-card">
      <div className={talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"}>
        {talkDetails.image && (
          <img
            src={require(`../../assets/images/${talkDetails.image}`)}
            alt={`Profile picture of ${talkDetails.name}`}
            className="testimonial-avatar"
          />
        )}
        <div className="testimonial-quote">"{talkDetails.quote}"</div>
        <p className="testimonial-name">{talkDetails.name}</p>
        <p className="testimonial-role">{talkDetails.role}</p>
        <div className="card-footer-button-div">
          <a
            href={talkDetails.profile_url}
            target="_blank"
            rel="noopener noreferrer"
            className="talk-button"
            aria-label={`View ${talkDetails.name}'s profile`}
          >
            View Profile <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </div>
  );
}