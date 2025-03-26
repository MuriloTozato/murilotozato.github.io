import React from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">
          {emoji("Made by Murilo Tozato")}
        </p>
        <p className="footer-text">
          Want to host your portfolio for free?{" "}
          <a
            href="mailto:muriloht123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Contact Me!
          </a>
        </p>
      </div>
    </Fade>
  );
}