import React from "react";
import "../../styles/landingPageHeader.css";
import { Link } from "react-router-dom";

import { FiArrowDownRight } from "react-icons/fi";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { handleScrollSection } from "../../utils";

function LandingPageHeader() {
  return (
    <header id="landingPageHeader" className="landingPageHeader">
      <div className="background">
        <img
          src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719214668/Ark_Web_Servces_Files/uxqqirjifsdrezs8hwzu.webp"
          alt="header"
        />
      </div>
      <div className="wrapper">
        <FiArrowDownRight className="arrow" />

        <div className="title">
          <p>ARK</p>
          <p>Web Services</p>
        </div>

        <div className="label">
          <p>Freelance</p>
          <p>
            Designer & <span className="accent2">Developer</span>
          </p>
        </div>

        <div className="socials">
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

        <div className="action">
          <button onClick={() => handleScrollSection("_Contact")}>
            Contact Us
          </button>
        </div>
      </div>
      <div className="side-detail">
        <img
          src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719219449/Ark_Web_Servces_Files/gwysu2fd4hg2kprbu0ll.webp"
          alt="side detail"
        />
        <div className="text-content">
          <p>Located</p>
          <p>in the</p>
          <p>Philippines</p>
        </div>
      </div>
    </header>
  );
}

export default LandingPageHeader;
