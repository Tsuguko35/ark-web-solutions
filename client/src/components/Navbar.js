import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { GetWindowWidth } from "../utils";

function Navbar() {
  const windowWidth = GetWindowWidth();
  const prevScrollY = useRef(0);
  const [open, setOpen] = useState(true);
  const [miniOpen, setMiniOpen] = useState(false);

  useEffect(() => {
    if (windowWidth <= 768) {
      setOpen(false);
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

  return (
    <nav id="navbar" className={`navbar ${!open ? "close" : ""}`}>
      <div className="icon" onClick={() => setOpen(!open)}>
        <RxHamburgerMenu />
      </div>
      <div className="nav-links">
        <Link className="nav-item">About</Link>
        <Link className="nav-item">Projects</Link>
        <Link className="nav-item">Vision</Link>
        <Link className="nav-item">Clients</Link>
        <Link className="nav-item">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
