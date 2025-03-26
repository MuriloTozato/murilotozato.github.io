import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
// Try importing the image; if this fails, use the public path instead
import yourFaceImage from "../../assets/images/your-face-image.png";

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>
            <div className="contact-text-div">
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <img
                src={yourFaceImage} // Use the imported image; if this fails, switch to "/images/your-face-image.png"
                alt="Murilo Tozato's face"
                className="face-icon"
              />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}