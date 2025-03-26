import React, { useContext } from "react";
import TalkCard from "../../components/talkCard/TalkCard";
import "./Talks.scss";
import { talkSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Testimonials() {
  const { isDark } = useContext(StyleContext);

  if (!talkSection.display) {
    return null;
  }

  return (
    <div className="main" id="Testimonials">
      <div className="Testimonials-header">
        <h1 className="Testimonials-header-title">{talkSection.title}</h1>
        <p
          className={
            isDark
              ? "dark-mode Testimonials-header-subtitle"
              : "subTitle Testimonials-header-subtitle"
          }
        >
          {talkSection.subtitle}
        </p>
        <div className="talk-cards-div">
          {talkSection.talks.map((talk, i) => (
            <TalkCard
              key={i}
              talkDetails={{
                quote: talk.quote,
                name: talk.name,
                role: talk.role,
                profile_url: talk.profile_url,
                image: talk.image,
                isDark,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}