import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { GetWindowWidth, handleScrollSection } from "../utils";

function Navbar() {
  const windowWidth = GetWindowWidth();
  const prevScrollY = useRef(0);
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (windowWidth > 768) {
      setOpen(true);
    }
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 500 && currentScrollY > prevScrollY.current) {
      setOpen(false);
    } else {
      if (currentScrollY > 500) {
        setOpen(false);
      }
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      id="navbar"
      className={`navbar ${!open ? "close" : ""}`}
    >
      <div className="icon" onClick={() => setOpen(!open)}>
        <RxHamburgerMenu />
      </div>
      <div className="nav-links">
        <span
          className="nav-item"
          onClick={() => handleScrollSection("_About")}
        >
          About
        </span>
        <span
          className="nav-item"
          onClick={() => handleScrollSection("_Projects")}
        >
          Projects
        </span>
        <span
          className="nav-item"
          onClick={() => handleScrollSection("_Vision")}
        >
          Vision
        </span>
        <span
          className="nav-item"
          onClick={() => handleScrollSection("_Clients")}
        >
          Clients
        </span>
        <span
          className="nav-item"
          onClick={() => handleScrollSection("_Contact")}
        >
          Contact
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
