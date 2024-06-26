import React from "react";
import "../styles/footer.css";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactForm from "./Reusable/ContactForm";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="wrapper">
        <div id="_Contact" className="contact-details sections">
          <div className="label">
            <div className="width-image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719294783/Portfolio_Files/otpch4y7gapsmpg2ejhz.webp"
                alt=""
              />
              <p>Let’s work</p>
            </div>
            <p>together</p>
          </div>
          <div className="contact-info">
            <div className="contact">
              <p>jayson.batoon@bulsu.edu.ph</p>
              <p>+63 999-873-3212</p>
            </div>
            <div className="socials">
              <div className="links">
                <Link>
                  <FaFacebookSquare />
                </Link>
                <Link>
                  <FaLinkedin />
                </Link>
                <Link>
                  <FaGithub />
                </Link>
                <Link>
                  <FaInstagram />
                </Link>
                <Link>
                  <FaYoutube />
                </Link>
              </div>

              <button className="cv">Download CV</button>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
