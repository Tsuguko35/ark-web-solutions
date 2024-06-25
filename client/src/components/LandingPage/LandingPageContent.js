import React from "react";
import { Link } from "react-router-dom";
import "../../styles/landingPageContent.css";
import { GetWindowWidth, programs_1, programs_2, projects } from "../../utils";

import { FiArrowDownRight } from "react-icons/fi";
import ClientReviews from "../Reusable/ClientReviews";
import DesignCarousel from "../Reusable/DesignCarousel";

function LandingPageContent() {
  const windowWidth = GetWindowWidth();
  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
  };
  return (
    <div id="landingPageContent" className="landingPageContent">
      <div className="wrapper">
        <div className="section-label">
          <p>About</p>
        </div>

        <div className="flex-text">
          <div className="main">
            <p>
              We deliver innovative and reliable web solutions that empower our
              clients to succeed in the digital world. We are committed to
              excellence, security, and user-centric design, building lasting
              partnerships through exceptional service.
            </p>
          </div>
          <div className="sub">
            <p>
              Our vision at ARK Web Services is to evolve from a dynamic startup
              into a leading web development company, renowned for transforming
              innovative ideas into impactful digital solutions. We aim to be a
              trusted partner for businesses worldwide, fostering growth through
              cutting-edge technology, unparalleled reliability, and a
              relentless focus on excellence.
            </p>

            <p className="title">Tools & Frameworks</p>
            {windowWidth > 768 && (
              <div className="images">
                <>
                  {programs_1.map((image, index) => (
                    <img key={index} src={image} alt="program icon" />
                  ))}
                </>
              </div>
            )}
          </div>
        </div>

        <div className="program-images">
          {windowWidth <= 768 && (
            <>
              {programs_1.map((image, index) => (
                <img key={index} src={image} alt="program icon" />
              ))}
            </>
          )}
          {programs_2.map((image, index) => (
            <img key={index} src={image} alt="program icon" />
          ))}
        </div>

        <div className="section-label">
          <p>Works</p>
        </div>

        <div className="projects">
          <p className="title">Selected Works</p>
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="details">
                <div className="text-content">
                  <p className="name">{`${formatNumber(index + 1)} / ${
                    project.name
                  }`}</p>
                  <p className="desc">{project.description}</p>
                  <p className="label">{project.label}</p>
                </div>
                <Link target="_blank" to={project.url}>
                  Link of the project ↗
                </Link>
              </div>
              <div className="preview">
                <img src={project.preview} alt={project.name} />
              </div>
            </div>
          ))}
        </div>

        <div className="design-carousel">
          <p className="title">Design Works</p>
          <DesignCarousel />
        </div>

        <div className="vision">
          <div className="vision-header">
            <div className="text-content">
              <p>Helping you thrive in the digital world</p>
            </div>
            <div className="logo">
              <div className="img-holder">
                <img
                  src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719230263/Ark_Web_Servces_Files/gslaqmv3jgystqgouxoo.webp"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="vision-quote">
            <div className="icon">
              <FiArrowDownRight />
            </div>

            <div className="text">
              <p>
                I help companies from all over the world with tailor-made
                solutions. With each project, I push my work to new horizons,
                always putting quality first.
              </p>
            </div>
          </div>

          <div className="profile">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dkwgg59ur/image/upload/v1719231665/Ark_Web_Servces_Files/mmblntlyhnkmnraaeicl.webp"
                alt="image"
              />
            </div>
            <div className="details">
              <p>
                At our core, we strive to be the leading innovators in the
                information technology landscape, delivering cutting-edge
                solutions that empower businesses to achieve their full
                potential. We envision a future where our company stands as a
                beacon of excellence in software development, project
                management, and system analysis. Our mission is to cultivate a
                culture of continuous learning and innovation, ensuring that we
                remain at the forefront of technological advancements and
                industry best practices.
              </p>
              <p>
                We are committed to transforming our clients' visions into
                reality by providing tailored, high-quality IT solutions that
                drive success and growth. Our goal is to build lasting
                partnerships with our clients, characterized by trust,
                collaboration, and mutual success. We aim to deliver exceptional
                value by understanding our clients' unique challenges and needs,
                and by offering innovative, reliable, and efficient solutions
                that enhance their operational efficiency and competitive edge.
              </p>
            </div>
          </div>

          <div className="benefits">
            <p className="title">I can help you with.. </p>
            <div className="benefits-grid">
              <div className="benefit">
                <p className="number">01</p>
                <p className="label">Design</p>
                <p className="desc">
                  With a solid track record in designing websites, I deliver
                  strong and user-friendly digital designs. (Since 2020 only in
                  combination with development)
                </p>
              </div>

              <div className="benefit">
                <p className="number">02</p>
                <p className="label">Development</p>
                <p className="desc">
                  I build scalable websites from scratch that fit seamlessly
                  with design. My focus is on micro animations, transitions and
                  interaction. Build with Kirby CMS or Webflow.
                </p>
              </div>

              <div className="benefit">
                <p className="number">03</p>
                <p className="label">The Full Package</p>
                <p className="desc">
                  A complete website from concept to implementation, that's what
                  makes me stand out. My great sense for design and my
                  development skills enable me to create projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="customers-review">
          <div className="text">
            <p className="title">
              Don't just take my word for it. Here is what others have to say...
            </p>
            <p className="label">
              My superpower is communication. Clear communication has lead to
              some of the most fruitful engagements. Expectations were managed
              well and timelines were met.
            </p>
          </div>
          <div className="carousel">
            <ClientReviews />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageContent;
